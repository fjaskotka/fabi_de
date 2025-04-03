import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fabian Jaskotka',
  description: 'Personal website of Fabian Jaskotka',
  manifest: '/manifest.json',
  themeColor: '#171717', // Change this to your desired color
  icons: {
    icon: '/favicon.ico', // This references the favicon.ico in the app directory
    apple: '/logo1080.png',  // Changed to use your logo1080.png
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Fabian Jaskotka',
    startupImage: [
      '/apple-splash-2048-2732.png',
      '/apple-splash-1668-2388.png',
      '/apple-splash-1536-2048.png',
      '/apple-splash-1125-2436.png',
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#171717" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)" />
        <link rel="apple-touch-icon" href="/logo1080.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
