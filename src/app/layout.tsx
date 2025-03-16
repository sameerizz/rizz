import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Providers } from "./providers";

// Load Montserrat with all weights for better typography
const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Sameer Siddiqui - Digital Explorer",
  description: "AI, wealth, the future — writing to escape the rat race",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Wait until the page is fully loaded and hydrated
              if (typeof window !== 'undefined') {
                window.addEventListener('load', function() {
                  // Add a small timeout to ensure hydration is complete
                  setTimeout(function() {
                    // Simplified smooth scrolling with ease-out effect
                    // Detect if browser supports smooth scrolling natively
                    const supportsNativeSmoothScroll = 'scrollBehavior' in document.documentElement.style;
                    
                    if (!supportsNativeSmoothScroll) {
                      // Variables for smooth scrolling
                      let isScrolling = false;
                      let scrollTimeout;
                      let scrollDirection = 0;
                      let scrollDistance = 0;
                      let passiveSupported = false;
                      
                      // Test if passive is supported
                      try {
                        const options = {
                          get passive() {
                            passiveSupported = true;
                            return false;
                          }
                        };
                        window.addEventListener("test", null, options);
                        window.removeEventListener("test", null, options);
                      } catch (err) {
                        passiveSupported = false;
                      }
                      
                      // Handle scroll events with proper passive option based on browser support
                      window.addEventListener('wheel', function(e) {
                        // Clear any existing timeout
                        clearTimeout(scrollTimeout);
                        
                        // Determine scroll direction and distance
                        scrollDirection = e.deltaY > 0 ? 1 : -1;
                        scrollDistance = Math.min(Math.abs(e.deltaY), 100) * 1.2; // Amplify scroll a bit
                        
                        // Start smooth scrolling if not already scrolling
                        if (!isScrolling) {
                          isScrolling = true;
                          animateScroll();
                        }
                        
                        // Set a timeout to add the ease-out effect
                        scrollTimeout = setTimeout(function() {
                          scrollDistance *= 0.85; // Reduce distance for ease-out
                          
                          // Stop scrolling when distance becomes very small
                          if (scrollDistance < 0.5) {
                            isScrolling = false;
                          }
                        }, 100);
                        
                        // Prevent default only if we're handling the scroll
                        e.preventDefault();
                      }, passiveSupported ? { passive: false } : false);
                      
                      // Smooth scroll animation
                      function animateScroll() {
                        if (!isScrolling) return;
                        
                        // Calculate new position
                        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
                        const newPosition = currentScrollTop + (scrollDirection * scrollDistance);
                        
                        // Apply scroll
                        window.scrollTo({
                          top: newPosition,
                          behavior: 'auto' // We're handling the smoothness ourselves
                        });
                        
                        // Reduce distance for ease-out effect
                        scrollDistance *= 0.92;
                        
                        // Continue animation if distance is still significant
                        if (scrollDistance > 0.5) {
                          requestAnimationFrame(animateScroll);
                        } else {
                          isScrolling = false;
                        }
                      }
                      
                      // Handle anchor links for smooth scrolling
                      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                        anchor.addEventListener('click', function(e) {
                          e.preventDefault();
                          
                          const targetId = this.getAttribute('href');
                          if (targetId === '#') return;
                          
                          const targetElement = document.querySelector(targetId);
                          if (targetElement) {
                            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                            const startPosition = window.pageYOffset;
                            const distance = targetPosition - startPosition;
                            
                            let start = null;
                            const duration = 800; // ms
                            
                            function step(timestamp) {
                              if (!start) start = timestamp;
                              const progress = timestamp - start;
                              const percentage = Math.min(progress / duration, 1);
                              
                              // Easing function - ease out cubic
                              const easing = 1 - Math.pow(1 - percentage, 3);
                              
                              window.scrollTo(0, startPosition + distance * easing);
                              
                              if (progress < duration) {
                                requestAnimationFrame(step);
                              }
                            }
                            
                            requestAnimationFrame(step);
                          }
                        });
                      });
                    }
                    
                    // Scroll reveal animation using Intersection Observer for better performance
                    const revealCallback = (entries, observer) => {
                      entries.forEach(entry => {
                        if (entry.isIntersecting) {
                          entry.target.classList.add('active');
                        }
                      });
                    };
                    
                    const revealOptions = {
                      threshold: 0.1,
                      rootMargin: '0px 0px -100px 0px'
                    };
                    
                    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);
                    
                    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
                    reveals.forEach(element => {
                      revealObserver.observe(element);
                    });
                  }, 200); // Delay to ensure hydration is complete
                });
              }
            `,
          }}
        />
      </head>
      <body className={`${montserrat.className} font-montserrat flex flex-col min-h-screen`}>
        <Providers>
          <div className="abstract-shape abstract-shape-1"></div>
          <div className="abstract-shape abstract-shape-2"></div>
          <div className="abstract-line abstract-line-1"></div>
          <div className="abstract-line abstract-line-2"></div>
          <div className="abstract-grid"></div>
          <Header />
          <main className="flex-1 max-w-6xl mx-auto px-6 py-12 relative">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
