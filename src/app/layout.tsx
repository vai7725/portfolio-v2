import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio | Vaibhav Prajapat',
  description:
    'Vaibhav Prajapat: Freelance MERN Stack Developer. Specializing in modern web solutions using MongoDB, Express.js, React.js, and Node.js. Customized projects and dedicated support for startups and enterprises. Explore my portfolio today.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
