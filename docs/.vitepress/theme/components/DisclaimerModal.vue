<template>
  <div v-if="showModal" class="disclaimer-modal-overlay" @click.self="handleOverlayClick">
    <div class="disclaimer-modal">
      <div class="disclaimer-modal-header">
        <h2>Important Disclaimer</h2>
      </div>
      <div class="disclaimer-modal-content">
        <div class="disclaimer-text">
          <h3>1. General Disclaimer</h3>
          <p>This documentation is provided for informational and educational purposes only. It does not constitute financial, investment, legal, tax, or any other form of professional advice. Nothing contained herein should be interpreted as a recommendation, solicitation, or endorsement to acquire, hold, use, or dispose of any digital asset, or to engage in any particular transaction or strategy.</p>
          <p>Use of this documentation or interaction with any blockchain-based system is voluntary and undertaken entirely at the user's own risk. Users are encouraged to conduct independent research, seek qualified professional advice, and exercise caution when engaging with decentralized technologies.</p>

          <h3>2. Moony Protocol Overview</h3>
          <p>Moony is a decentralized protocol and associated digital asset governed by an immutable smart contract deployed on the Solana blockchain. Once published on-chain, the protocol operates autonomously according to its code. No representation is made that the protocol will perform as intended, maintain any particular value, or achieve any specific outcome.</p>

          <h3>3. Risks, No Warranties, and No Liability</h3>
          <p>Blockchain technologies involve inherent risks, including but not limited to:</p>
          <ul>
            <li>Market volatility and price fluctuations</li>
            <li>Smart contract vulnerabilities or unforeseen technical behavior</li>
            <li>Network congestion, outages, or failures</li>
            <li>Cybersecurity risks, exploits, or attacks</li>
            <li>Irreversible transactions and permanent loss of assets</li>
            <li>Changes in applicable laws, regulations, or enforcement priorities</li>
          </ul>
          <p>Digital assets may experience extreme volatility or lose all value. The protocol and all associated documentation are provided "as is" and "as available." Moony Labs makes no representations or warranties, express or implied.</p>
          <p>To the maximum extent permitted by law, Moony Labs LLC disclaims all liability for any direct, indirect, incidental, consequential, special, or punitive damages arising from use of the protocol, reliance on this documentation, or interaction with blockchain systems.</p>

          <p class="full-disclaimer-link">
            <a href="/disclaimer" target="_blank">View Full Disclaimer →</a>
          </p>
        </div>
      </div>
      <div class="disclaimer-modal-footer">
        <button class="disclaimer-agree-btn" @click="handleAgree">
          I Agree to These Terms
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
const showModal = ref(false)

const STORAGE_KEY = 'moony_disclaimer_agreed'
const AGREEMENT_VERSION = '1.0' // Increment this if you need to show the modal again to existing users

function checkIfAgreed() {
  if (typeof window === 'undefined') return true
  
  const agreed = localStorage.getItem(STORAGE_KEY)
  const version = localStorage.getItem(`${STORAGE_KEY}_version`)
  
  // If user hasn't agreed, or if the version has changed, show modal
  return agreed === 'true' && version === AGREEMENT_VERSION
}

function shouldShowModal() {
  if (typeof window === 'undefined') return false
  
  // Check route path - VitePress might use different paths
  // Use both route.path and window.location as fallback
  const routePath = route.path || ''
  const windowPath = window.location.pathname || ''
  const currentPath = routePath || windowPath
  
  // Check if we're on the docs page
  const isDocsPage = currentPath.includes('/docs') || 
                     currentPath === '/docs' ||
                     currentPath === '/docs.html' ||
                     currentPath === '/docs/' ||
                     windowPath.includes('/docs') ||
                     windowPath === '/docs' ||
                     windowPath === '/docs.html' ||
                     windowPath === '/docs/'
  
  // Only show on docs page
  if (!isDocsPage) {
    return false
  }
  
  // Check if user has already agreed
  return !checkIfAgreed()
}

function handleAgree() {
  if (typeof window === 'undefined') return
  
  localStorage.setItem(STORAGE_KEY, 'true')
  localStorage.setItem(`${STORAGE_KEY}_version`, AGREEMENT_VERSION)
  showModal.value = false
  
  // Prevent body scroll when modal is open
  document.body.style.overflow = ''
}

function handleOverlayClick() {
  // Don't allow closing by clicking outside - user must agree
  // This makes it more "bulletproof" legally
}

onMounted(() => {
  // Add a delay to ensure route is fully initialized and DOM is ready
  setTimeout(() => {
    console.log('DisclaimerModal mounted, checking if should show...')
    console.log('Route path:', route.path)
    console.log('Window path:', typeof window !== 'undefined' ? window.location.pathname : 'N/A')
    console.log('Has agreed:', checkIfAgreed())
    
    if (shouldShowModal()) {
      console.log('Showing disclaimer modal')
      showModal.value = true
      // Prevent body scroll when modal is open
      if (typeof document !== 'undefined') {
        document.body.style.overflow = 'hidden'
      }
    } else {
      console.log('Not showing modal - conditions not met')
    }
  }, 300)
})

// Watch for route changes to show modal on docs page
watch(() => route.path, (newPath) => {
  console.log('Route changed to:', newPath)
  setTimeout(() => {
    if (shouldShowModal()) {
      console.log('Showing modal after route change')
      showModal.value = true
      if (typeof document !== 'undefined') {
        document.body.style.overflow = 'hidden'
      }
    } else {
      console.log('Hiding modal after route change')
      showModal.value = false
      if (typeof document !== 'undefined') {
        document.body.style.overflow = ''
      }
    }
  }, 100)
})
</script>

<style scoped>
.disclaimer-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1rem;
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.disclaimer-modal {
  background: white;
  border-radius: 12px;
  max-width: 800px;
  max-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.3s ease-out;
  overflow: hidden;
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.disclaimer-modal-header {
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #e5e7eb;
  background: #f9fafb;
}

.disclaimer-modal-header h2 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e293b;
}

.disclaimer-modal-content {
  flex: 1;
  overflow-y: auto;
  padding: 2rem;
}

.disclaimer-text {
  color: #374151;
  line-height: 1.7;
}

.disclaimer-text h3 {
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: #1e293b;
}

.disclaimer-text h3:first-child {
  margin-top: 0;
}

.disclaimer-text p {
  margin-bottom: 1rem;
}

.disclaimer-text ul {
  margin: 0.75rem 0;
  padding-left: 1.5rem;
}

.disclaimer-text li {
  margin-bottom: 0.5rem;
}

.full-disclaimer-link {
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
}

.full-disclaimer-link a {
  color: #3b82f6;
  text-decoration: none;
  font-weight: 500;
}

.full-disclaimer-link a:hover {
  text-decoration: underline;
}

.disclaimer-modal-footer {
  padding: 1.5rem 2rem;
  border-top: 1px solid #e5e7eb;
  background: #f9fafb;
  display: flex;
  justify-content: center;
}

.disclaimer-agree-btn {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
  min-width: 200px;
}

.disclaimer-agree-btn:hover {
  background: #2563eb;
}

.disclaimer-agree-btn:active {
  background: #1d4ed8;
}

/* Scrollbar styling for modal content */
.disclaimer-modal-content::-webkit-scrollbar {
  width: 8px;
}

.disclaimer-modal-content::-webkit-scrollbar-track {
  background: #f1f5f9;
}

.disclaimer-modal-content::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}

.disclaimer-modal-content::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .disclaimer-modal {
    max-width: 100%;
    max-height: 95vh;
    border-radius: 12px 12px 0 0;
  }

  .disclaimer-modal-header,
  .disclaimer-modal-footer {
    padding: 1rem 1.5rem;
  }

  .disclaimer-modal-content {
    padding: 1.5rem;
  }

  .disclaimer-modal-header h2 {
    font-size: 1.25rem;
  }

  .disclaimer-agree-btn {
    width: 100%;
    min-width: auto;
  }
}
</style>
