'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Rooms & Suites', href: '/rooms' },
    { name: 'Dining', href: '/restaurant' },
    { name: 'Wellness', href: '/spa' },
    { name: 'Experiences', href: '/experiences', 
      dropdown: [
        { name: 'Gym & Fitness', href: '/gym' },
        { name: 'Cinema Nights', href: '/cinema' },
        { name: 'Meetings & Events', href: '/events' },
      ]
    },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl font-serif">V</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold text-[#1e3a8a]">Virungainn</span>
              <span className="text-xs text-gray-500 font-light">Hotel & Resort</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link 
                  href={item.href}
                  className="text-gray-700 hover:text-[#1e3a8a] font-medium transition-colors duration-200 py-2"
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="absolute top-full left-0 min-w-48 bg-white shadow-lg rounded-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-2">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-3 text-gray-700 hover:text-[#1e3a8a] hover:bg-gray-50 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Book Now Button */}
          <Link href="/booking">
            <Button className="btn-primary hidden lg:inline-flex">
              Book Now
            </Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-700 my-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen pb-6' : 'max-h-0'}`}>
          <nav className="flex flex-col space-y-4 pt-4 border-t border-gray-100">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link 
                  href={item.href}
                  className="block text-gray-700 hover:text-[#1e3a8a] font-medium py-2 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block text-gray-600 hover:text-[#1e3a8a] py-1 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/booking">
              <Button className="btn-primary w-full mt-4" onClick={() => setIsMenuOpen(false)}>
                Book Now
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header