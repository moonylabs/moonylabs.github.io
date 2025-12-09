<template>
  <div class="vm-addresses" v-if="config.deployed && (config.vmAccountAddress || config.vmOmnibusAddress)">
    <div class="contract-addresses">
      <div class="contract-card" v-if="config.vmAccountAddress">
        <div class="contract-header">
          <h4>VM Account Address</h4>
          <small>Code Payments virtual account used by Flipcash for reduced-fee P2P payments</small>
        </div>
        <div class="contract-address">
          <code>{{ config.vmAccountAddress }}</code>
          <button class="copy-btn" @click="copyToClipboard(config.vmAccountAddress, $event)">
            <svg class="copy-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <span class="copy-text">Copy</span>
          </button>
        </div>
        <div class="address-source">
          <small>
            Verify on 
            <a :href="config.vmAccountAddress ? `https://explorer.solana.com/address/${config.vmAccountAddress}` : 'https://explorer.solana.com'" target="_blank" rel="noopener">
              Solana Explorer
              <svg class="external-link-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10.5 1.5L1.5 10.5M10.5 1.5H6M10.5 1.5V6"/>
              </svg>
            </a>
          </small>
        </div>
      </div>

      <div class="contract-card" v-if="config.vmOmnibusAddress">
        <div class="contract-header">
          <h4>VM Omnibus Address</h4>
          <small>Code Payments aggregation account for batch processing multiple payments efficiently</small>
        </div>
        <div class="contract-address">
          <code>{{ config.vmOmnibusAddress }}</code>
          <button class="copy-btn" @click="copyToClipboard(config.vmOmnibusAddress, $event)">
            <svg class="copy-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <span class="copy-text">Copy</span>
          </button>
        </div>
        <div class="address-source">
          <small>
            Verify on 
            <a :href="config.vmOmnibusAddress ? `https://explorer.solana.com/address/${config.vmOmnibusAddress}` : 'https://explorer.solana.com'" target="_blank" rel="noopener">
              Solana Explorer
              <svg class="external-link-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10.5 1.5L1.5 10.5M10.5 1.5H6M10.5 1.5V6"/>
              </svg>
            </a>
          </small>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const config = ref({
  deployed: false,
  vmAccountAddress: null,
  vmOmnibusAddress: null,
})

onMounted(async () => {
  try {
    const response = await fetch('/moony-config.json')
    if (response.ok) {
      const data = await response.json()
      config.value = {
        deployed: data.deployed,
        vmAccountAddress: data.vmAccountAddress,
        vmOmnibusAddress: data.vmOmnibusAddress,
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
</script>

<style scoped>
.vm-addresses {
  margin: 1.5rem 0;
}

.contract-addresses {
  display: grid;
  gap: 1rem;
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
  min-width: 0;
}

.contract-address code {
  flex: 1;
  min-width: 0;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.8125rem;
  background: #f9fafb;
  padding: 0.375rem 0.5rem;
  border-radius: 6px;
  border: 1px solid #e5e7eb;
  word-break: break-all;
  overflow-wrap: break-word;
  color: #1f2937;
  overflow: hidden;
  max-width: 100%;
}

.copy-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.625rem;
  background: #ffffff;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.8125rem;
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
