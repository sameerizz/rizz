'use client'

import { useState } from 'react'
import CollectionGrid from '@/components/CollectionGrid'

const initialVideos = [
  {
    id: '1',
    title: 'How to Learn Faster',
    description: 'A comprehensive guide on accelerating your learning process and retaining information better.',
    imageUrl: 'https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg',
    link: 'https://youtube.com/watch?v=VIDEO_ID',
    date: '2024-01-10',
  },
]

export default function VideosPage() {
  const [videos, setVideos] = useState(initialVideos)

  const handleAdd = () => {
    const newVideo = {
      id: String(Date.now()),
      title: 'New Video',
      description: 'Video description here',
      imageUrl: 'https://placehold.co/400x225',
      link: 'https://youtube.com',
      date: new Date().toISOString(),
    }
    setVideos([...videos, newVideo])
  }

  const handleEdit = (item: any) => {
    console.log('Edit item:', item)
  }

  const handleDelete = (id: string) => {
    setVideos(videos.filter(video => video.id !== id))
  }

  return (
    <div className="space-y-6">
      <div className="border-b border-white/10 pb-4">
        <h1 className="font-montserrat text-3xl font-bold">Videos</h1>
        <p className="text-white/60 mt-2">
          A collection of impactful videos worth rewatching.
        </p>
      </div>

      <CollectionGrid
        items={videos}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
        emptyMessage="No videos in your collection yet. Add your first one!"
        addButtonText="Add Video"
      />
    </div>
  )
} 