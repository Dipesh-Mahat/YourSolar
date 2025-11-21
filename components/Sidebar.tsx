'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Home, 
  LayoutDashboard, 
  Building2, 
  Users, 
  Battery, 
  Zap, 
  Cloud, 
  User, 
  Settings,
  Sun,
  Menu,
  X
} from 'lucide-react'
import { useState } from 'react'

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Residential', href: '/residential', icon: Home },
  { name: 'Commercial', href: '/commercial', icon: Building2 },
  { name: 'Community', href: '/community', icon: Users },
  { name: 'Energy', href: '/energy', icon: Zap },
  { name: 'Battery', href: '/battery', icon: Battery },
  { name: 'Weather', href: '/weather', icon: Cloud },
  { name: 'Profile', href: '/profile', icon: User },
  { name: 'Settings', href: '/settings', icon: Settings },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-solar-gray-dark text-solar-yellow"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-40 h-screen w-64 bg-solar-gray-dark border-r border-solar-gray-light
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center gap-2 p-6 border-b border-solar-gray-light">
            <Sun className="w-8 h-8 text-solar-yellow" />
            <span className="text-xl font-bold text-solar-yellow">YourSolar</span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1 px-3">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`
                        flex items-center gap-3 px-4 py-3 rounded-lg transition-all
                        ${isActive 
                          ? 'bg-solar-yellow text-solar-black font-semibold' 
                          : 'text-gray-300 hover:bg-solar-gray-light hover:text-solar-yellow'
                        }
                      `}
                    >
                      <item.icon size={20} />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-solar-gray-light">
            <p className="text-xs text-gray-500 text-center">
              © 2025 YourSolar
            </p>
            <p className="text-xs text-gray-600 text-center mt-1">
              <Link href="https://github.com/Dipesh-Mahat/YourSolar" className="hover:text-solar-yellow">
                AGPL-3.0 License
              </Link>
            </p>
          </div>
        </div>
      </aside>
    </>
  )
}
