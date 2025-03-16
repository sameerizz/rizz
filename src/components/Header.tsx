import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/5 dark:bg-white/5 border-b border-black/10 dark:border-white/15 w-full">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="/" className="font-montserrat text-lg font-bold tracking-tight hover:opacity-70 transition-opacity">
              sameerizz
            </a>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-6">
            <a href="#about" className="text-sm hover:opacity-70 transition-opacity">About</a>
            <a href="#what-i-do" className="text-sm hover:opacity-70 transition-opacity">What I Do</a>
            <a href="#vision" className="text-sm hover:opacity-70 transition-opacity">Vision</a>
            <a href="#connect" className="text-sm hover:opacity-70 transition-opacity">Connect</a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
} 