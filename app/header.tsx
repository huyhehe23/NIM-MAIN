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
    <header className="mb-8 flex items-center justify-between">
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
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Design Engineer
        </TextEffect>
        </div>
      </div>
      
      {/* Star Button with Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
        >
          <svg
            className="w-6 h-6 text-yellow-500 hover:text-yellow-600 transition-colors"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
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
