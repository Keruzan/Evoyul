import type { Metadata } from 'next'
import './globals.css'
import LenisScroll from './components/lenisscroll';


export const metadata: Metadata = {
  title: 'Evoyul',
  description: 'Build the Future of your Business',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',

  
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <LenisScroll />
      <body>{children}</body>
    </html>
  )
}
