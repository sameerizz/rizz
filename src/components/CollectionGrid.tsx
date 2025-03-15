import { useState } from 'react'

interface CollectionItem {
  id: string
  title: string
  description: string
  imageUrl?: string
  link?: string
  date?: string
}

interface CollectionGridProps {
  items: CollectionItem[]
  onAdd: () => void
  onEdit: (item: CollectionItem) => void
  onDelete: (id: string) => void
  emptyMessage: string
  addButtonText: string
}

export default function CollectionGrid({
  items,
  onAdd,
  onEdit,
  onDelete,
  emptyMessage,
  addButtonText,
}: CollectionGridProps) {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="font-montserrat text-xl font-bold tracking-tight">My Collection</h2>
        <button
          onClick={onAdd}
          className="px-4 py-2 text-sm font-montserrat font-bold border border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors"
        >
          {addButtonText}
        </button>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-16 border border-black/10 dark:border-white/10">
          <p className="font-montserrat text-sm font-semibold text-black/60 dark:text-white/60 leading-relaxed">{emptyMessage}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.id}
              className="group relative space-y-4"
            >
              {item.imageUrl && (
                <div className="aspect-[4/3] overflow-hidden bg-black/5 dark:bg-white/5">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                  />
                </div>
              )}
              
              <div className="space-y-2">
                <h3 className="font-montserrat text-base font-bold tracking-tight">{item.title}</h3>
                <p className="text-sm font-medium text-black/60 dark:text-white/60 leading-relaxed">
                  {item.description}
                </p>
                
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-montserrat text-sm font-bold hover:opacity-60 transition-opacity inline-block"
                  >
                    View Source →
                  </a>
                )}
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 dark:bg-black/90 backdrop-blur-sm border border-black/10 dark:border-white/10 rounded-full">
                <button
                  onClick={() => onEdit(item)}
                  className="px-3 py-1.5 text-sm font-montserrat font-bold hover:opacity-60 transition-opacity"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(item.id)}
                  className="px-3 py-1.5 text-sm font-montserrat font-bold border-l border-black/10 dark:border-white/10 hover:opacity-60 transition-opacity"
                >
                  Delete
                </button>
              </div>

              {item.date && (
                <div className="font-montserrat text-xs font-semibold text-black/40 dark:text-white/40 mt-2">
                  {new Date(item.date).toLocaleDateString()}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
} 