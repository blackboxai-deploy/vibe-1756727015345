import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
  variable: '--font-lato',
})

export const metadata: Metadata = {
  title: 'Virungainn Hotel | Experience Luxury & Serenity in Rwanda',
  description: 'Discover the ultimate luxury hospitality experience at Virungainn Hotel in Rwanda. Premium rooms, world-class spa, fine dining, and breathtaking views of the Virunga mountains.',
  keywords: 'luxury hotel Rwanda, Kigali accommodation, Virunga mountains, spa resort, fine dining, wedding venue, conference facilities',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}