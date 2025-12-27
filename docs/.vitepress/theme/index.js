import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import 'katex/dist/katex.min.css'
import Footer from './components/Footer.vue'
import DeploymentInfo from './components/DeploymentInfo.vue'
import ReserveAddresses from './components/ReserveAddresses.vue'
import VMAddresses from './components/VMAddresses.vue'
import DisclaimerModal from './components/DisclaimerModal.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => {
        // Don't show footer on any page
        return null
      },
      'layout-top': () => {
        // Add disclaimer modal at the top level
        return h(DisclaimerModal)
      }
    })
  },
  enhanceApp({ app, router, siteData }) {
    // Register global components
    app.component('DeploymentInfo', DeploymentInfo)
    app.component('ReserveAddresses', ReserveAddresses)
    app.component('VMAddresses', VMAddresses)
    app.component('DisclaimerModal', DisclaimerModal)
    
    // Add copy to clipboard functionality
    if (typeof window !== 'undefined') {
      window.copyToClipboard = function(text, event) {
        navigator.clipboard.writeText(text).then(function() {
          // Show success feedback
          const btn = event.target.closest('.copy-btn');
          if (btn) {
            const originalText = btn.querySelector('.copy-text').textContent;
            btn.querySelector('.copy-text').textContent = 'Copied!';
            btn.style.background = '#10b981';
            
            setTimeout(() => {
              btn.querySelector('.copy-text').textContent = originalText;
              btn.style.background = '';
            }, 2000);
          }
        }).catch(function(err) {
          console.error('Could not copy text: ', err);
        });
      };
      
      // Move KaTeX rendered math into styled containers after page load
      function moveKaTeXIntoContainers() {
        if (typeof document === 'undefined') return;
        
        try {
          // For formula-card: move katex-display into formula-content
          document.querySelectorAll('.formula-card').forEach((card) => {
            const formulaContent = card.querySelector('.formula-content');
            if (!formulaContent) return;
            
            // Skip if formula is already inside
            if (formulaContent.querySelector('.katex-display')) return;
            
            // Find katex-display that comes after the card
            let currentElement = card.nextElementSibling;
            let katexElement = null;
            
            // Look for katex-display (walk through siblings)
            let searchCount = 0;
            while (currentElement && searchCount < 10) {
              // Check if this element itself is katex-display
              if (currentElement.classList && currentElement.classList.contains('katex-display')) {
                katexElement = currentElement;
                break;
              }
              // Check if it contains katex-display (might be wrapped in a paragraph)
              if (currentElement.querySelector) {
                const nestedKatex = currentElement.querySelector('.katex-display');
                if (nestedKatex) {
                  katexElement = nestedKatex;
                  break;
                }
              }
              // Stop if we hit another major element
              if (currentElement.classList && (
                currentElement.classList.contains('formula-card') ||
                currentElement.tagName === 'H2' ||
                currentElement.tagName === 'H3' ||
                currentElement.tagName === 'H4' ||
                currentElement.tagName === 'H5'
              )) {
                break;
              }
              currentElement = currentElement.nextElementSibling;
              searchCount++;
            }
            
            // Move formula into formula-content
            if (katexElement && katexElement.parentNode !== formulaContent) {
              // Clear any existing content first
              formulaContent.innerHTML = '';
              formulaContent.appendChild(katexElement);
            }
          });
          
          
          // Move inline math for curve constants (same approach as spot price function)
          // Find formula-card that contains curve constants
          document.querySelectorAll('.formula-card').forEach((card) => {
            const curveConstantsGrid = card.querySelector('.curve-constants-grid');
            if (!curveConstantsGrid) return;
            
            // Find all constant items in order
            const constantItems = Array.from(curveConstantsGrid.querySelectorAll('.curve-constant-item'));
            
            // Find rendered inline math elements that come after the card
            let currentElement = card.nextElementSibling;
            const foundMathElements = [];
            let searchCount = 0;
            
            // Look for katex elements (inline math, not katex-display)
            while (currentElement && searchCount < 10 && foundMathElements.length < 3) {
              // Check if this element contains katex (might be in a paragraph)
              if (currentElement.querySelector) {
                const katexElement = currentElement.querySelector('.katex');
                if (katexElement && !foundMathElements.includes(katexElement)) {
                  foundMathElements.push(katexElement);
                }
              }
              // Also check if the element itself is a katex wrapper
              if (currentElement.classList && currentElement.classList.contains('katex')) {
                if (!foundMathElements.includes(currentElement)) {
                  foundMathElements.push(currentElement);
                }
              }
              // Stop if we hit another major element
              if (currentElement.classList && (
                currentElement.classList.contains('formula-card') ||
                currentElement.tagName === 'H2' ||
                currentElement.tagName === 'H3' ||
                currentElement.tagName === 'H4' ||
                currentElement.tagName === 'H5'
              )) {
                break;
              }
              currentElement = currentElement.nextElementSibling;
              searchCount++;
            }
            
            // Match math elements to constant items and move them
            constantItems.forEach((item, index) => {
              const constantValueMath = item.querySelector('.constant-value-math');
              if (constantValueMath && !constantValueMath.querySelector('.katex') && foundMathElements[index]) {
                const katexElement = foundMathElements[index];
                // Move the katex element into the container
                constantValueMath.appendChild(katexElement);
                // Remove the parent paragraph or wrapper if it's now empty
                const originalParent = katexElement.parentNode;
                if (originalParent && originalParent !== constantValueMath) {
                  if (originalParent.textContent.trim() === '' || 
                      (originalParent.tagName === 'P' && originalParent.children.length === 0)) {
                    originalParent.remove();
                  }
                }
              }
            });
          });
        } catch (error) {
          console.error('Error moving KaTeX containers:', error);
        }
      }
      
      if (router && router.afterEach) {
        router.afterEach(() => {
          // Run multiple times to catch KaTeX rendering at different stages
          setTimeout(moveKaTeXIntoContainers, 100);
          setTimeout(moveKaTeXIntoContainers, 500);
          setTimeout(moveKaTeXIntoContainers, 1000);
        });
      }
      
      // Also run on initial page load - multiple times to catch rendering
      if (typeof window !== 'undefined') {
        function runMultipleTimes() {
          moveKaTeXIntoContainers();
          setTimeout(moveKaTeXIntoContainers, 200);
          setTimeout(moveKaTeXIntoContainers, 500);
          setTimeout(moveKaTeXIntoContainers, 1000);
          setTimeout(moveKaTeXIntoContainers, 2000);
        }
        
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', runMultipleTimes);
        } else {
          runMultipleTimes();
        }
        
        // Use MutationObserver to watch for KaTeX rendering
        const observer = new MutationObserver(() => {
          moveKaTeXIntoContainers();
        });
        
        // Observe the document body for changes
        observer.observe(document.body, {
          childList: true,
          subtree: true
        });
      }
    }
  }
}