import type { Metadata } from 'next'
import { Recursive } from 'next/font/google'
import './globals.css'
import Header from '@/components/shared/header'
import Footer from '@/components/shared/footer'
import ContextProvider from '@/context/contextProvider'
import { Toaster } from 'sonner'
import axios from 'axios'

const recursive = Recursive({ subsets: ['latin'] })
axios.defaults.baseURL = process.env.NEXT_PUBLIC_URL

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL!),
  keywords: ['store', 'medicine', 'kits', 'ecommerce', 'sales'],
  title: {
    default: 'Safekit',
    template: '%s | Safekit',
  },
  description: 'Get medical kits at Safekit.',
  openGraph: {
    title: 'Safekit',
    images: '/logo.png',
    description: 'Get medical kits at Safekit.',
    url: process.env.NEXT_PUBLIC_URL,
  },
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${recursive.className} antialiased overflow-x-hidden pt-3`}
      >
        <ContextProvider>
          <Header />
          {children}
          <Footer />
          <Toaster position='top-right' closeButton />
        </ContextProvider>
      </body>
    </html>
  )
}
