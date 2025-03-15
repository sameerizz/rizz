'use client'

import { useState } from 'react'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:opacity-70 transition-opacity"
        aria-label="Toggle menu"
      >
        <div className="w-5 h-4 flex flex-col justify-between">
          <span className={`block h-0.5 w-full bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block h-0.5 w-full bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-full bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </div>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute right-0 top-14 w-48 py-2 bg-black border border-white/10 rounded-lg shadow-lg">
          <a href="/images" className="block px-4 py-2 hover:bg-white/5 font-montserrat text-sm font-semibold">
            Images
          </a>
          <a href="/ai-tools" className="block px-4 py-2 hover:bg-white/5 font-montserrat text-sm font-semibold">
            AI Tools
          </a>
          <a href="/books" className="block px-4 py-2 hover:bg-white/5 font-montserrat text-sm font-semibold">
            Books
          </a>
          <a href="/blogs" className="block px-4 py-2 hover:bg-white/5 font-montserrat text-sm font-semibold">
            Blogs
          </a>
          <a href="/videos" className="block px-4 py-2 hover:bg-white/5 font-montserrat text-sm font-semibold">
            Videos
          </a>
          <a href="/tweets" className="block px-4 py-2 hover:bg-white/5 font-montserrat text-sm font-semibold">
            Tweets
          </a>
        </div>
      )}
    </div>
  )
} 