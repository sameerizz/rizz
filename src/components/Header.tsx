'use client';

import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking anywhere else on the page
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMenuOpen) setIsMenuOpen(false);
    };
    
    // Add timeout to prevent immediate closing when opening
    const timeoutId = setTimeout(() => {
      document.addEventListener('click', handleClickOutside);
    }, 100);
    
    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/90 dark:bg-black/90 border-b border-black/10 dark:border-white/15 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="font-montserrat text-lg font-bold tracking-tight hover:opacity-70 transition-opacity">
              sameerizz
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-sm hover:opacity-70 transition-opacity">About</a>
            <a href="#what-i-do" className="text-sm hover:opacity-70 transition-opacity">What I Do</a>
            <a href="#vision" className="text-sm hover:opacity-70 transition-opacity">Vision</a>
            <a href="#connect" className="text-sm hover:opacity-70 transition-opacity">Connect</a>
            <ThemeToggle />
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
              className="ml-3 p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg 
                className="h-6 w-6 text-black dark:text-white" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          className="md:hidden bg-white dark:bg-black border-b border-black/10 dark:border-white/15"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="px-4 py-3 space-y-4">
            <a 
              href="#about" 
              className="block py-2 text-sm text-black dark:text-white hover:opacity-70 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#what-i-do" 
              className="block py-2 text-sm text-black dark:text-white hover:opacity-70 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              What I Do
            </a>
            <a 
              href="#vision" 
              className="block py-2 text-sm text-black dark:text-white hover:opacity-70 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              Vision
            </a>
            <a 
              href="#connect" 
              className="block py-2 text-sm text-black dark:text-white hover:opacity-70 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              Connect
            </a>
          </div>
        </div>
      )}
    </nav>
  );
} 