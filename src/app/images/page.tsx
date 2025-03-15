'use client'

import { useState } from 'react'
import CollectionGrid from '@/components/CollectionGrid'

// This would typically come from your database
const initialImages = [
  {
    id: '1',
    title: 'Sample Image 1',
    description: 'A beautiful landscape photo I found',
    imageUrl: 'https://picsum.photos/400/400',
    date: '2024-01-10',
  },
]

export default function ImagesPage() {
  const [images, setImages] = useState(initialImages)

  const handleAdd = () => {
    // This would typically open a modal or form to add a new image
    const newImage = {
      id: String(Date.now()),
      title: 'New Image',
      description: 'Description here',
      imageUrl: 'https://picsum.photos/400/400',
      date: new Date().toISOString(),
    }
    setImages([...images, newImage])
  }

  const handleEdit = (item: any) => {
    // This would typically open a modal or form to edit the image
    console.log('Edit item:', item)
  }

  const handleDelete = (id: string) => {
    setImages(images.filter(img => img.id !== id))
  }

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
        <h1 className="text-3xl font-bold">Image Collection</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          A collection of screenshots, quotes, memes, and interesting images I've found
        </p>
      </div>

      <CollectionGrid
        items={images}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
        emptyMessage="No images in your collection yet. Add your first one!"
        addButtonText="Add Image"
      />
    </div>
  )
} 