'use client'

import { usePathname } from 'next/navigation'
import Sidebar from './Sidebar'
import Header from './Header'

export default function LayoutClient({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname()
  
  // Dashboard pages (with sidebar and header)
  const isDashboardPage = pathname.startsWith('/dashboard') || 
                          pathname.startsWith('/energy') || 
                          pathname.startsWith('/battery') || 
                          pathname.startsWith('/weather') || 
                          pathname.startsWith('/profile') || 
                          pathname.startsWith('/settings')

  if (isDashboardPage) {
    // Dashboard layout with sidebar and header
    return (
      <div className="flex h-screen bg-solar-black">
        <Sidebar />
        <div className="flex-1 flex flex-col lg:ml-64">
          <Header />
          <main className="flex-1 overflow-y-auto p-6">
            {children}
          </main>
        </div>
      </div>
    )
  }

  // Public pages (full-width, no sidebar)
  return (
    <div className="min-h-screen bg-solar-black">
      {children}
    </div>
  )
}
