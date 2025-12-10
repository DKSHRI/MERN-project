import React from 'react'
import { useState } from 'react'
import { HiMagnifyingGlass } from 'react-icons/hi2'

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search for:', searchTerm);
    // Add your search logic here
  };

  const handleClose = () => {
    setIsOpen(false);
    setSearchTerm('');
  };

  return (
    <div className="relative">
      {/* Magnifying Glass Icon Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-gray-100 rounded-lg transition"
        aria-label="Open search"
      >
        <HiMagnifyingGlass className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
      </button>

      {/* Search Input Modal/Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/30 z-40" onClick={handleClose} />
      )}

      {/* Search Input Box */}
      <div
        className={`absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg p-3 sm:p-4 z-50 transition-all duration-300 ${
          isOpen
            ? 'opacity-100 visible w-64 sm:w-80 md:w-96'
            : 'opacity-0 invisible w-0'
        }`}
      >
        <form onSubmit={handleSearch} className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
            className="flex-1 outline-none text-sm sm:text-base px-2 py-2 border-b border-gray-300 focus:border-[#ea2eBe] transition"
          />
          <button
            type="submit"
            className="p-1 text-[#ea2eBe] hover:bg-pink-50 rounded transition"
          >
            <HiMagnifyingGlass className="h-5 w-5" />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Searchbar