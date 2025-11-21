import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import LayoutClient from '@/components/LayoutClient'
import ThemeToggle from '@/components/ThemeToggle'

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
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <LayoutClient>{children}</LayoutClient>
        <ThemeToggle />
      </body>
    </html>
  )
}
