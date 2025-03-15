import Link from 'next/link'

const collections = [
  {
    title: 'AI Tools',
    description: 'Exploring and documenting the latest in AI technology and tools',
    href: '/ai-tools',
    icon: '→',
  },
  {
    title: 'Books',
    description: 'My reading list and favorite books that shaped my thinking',
    href: '/books',
    icon: '→',
  },
  {
    title: 'Videos',
    description: 'A collection of impactful videos worth rewatching',
    href: '/videos',
    icon: '→',
  },
  {
    title: 'Blogs',
    description: 'Curated articles and blogs that provide valuable insights',
    href: '/blogs',
    icon: '→',
  },
  {
    title: 'Images',
    description: 'A collection of screenshots, quotes, and interesting visuals that inspire me',
    href: '/images',
    icon: '→',
  },
  {
    title: 'Tweets',
    description: 'Meaningful tweets that resonated and influenced my perspective',
    href: '/tweets',
    icon: '→',
  },
]

export default function Home() {
  return (
    <div className="space-y-16">
      <div className="space-y-6">
        <h1 className="font-montserrat text-4xl font-extrabold tracking-tight">Sameer Siddiqui</h1>
        <div className="space-y-4">
          <p className="font-montserrat text-lg font-bold">
            Content + Code x AI = Infinite Leverage
          </p>
          <div className="space-y-2">
            <p className="text-sm font-medium text-black/70 dark:text-white/70 leading-relaxed">
              Building at the intersection of content creation and technology. Exploring how AI can amplify human creativity.
            </p>
            <p className="text-sm font-medium text-black/70 dark:text-white/70">
              <a href="https://threads.net/@sameerizzz" target="_blank" className="hover:opacity-70 transition-opacity">Threads</a> ·
              <a href="https://x.com/sameerizz" target="_blank" className="hover:opacity-70 transition-opacity"> X</a> ·
              <a href="https://sameerizz.substack.com" target="_blank" className="hover:opacity-70 transition-opacity"> Newsletter</a> ·
              <a href="https://www.linkedin.com/in/sidd-sam" target="_blank" className="hover:opacity-70 transition-opacity"> LinkedIn</a> ·
              <a href="https://www.instagram.com/sameerizzz" target="_blank" className="hover:opacity-70 transition-opacity"> Instagram</a> ·
              <a href="https://www.youtube.com/@Sameerizz" target="_blank" className="hover:opacity-70 transition-opacity"> Youtube</a>
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
        {collections.map((collection) => (
          <Link
            key={collection.href}
            href={collection.href}
            className="group block"
          >
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-montserrat text-lg font-bold tracking-tight group-hover:opacity-60 transition-opacity">{collection.title}</h2>
              <span className="font-montserrat text-sm font-bold opacity-0 group-hover:opacity-60 transition-opacity">{collection.icon}</span>
            </div>
            <p className="text-sm font-medium text-black/60 dark:text-white/60 leading-relaxed">{collection.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
