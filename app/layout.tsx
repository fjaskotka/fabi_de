import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fabian Jaskotka',
  description: 'Personal website of Fabian Jaskotka',
  icons: {
    icon: '/favicon.ico', // This references the favicon.ico in the app directory
  },
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
