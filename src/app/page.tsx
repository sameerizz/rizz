import Image from "next/image";
import BlurAnimation from "../components/BlurAnimation";

export default function Home() {
  return (
    <div className="space-y-20 sm:space-y-24 md:space-y-32">
      {/* Background grid */}
      <div className="abstract-grid"></div>
      
      {/* Hero Section with oversized text */}
      <section className="min-h-[70vh] sm:min-h-[80vh] flex flex-col justify-center relative py-12 sm:py-16 md:py-20">
        <div className="oversized-text text-outline left-0 top-0 animate-float">
          SAMEER
        </div>
        <div className="oversized-text text-outline right-0 bottom-0 animate-float" style={{ animationDelay: '2s' }}>
          SIDDIQUI
        </div>
        
        <div className="relative z-10 animate-fade-in">
          <h1 className="mb-4 sm:mb-6">
            <span className="block">Digital</span>
            <span className="block text-gradient">Explorer</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl muted-text max-w-xl">
            AI, wealth, the future — writing to escape the rat race
          </p>
          
          <div className="mt-8 sm:mt-10 md:mt-12 flex flex-wrap gap-3 sm:gap-4">
            <a 
              href="#about" 
              className="btn-primary"
            >
              Discover
            </a>
            <a 
              href="https://sameerizz.substack.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Subscribe
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 animate-float">
          <svg className="w-6 h-6 sm:w-8 sm:h-8 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Blur Animation Section - Replacing WordScroll */}
      <BlurAnimation words={["Think", "Create", "Explore", "Innovate", "Automate", "Grow"]} />

      {/* About Section */}
      <section id="about" className="creative-container reveal pt-12 sm:pt-16">
        <div className="dot-pattern"></div>
        <h2 className="text-gradient mb-10 sm:mb-16 font-montserrat">Who Am I?</h2>
        <div className="creative-grid gap-x-20 md:gap-x-24 items-center">
          <div className="prose prose-lg max-w-none reveal-left">
            <p className="text-gradient text-xl md:text-2xl mb-6 font-montserrat text-shadow-sm leading-relaxed">
              Hey, I'm Sameer, a 21-year-old thinker, creator, and digital explorer. I thrive on uncovering hidden opportunities, breaking conventional norms, and leveraging AI to automate and optimize everything possible.
            </p>
            <p className="text-gradient text-xl md:text-2xl mb-6 font-montserrat text-shadow-sm leading-relaxed">
              As an INFP-T (Mediator), I'm naturally introverted but can be quite extroverted with people I'm close to. I'm a deep thinker with a subtle yet charismatic presence, and I tend to take a rebellious approach to conventional wisdom.
            </p>
          </div>
          <div className="creative-card reveal-right p-10 md:p-14">
            <h3 className="mb-8 font-montserrat font-bold text-gradient">My Mission</h3>
            <p className="text-lg md:text-xl font-montserrat leading-relaxed mb-8">
              I'm on a mission to achieve financial freedom, using AI-driven content creation, automation, and business strategies to make it happen.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="text-xs px-3 py-1.5 bg-black/10 dark:bg-white/15 rounded-full text-black/70 dark:text-white/90 font-montserrat">INFP-T</span>
              <span className="text-xs px-3 py-1.5 bg-black/10 dark:bg-white/15 rounded-full text-black/70 dark:text-white/90 font-montserrat">Deep Thinker</span>
              <span className="text-xs px-3 py-1.5 bg-black/10 dark:bg-white/15 rounded-full text-black/70 dark:text-white/90 font-montserrat">Subtle Rebel</span>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section id="what-i-do" className="creative-container reveal pt-12 sm:pt-16">
        <h2 className="text-gradient mb-10 sm:mb-16">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 stagger-children">
          <div className="creative-card">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="m-0">AI & Tech</h3>
            </div>
            <p className="muted-text text-lg">
              I explore AI workflows, automation tools, and prompt engineering to enhance productivity and efficiency.
            </p>
          </div>

          <div className="creative-card">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="m-0">Content Creation</h3>
            </div>
            <p className="muted-text text-lg">
              I write on X/Twitter, sharing insights on AI, content creation, and personal development. I also understand the YouTube algorithm and viral strategies.
            </p>
          </div>

          <div className="creative-card">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="m-0">Web & Coding</h3>
            </div>
            <p className="muted-text text-lg">
              Currently learning full-stack development and experimenting with no-code/low-code tools for rapid execution.
            </p>
          </div>

          <div className="creative-card">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="m-0">Wealth & Business</h3>
            </div>
            <p className="muted-text text-lg">
              Passionate about online entrepreneurship, unconventional business ideas, and automation for scaling income streams.
            </p>
          </div>
        </div>
      </section>

      {/* My Strengths Section */}
      <section className="creative-container reveal pt-12 sm:pt-16">
        <h2 className="text-gradient mb-10 sm:mb-16">My Strengths</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          <div className="reveal-left">
            <h3 className="text-outline text-6xl md:text-7xl mb-8">01</h3>
            <h3 className="mb-4">Critical Thinking</h3>
            <p className="muted-text text-lg">
              I analyze situations deeply, looking beyond surface-level information to find hidden patterns and opportunities.
            </p>
          </div>
          <div className="reveal-right">
            <h3 className="text-outline text-6xl md:text-7xl mb-8">02</h3>
            <h3 className="mb-4">Quick Learning</h3>
            <p className="muted-text text-lg">
              I rapidly absorb and implement new information from online resources, allowing me to adapt quickly to emerging trends.
            </p>
          </div>
          <div className="reveal-left">
            <h3 className="text-outline text-6xl md:text-7xl mb-8">03</h3>
            <h3 className="mb-4">Human Psychology</h3>
            <p className="muted-text text-lg">
              I have a natural understanding of what drives people, helping me create content and products that resonate deeply.
            </p>
          </div>
          <div className="reveal-right">
            <h3 className="text-outline text-6xl md:text-7xl mb-8">04</h3>
            <h3 className="mb-4">Making Connections</h3>
            <p className="muted-text text-lg">
              I excel at making people feel special and understood, building genuine relationships in both personal and professional contexts.
            </p>
          </div>
        </div>
      </section>

      {/* My Vision Section */}
      <section id="vision" className="creative-container reveal pt-12 sm:pt-16">
        <div className="creative-card p-8 sm:p-10 md:p-12 lg:p-16">
          <h2 className="text-gradient mb-6 sm:mb-8">My Vision</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gradient text-xl md:text-2xl">
              I believe in leveraging the internet to create a life of freedom. Instead of following the traditional path, I'm building something of my own using AI, automation, and content creation to make an impact and generate income.
            </p>
            <p className="text-gradient text-xl md:text-2xl">
              My goal is to achieve financial freedom through AI-driven content creation and online business. I'm focused on building systems that generate passive income, allowing me to focus on what truly matters to me.
            </p>
            <p className="text-gradient text-xl md:text-2xl">
              This website is my digital playground, where I share what I learn, document my journey, and help others find their own edge in the digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-black dark:bg-white text-white dark:text-black p-8 sm:p-10 md:p-12 lg:p-16 rounded-3xl reveal">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-6 sm:mb-8 md:mb-0 md:mr-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4">Join My Journey</h2>
            <p className="text-white/80 dark:text-black/80 text-lg sm:text-xl">
              Get my latest insights on AI, automation, and building wealth in the digital age.
            </p>
          </div>
          <a 
            href="https://sameerizz.substack.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-inverted self-start md:self-center"
          >
            Subscribe on Substack
          </a>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="creative-container reveal pt-12 sm:pt-16">
        <h2 className="text-gradient mb-10 sm:mb-16">Let's Connect</h2>
        <p className="muted-text text-lg sm:text-xl mb-8 sm:mb-12 max-w-2xl">
          If you're into AI, automation, or making smart moves online, let's connect! You can find me on these platforms:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 stagger-children">
          <a 
            href="https://x.com/sameerizz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="creative-card flex items-center gap-4 hover:scale-105 transition-transform smooth-transition"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            <span className="text-lg">X (Twitter)</span>
          </a>
          <a 
            href="https://www.threads.net/@sameerizzz" 
            target="_blank"
            rel="noopener noreferrer"
            className="creative-card flex items-center gap-4 hover:scale-105 transition-transform smooth-transition"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 192 192" aria-hidden="true">
              <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z" />
            </svg>
            <span className="text-lg">Threads</span>
          </a>
          <a
            href="https://www.youtube.com/@Sameerizz" 
            target="_blank"
            rel="noopener noreferrer"
            className="creative-card flex items-center gap-4 hover:scale-105 transition-transform smooth-transition"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span className="text-lg">YouTube</span>
          </a>
        <a
            href="https://www.linkedin.com/in/sidd-sam" 
          target="_blank"
          rel="noopener noreferrer"
            className="creative-card flex items-center gap-4 hover:scale-105 transition-transform smooth-transition"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
            </svg>
            <span className="text-lg">LinkedIn</span>
        </a>
        <a
            href="https://sameerizz.substack.com" 
          target="_blank"
          rel="noopener noreferrer"
            className="creative-card flex items-center gap-4 hover:scale-105 transition-transform smooth-transition"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <span className="text-lg">Newsletter</span>
        </a>
        <a
            href="https://www.instagram.com/sameerizzz" 
          target="_blank"
          rel="noopener noreferrer"
            className="creative-card flex items-center gap-4 hover:scale-105 transition-transform smooth-transition"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
            </svg>
            <span className="text-lg">Instagram</span>
          </a>
        </div>
      </section>
    </div>
  );
}
