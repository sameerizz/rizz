'use client'

import { useState } from 'react'

const initialBlogs = [
  {
    id: '1',
    title: 'Write to Think',
    date: '10 Jan 2025',
    content: `Writing is the META skill for Critical Thinking - Visual Writing with TLDRAW is insane making mind map gives so much clarity

Key Takeaways:

• Read - How to take smart notes 
• Slip box technique 
• Always capture ideas in anything that is quick and later that day convert it into permanent notes
• Write brief with source (things you find interesting and reading something note it down) 
• Convert it into Permanent notes add (Richard feynman technique to write that so you can understand it in the future without any context)

Resources:

• https://fs.blog/how-to-think/
• https://fs.blog/why-write/
• https://fs.blog/writing-to-think/
• https://fs.blog/feynman-technique/
• https://fs.blog/inversion/
• https://fs.blog/the-antilibrary/

Notable Quote:

"A good library is filled with mostly unread books. That's the point. My library serves as a daily reminder of what I don't know."

Must reads:

• https://paulgraham.com/writes.html
• https://nav.al/rich
• https://www.swyx.io/learn-in-public

"The person who says he knows what he thinks but cannot express it usually does not know what he thinks."
- Mortimer Adler`,
  },
]

export default function BlogsPage() {
  const [blogs] = useState(initialBlogs)

  function formatContent(content: string) {
    return content.split('\\n\\n').map((block, index) => {
      // Handle section headers
      if (block.trim().endsWith(':')) {
        return (
          <h2 key={index} className="font-montserrat text-2xl font-bold mt-12 mb-6">
            {block.trim()}
          </h2>
        )
      }

      // Handle lists
      if (block.includes('• ')) {
        const items = block.split('\\n').filter(item => item.trim())
        return (
          <ul key={index} className="space-y-3 my-6">
            {items.map((item, i) => {
              const text = item.replace('• ', '')
              // Check if item is a URL
              if (text.startsWith('http')) {
                return (
                  <li key={i} className="flex items-start space-x-3">
                    <span className="text-white/60 mt-1">•</span>
                    <a 
                      href={text}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-white/80 transition-colors underline underline-offset-4"
                    >
                      {text}
                    </a>
                  </li>
                )
              }
              return (
                <li key={i} className="flex items-start space-x-3">
                  <span className="text-white/60 mt-1">•</span>
                  <span>{text}</span>
                </li>
              )
            })}
          </ul>
        )
      }

      // Handle quotes
      if (block.startsWith('"')) {
        return (
          <blockquote key={index} className="border-l-4 border-white/20 pl-6 my-8 py-2">
            <p className="text-xl italic text-white/80 font-medium">{block}</p>
          </blockquote>
        )
      }

      // Handle attribution (lines starting with -)
      if (block.startsWith('-')) {
        return (
          <p key={index} className="text-sm text-white/60 italic mt-2 ml-6">
            {block}
          </p>
        )
      }

      // Regular paragraphs
      return (
        <p key={index} className="text-lg text-white/80 leading-relaxed my-6">
          {block}
        </p>
      )
    })
  }

  return (
    <div className="max-w-2xl mx-auto px-6">
      <div className="space-y-16">
        {blogs.map((blog) => (
          <article key={blog.id} className="py-16">
            {/* Blog Header */}
            <header className="space-y-4 mb-16">
              <h1 className="font-montserrat text-5xl font-bold tracking-tight">{blog.title}</h1>
              <time className="block text-sm text-white/60 font-medium">{blog.date}</time>
            </header>

            {/* Blog Content */}
            <div className="space-y-6">
              {formatContent(blog.content)}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
} 