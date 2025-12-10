import React from 'react'
import { TbBrandMeta } from 'react-icons/tb'
import { IoLogoInstagram } from 'react-icons/io'
import { RiTwitterXLine } from 'react-icons/ri'

const Topbar = () => {
  return (
    <div className="bg-[#ea2eBe] text-white py-2">
      <div className="container mx-auto flex items-center justify-between px-3 whitespace-nowrap overflow-hidden">

        {/* Social Icons */}
        <div className="flex items-center space-x-3">
          <TbBrandMeta className="h-4 w-4 sm:h-5 sm:w-5" />
          <IoLogoInstagram className="h-4 w-4 sm:h-5 sm:w-5" />
          <RiTwitterXLine className="h-3 w-3 sm:h-4 sm:w-4" />
        </div>

        {/* Middle Text */}
        <div className="text-[10px] sm:text-xs md:text-sm text-center">
          We ship worldwide — Fast and reliable delivery
        </div>

        {/* Phone Number */}
        <div className="text-[10px] sm:text-xs md:text-sm">
          <a href="tel:+917668339619" className="hover:text-gray-200">
            +91 7668339619
          </a>
        </div>

      </div>
    </div>
  )
}

export default Topbar
