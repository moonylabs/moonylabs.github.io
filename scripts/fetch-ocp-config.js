#!/usr/bin/env node

/**
 * Fetches Moony configuration from code-payments/ocp-server
 * and updates docs/data/moony-config.json
 * 
 * TEMPORARY TEST MODE: Currently using Jeffy addresses for layout testing
 * Set TEST_MODE = false to search for Moony/MNY when ready
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Try multiple possible paths
const CONFIG_URLS = [
  'https://raw.githubusercontent.com/code-payments/ocp-server/main/pkg/code/config/config.go',
  'https://raw.githubusercontent.com/code-payments/ocp-server/main/pkg/code/config/constants.go',
  'https://raw.githubusercontent.com/code-payments/ocp-server/main/pkg/code/config.go'
];
const OUTPUT_FILE = path.join(__dirname, '../docs/data/moony-config.json');
const DATA_DIR = path.join(__dirname, '../docs/data');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

function fetchFile(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to fetch: ${res.statusCode}`));
        return;
      }
      
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        resolve(data);
      });
    }).on('error', reject);
  });
}

function parseGoConfig(goCode) {
  const config = {
    deployed: false,
    lastChecked: new Date().toISOString(),
    mintAddress: null,
    authorityAddress: null,
    reserveContractAddress: null,
    moonyVaultAddress: null,
    vmAccountAddress: null,
    vmOmnibusAddress: null,
    source: 'https://github.com/code-payments/ocp-server/blob/main/pkg/code/config/config.go'
  };

  // TEMPORARY: Testing with Jeffy addresses to dial in formatting/layout
  // TODO: Revert to Moony/MNY once layout is locked in
  const TEST_MODE = true; // Set to false to search for Moony/MNY
  
  // We don't know the exact naming convention, so we search for ANY constant
  // that contains "Moony" or "MNY" (or "Jeffy" for testing) and try to infer what it is
  const searchPattern = TEST_MODE ? 'Jeffy' : '(?:Moony|MNY)';
  const constantPattern = new RegExp(`\\b${searchPattern}[A-Za-z0-9]*(?:PublicKey|Address)?\\s*=\\s*"([^"]+)"`, 'gi');
  
  // Also search for shared reserve/vault addresses that might not be token-specific
  // These could be named like "ReserveContract", "USDCReserve", "Vault", etc.
  // NOTE: Reserve/Vault addresses may not be in the public config - they might be PDAs
  // or stored in private/internal config files
  const sharedReservePattern = /\b(?:Reserve|Vault|Treasury|USDCReserve|USDFReserve)[A-Za-z0-9]*(?:PublicKey|Address)?\s*=\s*"([^"]+)"/gi;
  
  // Also try token-specific reserve/vault patterns
  const tokenReservePattern = new RegExp(`\\b${searchPattern}(?:Reserve|Vault|Treasury)[A-Za-z0-9]*(?:PublicKey|Address)?\\s*=\\s*"([^"]+)"`, 'gi');
  
  let match;
  const foundConstants = {};
  
  // First, find token-specific constants (Jeffy/Moony)
  while ((match = constantPattern.exec(goCode)) !== null) {
    const fullMatch = match[0];
    const constantName = fullMatch.split('=')[0].trim();
    const value = match[1];
    foundConstants[constantName] = value;
  }
  
  // Also search for shared reserve/vault addresses
  while ((match = sharedReservePattern.exec(goCode)) !== null) {
    const fullMatch = match[0];
    const constantName = fullMatch.split('=')[0].trim();
    const value = match[1];
    foundConstants[constantName] = value;
  }
  
  // Also try token-specific reserve/vault patterns (e.g., JeffyReserveContractPublicKey)
  while ((match = tokenReservePattern.exec(goCode)) !== null) {
    const fullMatch = match[0];
    const constantName = fullMatch.split('=')[0].trim();
    const value = match[1];
    foundConstants[constantName] = value;
  }
  
  // Now try to map them to our expected fields based on keywords in the name
  const fieldMappings = {
    mintAddress: ['mint'],
    authorityAddress: ['authority'],
    reserveContractAddress: ['reserve', 'reservecontract', 'usdcreserve'],
    moonyVaultAddress: ['vault', 'treasury'],
    vmAccountAddress: ['vmaccount'],
    vmOmnibusAddress: ['vmomnibus'],
  };
  
  // Match found constants to our fields
  for (const [constantName, value] of Object.entries(foundConstants)) {
    const lowerName = constantName.toLowerCase();
    
    for (const [field, keywords] of Object.entries(fieldMappings)) {
      for (const keyword of keywords) {
        if (lowerName.includes(keyword) && !config[field]) {
          config[field] = value;
          // Mark as deployed if we find mint or authority
          if (field === 'mintAddress' || field === 'authorityAddress') {
            config.deployed = true;
          }
          break;
        }
      }
    }
  }
  
  // Also mark as deployed if we find reserve or vault
  if (config.reserveContractAddress || config.moonyVaultAddress) {
    config.deployed = true;
  }
  
  // Debug: Log what we found
  if (Object.keys(foundConstants).length > 0) {
    console.log(`Found ${TEST_MODE ? 'Jeffy' : 'Moony/MNY'} constants:`);
    Object.entries(foundConstants).forEach(([name, value]) => {
      console.log(`  ${name} = ${value.substring(0, 20)}...`);
    });
  }
  
  if (config.deployed) {
    console.log('\nMapped to config fields:');
    Object.entries(config).forEach(([key, value]) => {
      if (value && key !== 'deployed' && key !== 'lastChecked' && key !== 'source') {
        console.log(`  ${key}: ${value.substring(0, 20)}...`);
      }
    });
  }
  
  if (TEST_MODE) {
    console.log('\n⚠️  TEST MODE: Using Jeffy addresses for layout testing');
    console.log('   Remember to set TEST_MODE = false before Moony deployment!');
  }

  return config;
}

/**
 * Fetches reserve and vault addresses from Solana blockchain
 * by querying token accounts for the given mint address
 */
async function fetchReserveAndVaultFromSolana(mintAddress) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({
      jsonrpc: '2.0',
      id: 1,
      method: 'getProgramAccounts',
      params: [
        'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
        {
          encoding: 'jsonParsed',
          filters: [
            { dataSize: 165 },
            { memcmp: { offset: 0, bytes: mintAddress } }
          ]
        }
      ]
    });

    const options = {
      hostname: 'api.mainnet-beta.solana.com',
      port: 443,
      path: '/',
      method: 'POST',
      timeout: 10000, // 10 second timeout
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': postData.length
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          if (response.error) {
            reject(new Error(response.error.message));
            return;
          }

          const accounts = response.result || [];
          
          // Find vault: account with largest balance (holds unminted tokens)
          let vaultAddress = null;
          let maxBalance = 0;
          
          accounts.forEach(acc => {
            const balance = parseFloat(acc.account.data.parsed.info.tokenAmount.uiAmount || 0);
            if (balance > maxBalance) {
              maxBalance = balance;
              vaultAddress = acc.pubkey;
            }
          });

          resolve({
            vaultAddress,
          });
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on('error', reject);
    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });
    req.setTimeout(10000);
    req.write(postData);
    req.end();
  });
}

/**
 * Gets the authority address from a mint account
 */
async function getMintAuthority(mintAddress) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({
      jsonrpc: '2.0',
      id: 1,
      method: 'getAccountInfo',
      params: [
        mintAddress,
        { encoding: 'jsonParsed' }
      ]
    });

    const options = {
      hostname: 'api.mainnet-beta.solana.com',
      port: 443,
      path: '/',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': postData.length
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          if (response.error) {
            reject(new Error(response.error.message));
            return;
          }

          const mintInfo = response.result?.value?.data?.parsed?.info;
          if (mintInfo) {
            // Authority might be in mintAuthority field or owner
            const authority = mintInfo.mintAuthority || mintInfo.owner;
            resolve(authority);
          } else {
            resolve(null);
          }
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

async function main() {
  try {
    console.log('Fetching OCP config from GitHub...');
    let goCode = null;
    let lastError = null;
    
    // Try each possible URL
    for (const url of CONFIG_URLS) {
      try {
        goCode = await fetchFile(url);
        console.log(`✅ Found config at: ${url}`);
        break;
      } catch (error) {
        lastError = error;
        console.log(`⚠️  Not found at: ${url}`);
      }
    }
    
    // Read existing config first (in case OCP config is not accessible)
    let existingConfig = { deployed: false };
    if (fs.existsSync(OUTPUT_FILE)) {
      try {
        existingConfig = JSON.parse(fs.readFileSync(OUTPUT_FILE, 'utf8'));
      } catch (e) {
        console.log('Could not read existing config, starting fresh');
      }
    }
    
    let config;
    if (goCode) {
      console.log('Parsing Moony configuration...');
      config = parseGoConfig(goCode);
    } else {
      // If OCP config not accessible, use existing config as base
      console.log('⚠️  OCP config not accessible, using existing config as base');
      config = { ...existingConfig };
      if (!config.mintAddress) {
        throw lastError || new Error('Could not find config file and no existing mint address');
      }
    }
    
    // If we have a mint address but missing reserve/vault, try to fetch from Solana
    // This is a fallback when addresses aren't in OCP config
    if (config.mintAddress && config.deployed && (!config.moonyVaultAddress || !config.reserveContractAddress)) {
      try {
        console.log('Fetching reserve and vault addresses from Solana RPC...');
        const solanaData = await fetchReserveAndVaultFromSolana(config.mintAddress);
        
        // If we're fetching from Solana, mark each address individually
        if (solanaData.vaultAddress && !config.moonyVaultAddress) {
          config.moonyVaultAddress = solanaData.vaultAddress;
          config._vaultFromSolana = true;
          config._fetchedFromSolana = true;
          console.log(`✅ Found vault address from Solana: ${solanaData.vaultAddress.substring(0, 20)}...`);
        }
        
        // Reserve contract is typically the authority
        // If we're setting it here (not from OCP), it's from Solana
        if (!config.reserveContractAddress && config.authorityAddress) {
          config.reserveContractAddress = config.authorityAddress;
          config._reserveFromSolana = true;
          config._fetchedFromSolana = true;
          console.log(`✅ Using authority as reserve contract: ${config.authorityAddress.substring(0, 20)}...`);
        }
        
        // If we have reserve/vault but they weren't in OCP config, they came from Solana
        // Check individually - reserve might be from OCP (authority) but vault from Solana
        if (config.moonyVaultAddress && !config._vaultFromSolana) {
          // Vault exists but wasn't marked - check if it was in OCP constants
          // For now, if we fetched from Solana, assume vault is from Solana
          if (config._fetchedFromSolana) {
            config._vaultFromSolana = true;
          }
        }
        
        if (config.reserveContractAddress && !config._reserveFromSolana) {
          // Reserve exists - if it matches authority from OCP, it's from OCP
          // Otherwise, it's from Solana
          if (config._fetchedFromSolana && config.reserveContractAddress === config.authorityAddress) {
            // Reserve = authority, which came from OCP, so reserve is from OCP
            config._reserveFromSolana = false;
          } else if (config._fetchedFromSolana) {
            config._reserveFromSolana = true;
          }
        }
      } catch (error) {
        console.log(`⚠️  Could not fetch from Solana RPC: ${error.message}`);
        console.log('   Continuing with addresses from OCP config only');
        // Don't fail - continue with what we have
      }
    }
    
    // Only update if something changed or if Moony is now deployed
    const hasChanges = 
      config.deployed !== existingConfig.deployed ||
      config.mintAddress !== existingConfig.mintAddress ||
      config.authorityAddress !== existingConfig.authorityAddress ||
      config.reserveContractAddress !== existingConfig.reserveContractAddress ||
      config.moonyVaultAddress !== existingConfig.moonyVaultAddress ||
      config.vmAccountAddress !== existingConfig.vmAccountAddress ||
      config.vmOmnibusAddress !== existingConfig.vmOmnibusAddress;
    
    if (hasChanges || config.deployed) {
      fs.writeFileSync(OUTPUT_FILE, JSON.stringify(config, null, 2));
      console.log('✅ Updated Moony config:', {
        deployed: config.deployed,
        mintAddress: config.mintAddress || 'Not found',
      });
    } else {
      console.log('ℹ️  No changes detected');
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    // Don't fail the workflow if Moony isn't deployed yet
    if (error.message.includes('Failed to fetch')) {
      console.log('⚠️  Could not fetch config (Moony may not be deployed yet)');
      process.exit(0);
    }
    process.exit(1);
  }
}

main();
