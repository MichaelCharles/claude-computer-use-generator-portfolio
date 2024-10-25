import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Michael Charles Aubrey - Senior Engineer',
  description: 'Portfolio of Michael Charles Aubrey, Senior Engineer at Maki',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white dark:bg-gray-900`}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}