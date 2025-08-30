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
        
        {/* Large Modal Panel */}
        {isDropdownOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-4xl h-5/6 flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Menu Chính</h2>
                <button
                  onClick={() => setIsDropdownOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Content */}
              <div className="flex-1 p-6 overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
                  {/* Option 1 */}
                  <div 
                    onClick={() => {
                      setIsDropdownOpen(false)
                      alert('Mục 1 được chọn!')
                    }}
                    className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-8 text-white cursor-pointer hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <div className="text-6xl mb-4">🎯</div>
                    <h3 className="text-2xl font-bold mb-2">Mục 1</h3>
                    <p className="text-blue-100">Mô tả chi tiết về mục 1 và chức năng của nó</p>
                  </div>
                  
                  {/* Option 2 */}
                  <div 
                    onClick={() => {
                      setIsDropdownOpen(false)
                      alert('Mục 2 được chọn!')
                    }}
                    className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-8 text-white cursor-pointer hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <div className="text-6xl mb-4">⚡</div>
                    <h3 className="text-2xl font-bold mb-2">Mục 2</h3>
                    <p className="text-green-100">Mô tả chi tiết về mục 2 và chức năng của nó</p>
                  </div>
                  
                  {/* Option 3 */}
                  <div 
                    onClick={() => {
                      setIsDropdownOpen(false)
                      alert('Mục 3 được chọn!')
                    }}
                    className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-8 text-white cursor-pointer hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <div className="text-6xl mb-4">🚀</div>
                    <h3 className="text-2xl font-bold mb-2">Mục 3</h3>
                    <p className="text-purple-100">Mô tả chi tiết về mục 3 và chức năng của nó</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
