import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fabian Jaskotka',
  description: 'Personal website of Fabian Jaskotka',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico', // This references the favicon.ico in the app directory
    apple: '/apple-icon.png',  // Add this if you want iOS support
  },
  themeColor: '#869F5C',  // Should match your manifest theme_color
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
