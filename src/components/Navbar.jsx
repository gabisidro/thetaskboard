import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto max-w-4xl px-4">
        <div className="flex items-center justify-between py-4">
        <Link to="/" className="font-display text-3xl">TheTaskBoard</Link>

        <button
          type="button"
          className="rounded border border-gray-200 px-3 py-1 text-sm md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          Menu
        </button>

        <ul className="hidden gap-6 text-sm md:flex">
          <li><Link to="/" className="hover:text-blue-700">Tasks</Link></li>
          <li><Link to="/stats" className="hover:text-blue-700">Stats</Link></li>
          <li><Link to="/about" className="hover:text-blue-700">About</Link></li>
        </ul>
        </div>

      {isOpen && (
        <ul className="border-t border-gray-200 py-2 text-sm md:hidden">
          <li><Link to="/" className="block py-2" onClick={() => setIsOpen(false)}>Tasks</Link></li>
          <li><Link to="/stats" className="block py-2" onClick={() => setIsOpen(false)}>Stats</Link></li>
          <li><Link to="/about" className="block py-2" onClick={() => setIsOpen(false)}>About</Link></li>
        </ul>
      )}
      </nav>
    </header>
  )
}

export default Navbar