export default {
  title: 'Moony Documents',
  description: 'Permissionless transactions with Proof of Liquidity',
  base: '/',
  appearance: false,
  markdown: {
    toc: {
      level: [2, 3]
    },
    outline: [2, 3],
    config: async (md) => {
      const { createRequire } = await import('module')
      const require = createRequire(import.meta.url)
      const mk = require('markdown-it-katex')
      md.use(mk, { throwOnError: false, errorColor: '#cc0000' })
    }
  },
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=0.8, maximum-scale=1.0, user-scalable=no' }],
    ['meta', { name: 'theme-color', content: '#333333' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '64x64', href: 'https://moonylabs.com/favicon-64x64.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'https://moonylabs.com/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'https://moonylabs.com/favicon-16x16.png' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: 'https://moonylabs.com/favicon.ico' }],
    ['link', { rel: 'shortcut icon', href: 'https://moonylabs.com/favicon-64x64.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: 'https://moonylabs.com/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '192x192', href: 'https://moonylabs.com/android-chrome-192x192.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '512x512', href: 'https://moonylabs.com/android-chrome-512x512.png' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'Moony Labs LLC' }],
    ['meta', { property: 'og:description', content: 'Peer-to-Peer Digital Cash Mined With Liquidity' }],
    ['meta', { property: 'og:site_name', content: 'Moony Labs LLC' }],
    ['meta', { property: 'og:url', content: 'https://moonylabs.github.io/' }],
    ['meta', { property: 'og:image', content: 'https://moonylabs.github.io/socialshare.png' }],
    ['meta', { property: 'og:image:width', content: '1920' }],
    ['meta', { property: 'og:image:height', content: '1080' }],
    ['meta', { property: 'og:image:type', content: 'image/png' }],
    ['meta', { property: 'og:image:alt', content: 'Moony Protocol - Decentralized Digital Value' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Moony Labs LLC' }],
    ['meta', { name: 'twitter:description', content: 'Peer-to-Peer Digital Cash Mined With Liquidity' }],
    ['meta', { name: 'twitter:image', content: 'https://moonylabs.github.io/socialshare.png' }],
    ['script', {}, `
      // Force light mode and prevent theme switching - Enhanced version
      (function() {
        // Immediately force light mode before any rendering
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        
        // Set CSS custom properties to force light theme
        document.documentElement.style.setProperty('--vp-c-bg', '#ffffff');
        document.documentElement.style.setProperty('--vp-c-bg-alt', '#f6f6f7');
        document.documentElement.style.setProperty('--vp-c-bg-elv', '#ffffff');
        document.documentElement.style.setProperty('--vp-c-bg-soft', '#f6f6f7');
        document.documentElement.style.setProperty('--vp-c-text-1', '#213547');
        document.documentElement.style.setProperty('--vp-c-text-2', '#476582');
        document.documentElement.style.setProperty('--vp-c-text-3', '#8b9eb0');
        document.documentElement.style.setProperty('--vp-c-brand', '#333333');
        document.documentElement.style.setProperty('--vp-c-brand-light', '#333333');
        document.documentElement.style.setProperty('--vp-c-brand-dark', '#333333');
        
        // Prevent dark mode from being applied
        const observer = new MutationObserver(function(mutations) {
          mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
              if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                document.documentElement.classList.add('light');
              }
            }
          });
        });
        
        observer.observe(document.documentElement, {
          attributes: true,
          attributeFilter: ['class']
        });
        
        // Remove any existing theme toggle elements
        const themeToggles = document.querySelectorAll('.VPNavBarAppearance, .VPSwitch, [data-vp-theme]');
        themeToggles.forEach(toggle => toggle.remove());
        
        // Enhanced scroll spy functionality for Complete Documentation page
        function initScrollSpy() {
          const currentPath = window.location.pathname;
          
          // Only run scroll spy on the Complete Documentation page
          if (currentPath.includes('/complete-documentation')) {
            const sections = document.querySelectorAll('h1, h2, h3');
            const sidebarLinks = document.querySelectorAll('.VPSidebar a');
            
            function updateActiveSection() {
              const scrollPosition = window.scrollY + 100; // Offset for better detection
              
              let currentSection = '';
              let currentSubSection = '';
              
              sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                  currentSection = section.textContent.trim();
                  currentSubSection = section.id || section.textContent.trim().toLowerCase().replace(/\s+/g, '-');
                }
              });
              
              // Update sidebar highlighting for both main sections and subsections
              sidebarLinks.forEach(link => {
                link.classList.remove('current-page');
                const linkHref = link.getAttribute('href');
                const linkText = link.textContent.trim();
                
                // Check if this link matches the current section
                if (currentSubSection && linkHref && linkHref.includes('#' + currentSubSection)) {
                  link.classList.add('current-page');
                } else if (currentSection && linkText === currentSection) {
                  link.classList.add('current-page');
                }
              });
            }
            
            // Add scroll event listener
            window.addEventListener('scroll', updateActiveSection);
            
            // Run on page load
            updateActiveSection();
            
            // Add smooth scrolling to sidebar links
            sidebarLinks.forEach(link => {
              link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href.startsWith('#')) {
                  e.preventDefault();
                  const targetSection = document.querySelector(href);
                  if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              });
            });
          } else {
            // Regular page navigation for other pages
            const sidebarLinks = document.querySelectorAll('.VPSidebar .VPSidebarItem a');
            
            sidebarLinks.forEach(link => {
              link.classList.remove('current-page');
              if (link.getAttribute('href') === currentPath || 
                  link.getAttribute('href') === currentPath + '.html') {
                link.classList.add('current-page');
              }
            });
          }
        }
        
        // Run scroll spy on page load
        initScrollSpy();
        
        // Run when navigation changes
        document.addEventListener('click', function(e) {
          if (e.target.closest('.VPSidebar a')) {
            setTimeout(initScrollSpy, 100);
          }
        });
        
        // Add CSS for moving right aside to left side and styling with full section hierarchy
        const style = document.createElement('style');
        style.textContent = '.VPDocAside { position: fixed !important; left: 0 !important; top: 64px !important; width: 280px !important; height: calc(100vh - 64px) !important; overflow-y: auto !important; background: #ffffff !important; border-right: 1px solid #e2e8f0 !important; z-index: 10 !important; padding: 24px 16px !important; } .VPDocAside .right { display: none !important; } .VPDoc .container { margin-left: 280px !important; max-width: calc(100% - 280px) !important; } .VPDocAside .content-container { padding: 0 !important; } .VPDocAside .content-container h2:first-child { display: none !important; } .VPDocAside .content-container h2:first-of-type { display: none !important; } .VPDocAside .content-container h2:contains("On This Page") { display: none !important; } .VPDocAside .content-container h2 { font-size: 18px !important; font-weight: 700 !important; margin-bottom: 20px !important; color: #333333 !important; border-bottom: 2px solid #e2e8f0 !important; padding-bottom: 8px !important; } .VPDocAside .content-container ul { list-style: none !important; padding: 0 !important; margin: 0 !important; } .VPDocAside .content-container li { margin-bottom: 4px !important; } .VPDocAside .content-container a { display: block !important; padding: 8px 12px !important; color: #476582 !important; text-decoration: none !important; border-radius: 6px !important; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important; font-size: 14px !important; position: relative !important; } .VPDocAside .content-container a:hover { background-color: #f1f5f9 !important; color: #1e293b !important; transform: translateX(4px) !important; } .VPDocAside .content-container a.active { background: linear-gradient(135deg, #3b82f6 !important, #1d4ed8 !important) !important; color: #ffffff !important; border-left: 4px solid #1e40af !important; padding-left: 20px !important; font-weight: 600 !important; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.25) !important; transform: translateX(4px) !important; } .VPDocAside .content-container a.active::before { content: "" !important; position: absolute !important; left: -8px !important; top: 50% !important; transform: translateY(-50%) !important; width: 0 !important; height: 0 !important; border-left: 8px solid #1e40af !important; border-top: 6px solid transparent !important; border-bottom: 6px solid transparent !important; } .VPDocAside .content-container ul ul { margin-left: 16px !important; } .VPDocAside .content-container ul ul a { font-size: 13px !important; padding: 6px 12px !important; color: #64748b !important; } .VPDocAside .content-container ul ul a:hover { color: #1e293b !important; background-color: #f8fafc !important; } .VPDocAside .content-container ul ul a.active { color: #ffffff !important; background: linear-gradient(135deg, #10b981 !important, #059669 !important) !important; border-left: 3px solid #047857 !important; padding-left: 18px !important; font-weight: 600 !important; box-shadow: 0 3px 8px rgba(16, 185, 129, 0.25) !important; } .VPDocAside .content-container ul ul ul { margin-left: 32px !important; } .VPDocAside .content-container ul ul ul a { font-size: 12px !important; padding: 4px 12px !important; color: #94a3b8 !important; } .VPDocAside .content-container ul ul ul a:hover { color: #1e293b !important; background-color: #f8fafc !important; } .VPDocAside .content-container ul ul ul a.active { color: #ffffff !important; background: linear-gradient(135deg, #f59e0b !important, #d97706 !important) !important; border-left: 3px solid #b45309 !important; padding-left: 16px !important; font-weight: 600 !important; box-shadow: 0 2px 6px rgba(245, 158, 11, 0.25) !important; } .VPDocAside .content-container .outline-title { display: none !important; } .VPDocAside .content-container .outline-marker { display: none !important; } /* Make main section navigation links bold in aside menu */ .VPDocAside .content-container > ul > li > a { font-weight: 700 !important; font-size: 16px !important; color: #1e293b !important; } .VPDocAside .content-container ul ul a { font-weight: normal !important; }';
        document.head.appendChild(style);
        
        // Add CSS to hide only the outline label text, not the functionality
        const hideLabelStyle = document.createElement('style');
        hideLabelStyle.textContent = '.VPDocAside .outline-title { display: none !important; } .VPDocAside .outline-marker { display: none !important; } .VPDocAside .outline { margin-top: 0 !important; } /* Light grey highlight for active states */ .VPDocAside .outline-link.active { background-color: #f1f5f9 !important; color: #1e293b !important; border-left: 3px solid #64748b !important; padding-left: 16px !important; font-weight: 600 !important; } .VPDocAside .outline-link.current-section { background-color: #f1f5f9 !important; color: #1e293b !important; border-left: 3px solid #64748b !important; padding-left: 16px !important; font-weight: 600 !important; } .VPDocAside .outline-link.current-subsection { background-color: #f1f5f9 !important; color: #1e293b !important; border-left: 3px solid #64748b !important; padding-left: 16px !important; font-weight: 600 !important; } /* Make H2 main section headers bold in aside menu */ .VPDocAside .outline-link[href*="#tokenomics"], .VPDocAside .outline-link[href*="#use-cases"], .VPDocAside .outline-link[href*="#resources"] { font-weight: 700 !important; font-size: 16px !important; color: #1e293b !important; } /* Mobile responsive: hide aside menu on small screens */ @media (max-width: 768px) { .VPDocAside { display: none !important; } .VPDoc .container { margin-left: 0 !important; max-width: 100% !important; } } /* Return to top button styling - simple white with black outline */ .return-to-top-btn { position: fixed !important; bottom: 30px !important; right: 30px !important; width: 60px !important; height: 60px !important; background-color: white !important; color: black !important; border: 2px solid black !important; border-radius: 50% !important; cursor: pointer !important; display: flex !important; align-items: center !important; justify-content: center !important; font-size: 24px !important; transition: all 0.3s ease !important; z-index: 1000 !important; opacity: 0 !important; visibility: hidden !important; } .return-to-top-btn:hover { background-color: #f8f9fa !important; } .return-to-top-btn.visible { opacity: 1 !important; visibility: visible !important; } @media (max-width: 768px) { .return-to-top-btn { bottom: 20px !important; right: 20px !important; width: 50px !important; height: 50px !important; font-size: 20px !important; } }';
        document.head.appendChild(hideLabelStyle);
        
        // Enhanced aside navigation with advanced scroll spy
        function enhanceAsideNavigation() {
          setTimeout(() => {
            console.log('=== ENHANCE ASIDE NAVIGATION STARTED ===');
            const aside = document.querySelector('.VPDocAside');
            console.log('Found aside element:', aside);
            
            if (aside) {
              console.log('Aside HTML structure:', aside.innerHTML.substring(0, 500));
              console.log('Aside classes:', aside.className);
              // Remove the "On This Page" header - multiple approaches
              const onThisPageHeaders = aside.querySelectorAll('h2');
              onThisPageHeaders.forEach((header, index) => {
                if (index === 0 || header.textContent.includes('On This Page')) {
                  header.style.display = 'none';
                  header.style.visibility = 'hidden';
                  header.style.height = '0';
                  header.style.margin = '0';
                  header.style.padding = '0';
                }
              });
              
              // Add smooth scrolling to all aside links and apply bold styling to main sections
              const asideLinks = aside.querySelectorAll('a');
              asideLinks.forEach((link, index) => {
                // Add click event for smooth scrolling
                link.addEventListener('click', (e) => {
                  const href = link.getAttribute('href');
                  if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const targetSection = document.querySelector(href);
                    if (targetSection) {
                      targetSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                });
                
                // Apply bold styling to main section links (first level)
                const parentLi = link.closest('li');
                const parentUl = parentLi ? parentLi.closest('ul') : null;
                const isMainSection = parentUl && parentUl.parentElement && parentUl.parentElement.classList.contains('content-container');
                
                console.log('Link:', link.textContent.trim());
                console.log('  - Parent LI:', parentLi);
                console.log('  - Parent UL:', parentUl);
                console.log('  - Parent UL parent:', parentUl ? parentUl.parentElement : 'none');
                console.log('  - Is main section:', isMainSection);
                
                if (isMainSection) {
                  console.log('✅ Making main section link bold:', link.textContent.trim());
                  link.style.fontWeight = '700';
                  link.style.fontSize = '16px';
                  link.style.color = '#1e293b';
                  link.style.fontWeight = 'bold';
                } else {
                  console.log('📝 Subsection link (normal weight):', link.textContent.trim());
                  link.style.fontWeight = 'normal';
                }
              });
              
              // Enhanced scroll spy for aside navigation with continuous updates
              function updateAsideActiveState() {
                const scrollPosition = window.scrollY + 150; // Offset for better detection
                const sections = document.querySelectorAll('h1, h2, h3');
                
                let activeSection = null;
                let activeSubSection = null;
                
                // Find the current active section based on scroll position
                let foundActiveSection = false;
                
                // First, check if we're near the bottom and should prioritize Disclaimer
                const distanceFromBottom = document.documentElement.scrollHeight - scrollPosition;
                if (distanceFromBottom < 300) {
                  // Near bottom - find and prioritize Disclaimer section
                  sections.forEach(section => {
                    if (section.tagName === 'H3' && section.id === 'disclaimer') {
                      activeSubSection = section;
                      foundActiveSection = true;
                    }
                  });
                }
                
                // If we didn't find Disclaimer or we're not near bottom, use normal logic
                if (!foundActiveSection) {
                  sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    let sectionBottom;
                    
                    // Find the next section to determine the bottom boundary
                    const nextSection = section.nextElementSibling;
                    if (nextSection && (nextSection.tagName === 'H1' || nextSection.tagName === 'H2' || nextSection.tagName === 'H3')) {
                      sectionBottom = nextSection.offsetTop;
                    } else {
                      // If no next section, use the end of the document
                      sectionBottom = document.documentElement.scrollHeight;
                    }
                    
                    // Check if scroll position is within this section's content area
                    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                      // Only track H3 subsections, ignore H2 main section headers
                      if (section.tagName === 'H3') {
                        activeSubSection = section;
                      }
                    }
                  });
                }
                
                // Update aside navigation highlighting with persistent states
                asideLinks.forEach(link => {
                  const href = link.getAttribute('href');
                  
                  if (href && href.startsWith('#')) {
                    const targetId = href.substring(1);
                    let shouldBeActive = false;
                    
                    // Only highlight subsections (H3), not main section headers (H2)
                    if (activeSubSection && activeSubSection.id === targetId) {
                      shouldBeActive = true;
                    }
                    
                    // Apply active state with light grey highlighting only to subsections
                    if (shouldBeActive) {
                      link.classList.add('active');
                      link.classList.add('current-subsection');
                      // Apply inline styles for immediate visual feedback
                      link.style.backgroundColor = '#f1f5f9';
                      link.style.color = '#1e293b';
                      link.style.borderLeft = '3px solid #64748b';
                      link.style.paddingLeft = '16px';
                      link.style.fontWeight = '600';
                    } else {
                      link.classList.remove('active', 'current-section', 'current-subsection');
                      // Remove inline styles
                      link.style.backgroundColor = '';
                      link.style.color = '';
                      link.style.borderLeft = '';
                      link.style.paddingLeft = '';
                      link.style.fontWeight = '';
                    }
                  }
                });
              }
              
              // Use requestAnimationFrame for smooth, continuous scroll updates
              let ticking = false;
              function onScroll() {
                if (!ticking) {
                  requestAnimationFrame(() => {
                    updateAsideActiveState();
                    ticking = false;
                  });
                  ticking = true;
                }
              }
              
              // Add scroll event listener with continuous updates
              window.addEventListener('scroll', onScroll, { passive: true });
              // Initial call
              updateAsideActiveState();
              
              // Create and add return to top button
              function createReturnToTopButton() {
                const button = document.createElement('button');
                button.className = 'return-to-top-btn';
                button.innerHTML = '↑';
                button.setAttribute('aria-label', 'Return to top');
                
                // Add click event
                button.addEventListener('click', () => {
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  });
                });
                
                // Add to page
                document.body.appendChild(button);
                
                // Show/hide based on scroll position
                function toggleButton() {
                  if (window.scrollY > 300) {
                    button.classList.add('visible');
                  } else {
                    button.classList.remove('visible');
                  }
                }
                
                // Listen for scroll to show/hide button
                window.addEventListener('scroll', toggleButton, { passive: true });
                
                // Initial check
                toggleButton();
              }
              
              // Initialize return to top button
              createReturnToTopButton();
            }
          }, 500);
        }
        
        // Initialize enhanced navigation when page loads
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', enhanceAsideNavigation);
        } else {
          enhanceAsideNavigation();
        }
        
        // Also try to run after a longer delay to ensure VitePress is fully loaded
        setTimeout(() => {
          console.log('Delayed initialization attempt...');
          enhanceAsideNavigation();
        }, 2000);
        
      })();
    `]
  ],
  themeConfig: {
    logo: {
      light: '/logo-light.svg',
      dark: '/logo-light.svg'
    },
    siteTitle: false,
    outline: {
      level: [2, 3],
      label: '',
      outlineBadges: false
    },
    // Force light theme CSS variables
    css: {
      vars: {
        '--vp-c-bg': '#ffffff',
        '--vp-c-bg-alt': '#f6f6f7',
        '--vp-c-bg-elv': '#ffffff',
        '--vp-c-bg-soft': '#f6f6f7',
        '--vp-c-text-1': '#213547',
        '--vp-c-text-2': '#476582',
        '--vp-c-text-3': '#8b9eb0',
        '--vp-c-brand': '#333333',
        '--vp-c-brand-light': '#333333',
        '--vp-c-brand-dark': '#333333'
      }
    },
    nav: [
      { 
        text: 'Download PDF', 
        link: '/moony-documentation.pdf'
      }
    ],

    sidebar: false,
    aside: true,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/moonylabs/moonylabs.github.io' }
    ],
    editLink: false,
    lastUpdated: false,
    appearance: false,
    // Completely disable theme switching
    darkMode: false
  }
}