'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { useState, useRef } from 'react'
import useClickOutside from '@/hooks/useClickOutside'

export function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  
  useClickOutside(dropdownRef, () => setIsDropdownOpen(false))

  return (
    <header className="mb-8 flex items-center justify-between w-full">
      <div className="flex items-center gap-3">
        <img 
          src="https://www.animedep.com/wp-content/uploads/2025/04/anh-anime-nam-2.webp" 
          alt="Anime Avatar" 
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <Link href="/" className="font-medium text-black dark:text-white">
            Hoàng Minh Huy
          </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-black dark:text-white font-bold"
          delay={0.5}
        >
          Badminton Expert
        </TextEffect>
        </div>
      </div>
      
      {/* Exclamation Button aligned with avatar */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 hover:from-pink-500 hover:via-purple-600 hover:to-indigo-700 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
        >
          <span className="text-white font-bold text-4xl drop-shadow-lg">!</span>
        </button>
        
        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
            <div className="py-1">
              <button
                onClick={() => {
                  setIsDropdownOpen(false)
                  // Add your action here
                  alert('Mục 1 được chọn!')
                }}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                🎯 Mục 1
              </button>
              <button
                onClick={() => {
                  setIsDropdownOpen(false)
                  // Add your action here
                  alert('Mục 2 được chọn!')
                }}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                ⚡ Mục 2
              </button>
              <button
                onClick={() => {
                  setIsDropdownOpen(false)
                  // Add your action here
                  alert('Mục 3 được chọn!')
                }}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                🚀 Mục 3
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
