"use client";

import { useEffect, useRef, useState } from "react";

interface BlurAnimationProps {
  words: string[];
}

export default function BlurAnimation({ words }: BlurAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const requestRef = useRef<number | null>(null);
  
  // Handle scroll and calculate the scroll percentage
  const handleScroll = () => {
    if (!containerRef.current) return;
    
    // Use requestAnimationFrame to optimize scroll performance
    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current);
    }
    
    requestRef.current = requestAnimationFrame(() => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      const windowHeight = window.innerHeight;
      
      // Check if container is in view
      const isVisible = 
        rect.top < windowHeight * 0.9 && 
        rect.bottom > windowHeight * 0.1;
      
      setIsInView(isVisible);
      
      if (isVisible) {
        // Calculate how far through the section we've scrolled (0 to 1)
        // Start when the top of the element is at 90% of the window height
        // End when the bottom of the element is at 10% of the window height
        const totalScrollDistance = rect.height + windowHeight * 0.8;
        const scrolledDistance = windowHeight * 0.9 - rect.top;
        const progress = Math.max(0, Math.min(1, scrolledDistance / totalScrollDistance));
        
        setScrollProgress(progress);
      }
    });
  };
  
  useEffect(() => {
    // Add passive scroll event listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Initial check
    handleScroll();
    
    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);
  
  // Calculate blur and transform based on scroll progress using the percentages from the screenshot
  const getStyle = () => {
    if (!isInView) {
      return {
        opacity: 0,
        filter: 'blur(40px)',
        transform: `translateY(50px) scale(0.3)`,
      };
    }
    
    let opacity, blur, translateY, scale;
    
    // Animation keyframes based on screenshot:
    // 0%: Blurred, smaller, translated down
    // 45-55%: Clear, full size, centered
    // 100%: Blurred, smaller, translated up
    
    if (scrollProgress < 0.45) {
      // From 0% to 45% - coming into view
      const normalizedProgress = scrollProgress / 0.45;
      opacity = normalizedProgress;
      blur = 40 - (normalizedProgress * 40);
      translateY = 200 - (normalizedProgress * 200);
      scale = 0.3 + (normalizedProgress * 0.7);
    } else if (scrollProgress <= 0.55) {
      // From 45% to 55% - fully visible
      opacity = 1;
      blur = 0;
      translateY = 0;
      scale = 1;
    } else {
      // From 55% to 100% - going out of view
      const normalizedProgress = (scrollProgress - 0.55) / 0.45;
      opacity = 1 - normalizedProgress;
      blur = normalizedProgress * 40;
      translateY = -(normalizedProgress * 200);
      scale = 1 - (normalizedProgress * 0.7);
    }
    
    return {
      opacity,
      filter: `blur(${blur}px)`,
      transform: `translateY(${translateY}px) scale(${scale})`,
      transition: 'all 0.05s linear', // Faster transition to match scroll movement
    };
  };
  
  return (
    <section 
      ref={containerRef} 
      className="min-h-[90vh] flex items-center justify-center relative overflow-hidden py-24"
      id="blur-words"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="text-6xl md:text-8xl lg:text-9xl font-bold text-center text-shadow-lg md:px-12 px-6 w-full"
          style={getStyle()}
        >
          <div className="flex flex-col" style={{ lineHeight: '0.85' }}>
            {words.map((word, index) => (
              <span key={word} className="text-gradient my-2">
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 