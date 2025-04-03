import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fabian Jaskotka',
  description: 'Personal website of Fabian Jaskotka',
  manifest: '/manifest.json',
  themeColor: '#171717', // Change this to your desired color
  icons: {
    icon: '/favicon.ico', // This references the favicon.ico in the app directory
    apple: '/apple-icon.png',  // Add this if you want iOS support
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
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
