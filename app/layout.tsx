import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Curt Vance | Frontend Developer',
  description:
    'Frontend developer building clean React and Next.js applications with modern UI and responsive design.',
  icons: {
    icon: '/profileImage1.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">{children}</body>
    </html>
  )
}