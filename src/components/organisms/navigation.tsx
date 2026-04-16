import type { MouseEvent } from 'react'
import { useEffect, useState } from 'react'

import Logo from "../atoms/logo";
import Link from "../atoms/link";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleSectionScroll = (sectionId: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()

    const targetSection = document.getElementById(sectionId)

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
      window.history.replaceState(null, '', `#/section/${sectionId}`)
      setIsMenuOpen(false)
      return
    }

    window.location.hash = `#/section/${sectionId}`
    setIsMenuOpen(false)
  }

  return (
    <>
      <nav
        aria-label="Primary"
        className="sticky top-0 z-40 bg-stone-950/25 px-4 py-4 backdrop-blur-[5px] md:px-0 md:flex md:items-center md:justify-between"
      >
        <div className="flex items-center justify-between w-full md:w-auto">
          <Logo />
          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="flex z-50 h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-lg border border-emerald-500 md:hidden relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`h-0.5 w-5 bg-emerald-500 transition-transform duration-300 ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 w-5 bg-emerald-500 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`h-0.5 w-5 bg-emerald-500 transition-transform duration-300 ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>

        <div className="hidden justify-end gap-4 md:flex md:ml-auto">
          <Link content="Home" href="#/section/home" color="green" onClick={handleSectionScroll('home')} />
          <Link content="About" href="#/section/about" color="green" onClick={handleSectionScroll('about')} />
          <Link content="Projects" href="#/section/projects" color="green" onClick={handleSectionScroll('projects')} />
          <Link content="Contact" href="#/section/contact" color="green" onClick={handleSectionScroll('contact')} />
        </div>
      </nav>

      <div
        id="mobile-navigation"
        className={`
          fixed inset-0 z-30 md:hidden
          flex flex-col gap-8 p-5 justify-center text-center
          bg-stone-950/40 backdrop-blur-md
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
        `}
      >
        <Link content="Home" href="#/section/home" color="green" onClick={handleSectionScroll('home')} />
        <Link content="About" href="#/section/about" color="green" onClick={handleSectionScroll('about')} />
        <Link content="Projects" href="#/section/projects" color="green" onClick={handleSectionScroll('projects')} />
        <Link content="Contact" href="#/section/contact" color="green" onClick={handleSectionScroll('contact')} />
      </div>
    </>
  )
}

export default Navigation
