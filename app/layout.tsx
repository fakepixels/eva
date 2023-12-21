import type { Metadata } from 'next'
import { IBM_Plex_Sans, Zen_Dots } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import './globals.css'

const IBM_Plex_Sans_400 = IBM_Plex_Sans({ weight: "400", subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'EVA',
  description: 'Chatting with EVA.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={IBM_Plex_Sans_400.className}><ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider></body>
    </html>
  )
}
