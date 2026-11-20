import type { Metadata, Viewport } from 'next'
import './globals.css'
import './evo-premium.css'
import LenisScroll from './components/lenisscroll';
import Loader from './components/Loader';

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

export const viewport: Viewport = {
  themeColor: '#050a14',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="evo-loading" suppressHydrationWarning>
      <head>
        <noscript>
          <style>{`.evo-loader{display:none!important}html.evo-loading,html.evo-loading body{overflow:auto!important}`}</style>
        </noscript>
      </head>
      <body>
        <Loader />
        <LenisScroll />
        {children}
      </body>
    </html>
  )
}
