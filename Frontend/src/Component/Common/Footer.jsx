import React from 'react'
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  const shopLinks = [
    'New Arrivals',
    'Men',
    'Women',
    'Kids',
    'Sale',
  ]

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 text-gray-100 pt-12 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold mb-1">D99store™️</h3>
            <p className="text-sm text-gray-300">
              Quality products, fast shipping, and delightful shopping experiences.
              Join our community for updates and exclusive offers.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="text-xs bg-white/6 px-2 py-1 rounded-full">Free Shipping</span>
              <span className="text-xs bg-white/6 px-2 py-1 rounded-full">24/7 Support</span>
              <span className="text-xs bg-white/6 px-2 py-1 rounded-full">Secure Payments</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Newsletter</h4>
            <p className="text-sm text-gray-300 mb-4">
              Be the first to know about new products, exclusive events and online offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 items-center" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="newsletter" className="sr-only">Email</label>
              <input
                id="newsletter"
                type="email"
                required
                placeholder="Enter your email"
                className="w-full sm:flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition-shadow duration-200"
              />
              <button
                type="submit"
                className="relative overflow-hidden inline-flex items-center justify-center px-5 py-2 rounded-lg text-white font-medium
                           bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg
                           transform transition duration-300 ease-out
                           hover:scale-[1.03] hover:shadow-2xl
                           focus:outline-none focus:ring-4 focus:ring-indigo-400/30 active:scale-95"
                aria-label="Subscribe"
              >
                Subscribe
                <span className="ml-2 w-2 h-2 rounded-full bg-white/30 animate-pulse hidden sm:inline-block" />
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-full w-0 bg-white/6 pointer-events-none transition-[width] duration-500 ease-out hover:w-full"
                />
              </button>
            </form>

            {/* increased spacing and prevented overlap by using inline-block + z-10 */}
            <p className="text-xs text-gray-400 mt-4 leading-relaxed">
              Sign up and get <span className="font-semibold animate-color-cycle inline-block px-1 z-10">10% off your first order.</span>
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Shop</h4>
            <ul className="text-sm text-gray-300 space-y-2">
              {shopLinks.map((link) => (
                <li key={link} className="hover:text-white cursor-pointer transition-colors duration-150">{link}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Support</h4>
            <ul className="text-sm text-gray-300 space-y-2 mb-4">
              <li className="hover:text-white transition-colors duration-150 cursor-pointer">Help Center</li>
              <li className="hover:text-white transition-colors duration-150 cursor-pointer">Shipping & Returns</li>
              <li className="hover:text-white transition-colors duration-150 cursor-pointer">Contact Us</li>
              <li className="hover:text-white transition-colors duration-150 cursor-pointer">Privacy Policy</li>
            </ul>

            <div className="flex items-center gap-3 mt-2">
              <a href="#" aria-label="Twitter" className="p-3 rounded-full bg-gradient-to-br from-indigo-600 to-pink-500 text-white shadow-md hover:scale-110 transition-transform">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Facebook" className="p-3 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md hover:scale-110 transition-transform">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Instagram" className="p-3 rounded-full bg-gradient-to-br from-pink-500 to-yellow-400 text-white shadow-md hover:scale-110 transition-transform">
                <FaInstagram />
              </a>
              <a href="#" aria-label="YouTube" className="p-3 rounded-full bg-gradient-to-br from-red-500 to-orange-400 text-white shadow-md hover:scale-110 transition-transform">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-400">
          <div className="max-w-3xl mx-auto w-full">
            <div className="text-center">&copy; {new Date().getFullYear()} D99store™️. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer