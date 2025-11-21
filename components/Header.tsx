'use client'

import { Bell, Search, User } from 'lucide-react'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('')
  const pathname = usePathname()
  
  // Show header only on dashboard pages
  const isDashboardPage = pathname.startsWith('/dashboard') || 
                          pathname.startsWith('/energy') || 
                          pathname.startsWith('/battery') || 
                          pathname.startsWith('/weather') || 
                          pathname.startsWith('/profile') || 
                          pathname.startsWith('/settings')

  if (!isDashboardPage) return null

  return (
    <header className="bg-solar-gray-dark border-b border-solar-gray-light px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Search */}
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-solar-gray-light rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-solar-yellow"
            />
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-4 ml-6">
          {/* Notifications */}
          <button className="relative p-2 rounded-lg hover:bg-solar-gray-light transition-colors" aria-label="Notifications">
            <Bell size={20} className="text-gray-300" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-solar-yellow rounded-full"></span>
          </button>

          {/* User profile */}
          <Link href="/profile" className="flex items-center gap-2 p-2 rounded-lg hover:bg-solar-gray-light transition-colors">
            <div className="w-8 h-8 bg-solar-yellow rounded-full flex items-center justify-center">
              <User size={18} className="text-solar-black" />
            </div>
            <span className="text-gray-300 text-sm hidden sm:block">Dipesh Mahat</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
