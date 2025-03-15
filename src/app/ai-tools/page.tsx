'use client'

import { useState } from 'react'
import CollectionGrid from '@/components/CollectionGrid'

const initialTools = [
  {
    id: '1',
    title: 'ChatGPT',
    description: 'AI language model for conversation, writing, and problem-solving by OpenAI.',
    imageUrl: 'https://placehold.co/400x400',
    link: 'https://chat.openai.com',
    date: '2024-01-10',
  },
]

export default function AIToolsPage() {
  const [tools, setTools] = useState(initialTools)

  const handleAdd = () => {
    const newTool = {
      id: String(Date.now()),
      title: 'New AI Tool',
      description: 'Tool description here',
      imageUrl: 'https://placehold.co/400x400',
      link: 'https://example.com',
      date: new Date().toISOString(),
    }
    setTools([...tools, newTool])
  }

  const handleEdit = (item: any) => {
    console.log('Edit item:', item)
  }

  const handleDelete = (id: string) => {
    setTools(tools.filter(tool => tool.id !== id))
  }

  return (
    <div className="space-y-6">
      <div className="border-b border-white/10 pb-4">
        <h1 className="font-montserrat text-3xl font-bold">AI Tools</h1>
        <p className="text-white/60 mt-2">
          A curated collection of AI tools and platforms that enhance productivity and creativity.
        </p>
      </div>

      <CollectionGrid
        items={tools}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
        emptyMessage="No AI tools in your collection yet. Add your first one!"
        addButtonText="Add Tool"
      />
    </div>
  )
} 