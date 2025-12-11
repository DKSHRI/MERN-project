// ...existing code...
import React, { useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { HiOutlineTrash } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import cartContents from './CartContent'

const Cartdrawer = ({ isOpen, onClose, items = [] }) => {
  const [localItems, setLocalItems] = useState(
    Array.isArray(items) && items.length > 0 ? items : cartContents
  )

  useEffect(() => {
    if (Array.isArray(items) && items.length > 0) setLocalItems(items)
  }, [items])

  // prevent background scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const removeItem = (productId) => {
    setLocalItems((prev) => prev.filter((it) => it.productId !== productId))
  }

  const updateQty = (productId, newQty) => {
    setLocalItems((prev) =>
      prev.map((it) => (it.productId === productId ? { ...it, qty: Math.max(1, newQty) } : it))
    )
  }

  const hasItems = Array.isArray(localItems) && localItems.length > 0

  const subtotal = localItems.reduce((sum, it) => sum + (Number(it.price || 0) * Number(it.qty || 1)), 0)

  const formatPrice = (v) => {
    const n = Number(v || 0)
    return `₹${n.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  }

  return (
    <>
      {/* overlay */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
        style={{ backgroundColor: 'rgba(0,0,0,0.45)', backdropFilter: isOpen ? 'blur(4px)' : 'none' }}
        aria-hidden={!isOpen}
      />

      {/* drawer panel */}
      <aside
        className={`fixed top-0 right-0 h-full z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
        style={{ width: '100%', maxWidth: '420px' }}
      >
        <div className="h-full flex flex-col bg-white/6 backdrop-blur-sm border-l border-white/10 shadow-lg">
          {/* header */}
          <div className="px-4 py-3 flex items-center justify-between border-b border-white/10">
            <h3 className="text-lg font-medium text-white">Cart <span className="text-sm text-gray-300">({localItems.length})</span></h3>
            <button onClick={onClose} aria-label="Close cart" className="p-1 rounded">
              <IoMdClose className="h-6 w-6 text-gray-700 hover:text-black transition" />
            </button>
          </div>

          {/* content (scrollable) */}
          <div className="p-3 sm:p-4 flex-1 overflow-y-auto">
            {hasItems ? (
              <ul className="space-y-4">
                {localItems.map((it) => (
                  <li key={it.productId} className="flex flex-col gap-2 p-2 sm:p-3 rounded-lg bg-white/6 backdrop-blur-sm border border-white/6">
                    <div className="flex items-start sm:items-center gap-3 w-full sm:w-3/4">
                      {it.image ? (
                        <img src={it.image} alt={it.name} className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded flex-shrink-0" />
                      ) : (
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/8 rounded flex items-center justify-center text-xs flex-shrink-0">No Img</div>
                      )}

                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-xs sm:text-sm text-white truncate">{it.name}</div>

                        <div className="mt-2 flex items-center gap-2 flex-wrap">
                          <button
                            onClick={() => updateQty(it.productId, (it.qty ?? 1) - 1)}
                            className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded border bg-white/5 text-xs sm:text-sm text-white"
                            aria-label="Decrease quantity"
                          >
                            -
                          </button>
                          <div className="px-2 sm:px-3 text-xs sm:text-sm text-white">{it.qty ?? 1}</div>
                          <button
                            onClick={() => updateQty(it.productId, (it.qty ?? 1) + 1)}
                            className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded border bg-white/5 text-xs sm:text-sm text-white"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>

                          <button
                            onClick={() => removeItem(it.productId)}
                            className="ml-auto sm:ml-3 text-red-400 hover:text-red-300 flex items-center gap-1 text-xs sm:text-sm"
                            aria-label="Remove item"
                          >
                            <HiOutlineTrash className="h-3 w-3 sm:h-4 sm:w-4" /> <span className="hidden sm:inline">Remove</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="mt-2 sm:mt-0 w-full sm:w-auto text-right">
                      <div className="font-semibold text-xs sm:text-sm text-white">{formatPrice(it.price * (it.qty ?? 1))}</div>
                      <div className="text-xs text-gray-400 mt-1">{formatPrice(it.price)} each</div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center px-4">
                <p className="text-sm text-gray-300">Your cart is empty.</p>
                <p className="mt-2 text-xs text-gray-400">Add items to see them here.</p>
              </div>
            )}
          </div>

          {/* footer */}
          <div className="px-3 sm:px-4 py-3 border-t border-white/10">
            <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-3">
              <div className="text-center sm:text-left w-full sm:w-auto">
                <div className="text-xs sm:text-sm text-gray-300">Subtotal</div>
                <div className="text-base sm:text-lg font-semibold text-white">{formatPrice(subtotal)}</div>
              </div>

              {hasItems ? (
                <Link
                  to="/checkout"
                  onClick={onClose}
                  className="w-full sm:w-auto text-center px-4 py-2 rounded-md bg-[#ea2eBe] hover:bg-pink-600 text-white text-xs sm:text-sm font-medium transition"
                >
                  Checkout
                </Link>
              ) : (
                <button
                  type="button"
                  className="w-full sm:w-auto text-center px-4 py-2 rounded-md bg-gray-600 text-gray-300 text-xs sm:text-sm cursor-not-allowed opacity-60"
                  aria-disabled="true"
                  disabled
                >
                  No items for checkout
                </button>
              )}
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Cartdrawer
// ...existing code...