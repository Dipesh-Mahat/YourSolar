import Link from 'next/link'
import { Sun } from 'lucide-react'

export default function PublicNav() {
  return (
    <nav className="sticky top-0 z-50 bg-solar-gray-dark/95 backdrop-blur-sm border-b border-solar-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Sun className="w-8 h-8 text-solar-yellow" />
            <span className="text-xl font-bold text-solar-yellow">YourSolar</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/#solutions" className="text-gray-300 hover:text-solar-yellow transition-colors">
              Solutions
            </Link>
            <Link href="/residential" className="text-gray-300 hover:text-solar-yellow transition-colors">
              Residential
            </Link>
            <Link href="/commercial" className="text-gray-300 hover:text-solar-yellow transition-colors">
              Commercial
            </Link>
            <Link href="/community" className="text-gray-300 hover:text-solar-yellow transition-colors">
              Community
            </Link>
            <Link href="/dashboard" className="btn-primary px-4 py-2 text-sm">
              Login to Dashboard
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Link href="/dashboard" className="md:hidden btn-primary px-4 py-2 text-sm">
            Login
          </Link>
        </div>
      </div>
    </nav>
  )
}
