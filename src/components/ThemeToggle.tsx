'use client'

import { useState, useEffect } from 'react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
    const isDarkMode = document.documentElement.classList.contains('dark')
    setIsDark(isDarkMode)
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    
    if (newIsDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  if (!mounted) {
    return <div className="w-12 h-7" /> // Placeholder to avoid layout shift
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative h-7 w-12 rounded-full bg-gray-200 dark:bg-gray-600 transition-colors duration-200 ease-in-out"
      aria-label="Toggle theme"
    >
      <div
        className={`absolute left-1 top-1 h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-200 ease-in-out
          ${isDark ? 'translate-x-5' : 'translate-x-0'}`}
      />
    </button>
  )
} 