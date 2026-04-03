import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Belabloom Projects & Facility Management',
  description: 'Managing Projects, Empowering Businesses. Professional facility management and project solutions.',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.belabloom.com',
    title: 'Belabloom Projects & Facility Management',
    description: 'Managing Projects, Empowering Businesses',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Belabloom',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Belabloom Projects & Facility Management',
    description: 'Managing Projects, Empowering Businesses',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
