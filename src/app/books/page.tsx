'use client'

import { useState } from 'react'
import CollectionGrid from '@/components/CollectionGrid'

const initialBooks = [
  {
    id: '1',
    title: 'Atomic Habits',
    description: 'An Easy & Proven Way to Build Good Habits & Break Bad Ones by James Clear',
    imageUrl: 'https://m.media-amazon.com/images/I/81YkqyaFVEL._AC_UF1000,1000_QL80_.jpg',
    link: 'https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299',
    date: '2024-01-10',
  },
]

export default function BooksPage() {
  const [books, setBooks] = useState(initialBooks)

  const handleAdd = () => {
    const newBook = {
      id: String(Date.now()),
      title: 'New Book',
      description: 'Description here',
      imageUrl: 'https://placehold.co/400x600',
      date: new Date().toISOString(),
    }
    setBooks([...books, newBook])
  }

  const handleEdit = (item: any) => {
    console.log('Edit item:', item)
  }

  const handleDelete = (id: string) => {
    setBooks(books.filter(book => book.id !== id))
  }

  return (
    <div className="space-y-6">
      <div className="border-b border-white/10 pb-4">
        <h1 className="font-montserrat text-3xl font-bold">Books</h1>
        <p className="text-white/60 mt-2">
          A curated collection of books that have shaped my thinking and perspective.
        </p>
      </div>

      <CollectionGrid
        items={books}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
        emptyMessage="No books in your collection yet. Add your first one!"
        addButtonText="Add Book"
      />
    </div>
  )
} 