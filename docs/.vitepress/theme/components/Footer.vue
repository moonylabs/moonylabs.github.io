<template>
  <footer class="VPFooter">
    <!-- Brand Section - Separate from grid -->
    <div class="footer-brand-section">
      <div class="footer-brand">
        <img 
          src="/icon-light.png" 
          alt="Moony" 
          class="footer-logo" 
        />
      </div>
      <p class="footer-description">
        Permissionless transactions with Proof of Liquidity
      </p>

    </div>

    <!-- Content Sections - 3-column grid -->
    <div class="footer-content-grid">
      <!-- Tokenomics -->
      <div class="footer-section">
        <h4>Tokenomics</h4>
        <ul>
          <li><a href="/tokenomics/reserve-contract">Reserve Contract</a></li>
          <li><a href="/tokenomics/proof-of-liquidity">Proof of Liquidity</a></li>
          <li><a href="/tokenomics/bonding-curve">Bonding Curve</a></li>
        </ul>
      </div>

      <!-- Use Cases -->
      <div class="footer-section">
        <h4>Use Cases</h4>
        <ul>
          <li><a href="/use-cases/ecosystem">Ecosystem</a></li>
          <li><a href="/use-cases/p2p-payments">P2P Payments</a></li>
          <li><a href="/use-cases/micropayments">Micropayments</a></li>
          <li><a href="/use-cases/defi">DeFi</a></li>
        </ul>
      </div>

      <!-- Resources -->
      <div class="footer-section">
        <h4>Resources</h4>
        <ul>
          <li><a href="/resources/community">Community</a></li>
          <li><a href="/resources/branding-kit">Branding Kit</a></li>
          <li><a href="https://github.com/moonycoin/moony" target="_blank" rel="noopener noreferrer">GitHub Repository</a></li>
        </ul>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <div class="footer-legal">
        <a href="#" @click.prevent>Privacy</a>
        <a href="#" @click.prevent>Terms</a>
        <a href="/resources/disclaimer">Disclaimer</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isDarkMode = ref(false)

const checkTheme = () => {
  isDarkMode.value = document.documentElement.classList.contains('dark')
}

onMounted(() => {
  checkTheme()
  // Watch for theme changes
  const observer = new MutationObserver(checkTheme)
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class']
  })
  
  // Cleanup function
  onUnmounted(() => {
    observer.disconnect()
  })
})
</script>

<style scoped>
.footer-logo {
  height: 32px;
  width: auto;
}
</style>
