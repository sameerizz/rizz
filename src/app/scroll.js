'use client';

// Function to initialize scroll reveals
export function initScrollReveals() {
  if (typeof window === 'undefined') return;

  // Wait for DOM to be fully loaded
  if (document.readyState === 'complete') {
    setupRevealAnimations();
  } else {
    window.addEventListener('load', setupRevealAnimations);
    return () => window.removeEventListener('load', setupRevealAnimations);
  }
}

function setupRevealAnimations() {
  // Set up intersection observer for reveal animations
  const revealCallback = (entries) => {
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
  
  // Observe all elements with reveal classes
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  reveals.forEach(element => {
    revealObserver.observe(element);
  });
} 