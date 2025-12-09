<template>
  <div class="deployment-info">
    <div v-if="config.deployed" class="deployment-status deployed">
      <div class="status-indicator"></div>
      <span>
        Moony is deployed and live on Solana
        <span v-if="config._testMode" class="test-badge">(TEST MODE: Using Jeffy addresses)</span>
      </span>
    </div>
    <div v-else class="deployment-status pending">
      <div class="status-indicator"></div>
      <span>Moony deployment pending - configuration will appear here when live</span>
    </div>

    <div v-if="config.deployed" class="contract-addresses">
      <div class="contract-card" v-if="config.mintAddress">
        <div class="contract-header">
          <h4>Token Mint Address</h4>
        </div>
        <div class="contract-address">
          <code>{{ config.mintAddress }}</code>
          <button class="copy-btn" @click="copyToClipboard(config.mintAddress, $event)">
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
            <a :href="config.mintAddress ? `https://explorer.solana.com/address/${config.mintAddress}` : 'https://explorer.solana.com'" target="_blank" rel="noopener">
              Solana Explorer
              <svg class="external-link-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10.5 1.5L1.5 10.5M10.5 1.5H6M10.5 1.5V6"/>
              </svg>
            </a>
          </small>
        </div>
      </div>

      <div class="contract-card" v-if="config.authorityAddress">
        <div class="contract-header">
          <h4>Authority Address</h4>
        </div>
        <div class="contract-address">
          <code>{{ config.authorityAddress }}</code>
          <button class="copy-btn" @click="copyToClipboard(config.authorityAddress, $event)">
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
            <a :href="config.authorityAddress ? `https://explorer.solana.com/address/${config.authorityAddress}` : 'https://explorer.solana.com'" target="_blank" rel="noopener">
              Solana Explorer
              <svg class="external-link-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10.5 1.5L1.5 10.5M10.5 1.5H6M10.5 1.5V6"/>
              </svg>
            </a>
          </small>
        </div>
      </div>

    </div>

    <div class="config-source">
      <small>
        Configuration synced from 
        <a :href="config.source" target="_blank" rel="noopener">Code Payments OCP Server</a>
        <span v-if="config.lastChecked"> • Last checked: {{ formatDate(config.lastChecked) }}</span>
      </small>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const config = ref({
  deployed: false,
  lastChecked: null,
  mintAddress: null,
  authorityAddress: null,
  vmAccountAddress: null,
  vmOmnibusAddress: null,
  source: 'https://github.com/code-payments/ocp-server/blob/main/pkg/code/config/config.go'
})

onMounted(async () => {
  try {
    const response = await fetch('/moony-config.json')
    if (response.ok) {
      config.value = await response.json()
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
.deployment-info {
  margin: 2rem 0;
}

.deployment-status {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.deployment-status.deployed {
  background: #f0fdf4;
  border: 1px solid #86efac;
  color: #166534;
}

.deployment-status.pending {
  background: #fffbeb;
  border: 1px solid #fde047;
  color: #854d0e;
}

.status-indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  flex-shrink: 0;
}

.deployment-status.deployed .status-indicator {
  background: #22c55e;
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.2);
}

.deployment-status.pending .status-indicator {
  background: #eab308;
  box-shadow: 0 0 0 3px rgba(234, 179, 8, 0.2);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
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
  margin: 0 0 0.75rem 0;
  font-size: 0.875rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.contract-address {
  display: flex;
  align-items: center;
  gap: 0.75rem;
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

.test-badge {
  display: inline-block;
  margin-left: 0.5rem;
  padding: 0.125rem 0.5rem;
  background: #fef3c7;
  border: 1px solid #fbbf24;
  border-radius: 4px;
  font-size: 0.75rem;
  color: #92400e;
  font-weight: 500;
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
