<template>
  <div class="reserve-addresses" v-if="config.deployed">
    <div class="contract-addresses">
      <div class="contract-card" v-if="config.reserveContractAddress">
        <div class="contract-header">
          <h4>USDF Reserve Contract</h4>
          <small>Holds all USDF deposits used to unlock MNY</small>
        </div>
        <div class="contract-address">
          <code>{{ config.reserveContractAddress }}</code>
          <button class="copy-btn" @click="copyToClipboard(config.reserveContractAddress, $event)">
            <svg class="copy-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <span class="copy-text">Copy</span>
          </button>
        </div>
        <div class="address-source">
          <small>
            Source: 
            <span v-if="config._reserveFromSolana">
              <a :href="config.reserveContractAddress ? `https://explorer.solana.com/address/${config.reserveContractAddress}` : 'https://explorer.solana.com'" target="_blank" rel="noopener">
                Solana blockchain
                <svg class="external-link-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M10.5 1.5L1.5 10.5M10.5 1.5H6M10.5 1.5V6"/>
                </svg>
              </a>
            </span>
            <span v-else>
              <a :href="config.source || 'https://github.com/code-payments/ocp-server'" target="_blank" rel="noopener">
                OCP config
                <svg class="external-link-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M10.5 1.5L1.5 10.5M10.5 1.5H6M10.5 1.5V6"/>
                </svg>
              </a>
            </span>
          </small>
        </div>
      </div>

      <div class="contract-card" v-if="config.moonyVaultAddress">
        <div class="contract-header">
          <h4>Moony Vault</h4>
          <small>Holds locked MNY tokens from the pre-minted supply (21M total)</small>
        </div>
        <div class="contract-address">
          <code>{{ config.moonyVaultAddress }}</code>
          <button class="copy-btn" @click="copyToClipboard(config.moonyVaultAddress, $event)">
            <svg class="copy-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <span class="copy-text">Copy</span>
          </button>
        </div>
        <div class="address-source">
          <small>
            Source: 
            <span v-if="config._vaultFromSolana || config._fetchedFromSolana">
              <a :href="config.moonyVaultAddress ? `https://explorer.solana.com/address/${config.moonyVaultAddress}` : 'https://explorer.solana.com'" target="_blank" rel="noopener">
                Solana blockchain
                <svg class="external-link-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M10.5 1.5L1.5 10.5M10.5 1.5H6M10.5 1.5V6"/>
                </svg>
              </a>
            </span>
            <span v-else>
              <a :href="config.source || 'https://github.com/code-payments/ocp-server'" target="_blank" rel="noopener">
                OCP config
                <svg class="external-link-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M10.5 1.5L1.5 10.5M10.5 1.5H6M10.5 1.5V6"/>
                </svg>
              </a>
            </span>
          </small>
        </div>
      </div>

    </div>

    <div class="config-source" v-if="config.lastChecked">
      <small>
        Last checked: {{ formatDate(config.lastChecked) }}
      </small>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const config = ref({
  deployed: false,
  reserveContractAddress: null,
  moonyVaultAddress: null,
  mintAddress: null,
  lastChecked: null,
  source: null,
  _fetchedFromSolana: false,
  _reserveFromSolana: false,
  _vaultFromSolana: false,
})

onMounted(async () => {
  try {
    const response = await fetch('/moony-config.json')
    if (response.ok) {
      const data = await response.json()
      config.value = {
        deployed: data.deployed,
        reserveContractAddress: data.reserveContractAddress,
        moonyVaultAddress: data.moonyVaultAddress,
        mintAddress: data.mintAddress,
        lastChecked: data.lastChecked,
        source: data.source,
        _fetchedFromSolana: data._fetchedFromSolana || false,
        _reserveFromSolana: data._reserveFromSolana || data._fetchedFromSolana || false,
        _vaultFromSolana: data._vaultFromSolana || data._fetchedFromSolana || false,
      }
    }
  } catch (error) {
    console.error('Failed to load Moony config:', error)
  }
})

function copyToClipboard(text, event) {
  navigator.clipboard.writeText(text).then(() => {
    const btn = event.target.closest('.copy-btn')
    if (btn) {
      const textSpan = btn.querySelector('.copy-text')
      if (textSpan) {
        const originalText = textSpan.textContent
        textSpan.textContent = 'Copied!'
        setTimeout(() => {
          textSpan.textContent = originalText
        }, 2000)
      }
    }
  })
}

function formatDate(dateString) {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric'
  })
}
</script>

<style scoped>
.reserve-addresses {
  margin: 2rem 0;
}

.contract-addresses {
  display: grid;
  gap: 1rem;
  margin-bottom: 1rem;
}

.contract-card {
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1.25rem;
  background: #ffffff;
}

.contract-header h4 {
  margin: 0 0 0.25rem 0;
  font-size: 0.875rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.contract-header small {
  display: block;
  font-size: 0.75rem;
  color: #9ca3af;
  margin-top: 0.25rem;
  font-weight: normal;
  text-transform: none;
  letter-spacing: normal;
}

.contract-address {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.75rem;
  min-width: 0; /* Allow flex item to shrink below content size */
}

.contract-address code {
  flex: 1;
  min-width: 0; /* Allow code to shrink */
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.8125rem; /* Slightly smaller font */
  background: #f9fafb;
  padding: 0.375rem 0.5rem; /* Reduced padding */
  border-radius: 6px;
  border: 1px solid #e5e7eb;
  word-break: break-all;
  overflow-wrap: break-word;
  color: #1f2937;
  overflow: hidden;
  max-width: 100%; /* Ensure it doesn't exceed container */
}

.copy-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.625rem; /* Reduced padding to match address box */
  background: #ffffff;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.8125rem; /* Match address box font size */
  color: #374151;
  transition: all 0.2s;
  flex-shrink: 0;
}

.copy-btn:hover {
  background: #f9fafb;
  border-color: #9ca3af;
}

.copy-icon {
  width: 16px;
  height: 16px;
}


.config-source {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
  color: #6b7280;
}

.config-source a {
  color: #3b82f6;
  text-decoration: none;
}

.config-source a:hover {
  text-decoration: underline;
}

.address-source {
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid #f3f4f6;
  color: #9ca3af;
}

.address-source a {
  color: #3b82f6;
  text-decoration: none;
}

.address-source a:hover {
  text-decoration: underline;
}

.external-link-icon {
  display: inline-block;
  margin-left: 0.25rem;
  vertical-align: middle;
  opacity: 0.7;
  transition: opacity 0.2s;
}

.address-source a:hover .external-link-icon {
  opacity: 1;
}
</style>
