"use client";

import { useEffect, useRef, useState } from "react";

interface WordScrollProps {
  words: string[];
}

export default function WordScroll({ words }: WordScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const containerTop = rect.top;
      const containerHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress (0 to 1)
      const scrollProgress = 1 - (containerTop / windowHeight);
      
      // Calculate which word should be active based on scroll position
      if (scrollProgress >= 0 && scrollProgress <= 1) {
        const wordIndex = Math.min(
          Math.floor(scrollProgress * words.length),
          words.length - 1
        );
        setActiveIndex(wordIndex);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [words]);
  
  return (
    <section className="h-screen flex items-center justify-center relative">
      <div ref={containerRef} className="relative h-screen w-full flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          {words.map((word, index) => (
            <div 
              key={word}
              className={`absolute text-7xl md:text-9xl font-bold transition-all duration-700 ease-out ${
                index === activeIndex 
                  ? "opacity-100 scale-100 text-gradient" 
                  : "opacity-0 scale-75"
              }`}
            >
              {word}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 