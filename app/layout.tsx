import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'YourSolar - Advanced Solar Energy Management',
  description: 'Manage your solar energy system with advanced monitoring, analytics, and control features.',
  keywords: 'solar energy, solar panels, renewable energy, energy management, battery storage',
  authors: [{ name: 'Dipesh Mahat' }],
  openGraph: {
    title: 'YourSolar - Advanced Solar Energy Management',
    description: 'Manage your solar energy system with advanced monitoring, analytics, and control features.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen bg-solar-black">
          <Sidebar />
          <div className="flex-1 flex flex-col lg:ml-64">
            <Header />
            <main className="flex-1 overflow-y-auto p-6">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
