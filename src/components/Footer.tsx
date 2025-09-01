import Link from 'next/link'
import { Button } from '@/components/ui/button'

const Footer = () => {
  return (
    <footer className="bg-[#1e3a8a] text-white">
      <div className="max-w-7xl mx-auto container-padding section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Hotel Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] rounded-lg flex items-center justify-center">
                <span className="text-[#1e3a8a] font-bold text-lg font-serif">V</span>
              </div>
              <div>
                <span className="text-xl font-serif font-bold">Virungainn</span>
                <p className="text-xs text-blue-200">Hotel & Resort</p>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Experience luxury and serenity in the heart of Rwanda, where modern comfort meets breathtaking natural beauty.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-blue-600 hover:bg-[#fbbf24] rounded-full flex items-center justify-center transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-blue-600 hover:bg-[#fbbf24] rounded-full flex items-center justify-center transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C3.182 14.155 2.45 12.017 2.45 9.5s.733-4.655 2.676-6.191C6.001 2.512 7.152 2.022 8.449 2.022s2.448.49 3.323 1.297c1.944 1.536 2.676 3.674 2.676 6.191s-.732 4.655-2.676 6.191c-.875.807-2.026 1.297-3.323 1.297z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-blue-600 hover:bg-[#fbbf24] rounded-full flex items-center justify-center transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link href="/rooms" className="text-blue-200 hover:text-[#fbbf24] transition-colors text-sm">Luxury Rooms & Suites</Link></li>
              <li><Link href="/spa" className="text-blue-200 hover:text-[#fbbf24] transition-colors text-sm">Spa & Wellness</Link></li>
              <li><Link href="/gym" className="text-blue-200 hover:text-[#fbbf24] transition-colors text-sm">Gym & Fitness</Link></li>
              <li><Link href="/restaurant" className="text-blue-200 hover:text-[#fbbf24] transition-colors text-sm">Fine Dining</Link></li>
              <li><Link href="/events" className="text-blue-200 hover:text-[#fbbf24] transition-colors text-sm">Meetings & Events</Link></li>
              <li><Link href="/cinema" className="text-blue-200 hover:text-[#fbbf24] transition-colors text-sm">Private Cinema</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <svg className="w-4 h-4 mt-1 text-[#fbbf24]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-blue-200">KN 4 Ave, Kigali</p>
                  <p className="text-blue-200">Rwanda, East Africa</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-[#fbbf24]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+250788123456" className="text-blue-200 hover:text-[#fbbf24] transition-colors">
                  +250 788 123 456
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-[#fbbf24]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:reservations@virungainn.rw" className="text-blue-200 hover:text-[#fbbf24] transition-colors">
                  reservations@virungainn.rw
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-[#fbbf24]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clipRule="evenodd" />
                </svg>
                <a href="https://wa.me/250788123456" className="text-blue-200 hover:text-[#fbbf24] transition-colors">
                  WhatsApp: +250 788 123 456
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">Stay Connected</h3>
            <p className="text-blue-200 text-sm mb-4">Subscribe to our newsletter for exclusive offers and updates.</p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-blue-800 border border-blue-600 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:border-[#fbbf24] text-sm"
              />
              <Button className="w-full bg-[#fbbf24] hover:bg-[#f59e0b] text-[#1e3a8a] font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-blue-200 hover:text-[#fbbf24] transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-blue-200 hover:text-[#fbbf24] transition-colors">Terms of Service</Link>
              <Link href="/sitemap" className="text-blue-200 hover:text-[#fbbf24] transition-colors">Sitemap</Link>
            </div>
            <div className="text-center">
              <p className="text-blue-200 text-sm">
                © 2024 Virungainn Hotel. All rights reserved.
              </p>
              <Link href="/booking" className="inline-block mt-2">
                <Button className="btn-secondary text-sm px-6 py-2">
                  Book Your Stay Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer