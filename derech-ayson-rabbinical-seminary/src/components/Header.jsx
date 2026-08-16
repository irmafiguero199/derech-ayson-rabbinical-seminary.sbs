import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail, MapPin, BookOpen } from 'lucide-react'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/programs', label: 'Programs' },
    { to: '/impact', label: 'Impact' },
    { to: '/team', label: 'Team' },
    { to: '/news', label: 'News' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary-900 text-primary-100 text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              802 Hicksville Rd, Far Rockaway, NY 11691-5219
            </span>
            <span className="hidden sm:inline">|</span>
            <span className="font-semibold text-accent-300">EIN: 11-2611716</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+17185550100" className="flex items-center gap-1 hover:text-accent-300 transition-colors">
              <Phone className="w-3 h-3" />
              (718) 555-0100
            </a>
            <a href="mailto:admin@derech-ayson-rabbinical-seminary.sbs" className="flex items-center gap-1 hover:text-accent-300 transition-colors">
              <Mail className="w-3 h-3" />
              <span className="hidden sm:inline">admin@derech-ayson-rabbinical-seminary.sbs</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-primary-700" />
              <div>
                <span className="font-serif font-bold text-lg text-primary-900 leading-tight block">Derech Ayson</span>
                <span className="text-xs text-primary-500">Rabbinical Seminary</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === link.to
                      ? 'text-primary-800 bg-primary-50'
                      : 'text-primary-600 hover:text-primary-800 hover:bg-primary-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/donate"
                className="ml-3 px-5 py-2 bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold rounded-lg transition-colors"
              >
                Donate
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-primary-700 hover:bg-primary-50"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-primary-100">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === link.to
                      ? 'text-primary-800 bg-primary-50'
                      : 'text-primary-600 hover:text-primary-800 hover:bg-primary-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/donate"
                className="block mt-2 px-3 py-2 bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold rounded-lg text-center"
              >
                Donate
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header