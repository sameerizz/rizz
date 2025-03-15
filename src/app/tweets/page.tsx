'use client'

import { useState } from 'react'
import CollectionGrid from '@/components/CollectionGrid'

const initialTweets = [
  {
    id: '1',
    title: 'On Building in Public',
    description: 'The best way to learn is to build in public. Share your journey, connect with others, and grow together.',
    link: 'https://twitter.com/sameerizz/status/1234567890',
    date: '2024-01-10',
  },
]

export default function TweetsPage() {
  const [tweets, setTweets] = useState(initialTweets)

  const handleAdd = () => {
    const newTweet = {
      id: String(Date.now()),
      title: 'New Tweet',
      description: 'Tweet content here',
      link: 'https://twitter.com/sameerizz',
      date: new Date().toISOString(),
    }
    setTweets([...tweets, newTweet])
  }

  const handleEdit = (item: any) => {
    console.log('Edit item:', item)
  }

  const handleDelete = (id: string) => {
    setTweets(tweets.filter(tweet => tweet.id !== id))
  }

  return (
    <div className="space-y-6">
      <div className="border-b border-white/10 pb-4">
        <h1 className="font-montserrat text-3xl font-bold">Tweets</h1>
        <p className="text-white/60 mt-2">
          A collection of meaningful tweets that have influenced my thinking.
        </p>
      </div>

      <CollectionGrid
        items={tweets}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
        emptyMessage="No tweets in your collection yet. Add your first one!"
        addButtonText="Add Tweet"
      />
    </div>
  )
} 