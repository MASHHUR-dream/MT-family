import type { Metadata } from "next";
import { Geist_Mono, Inter } from 'next/font/google'
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
const inter = Inter({ subsets: ['latin'] })
const geisMono = Geist_Mono({ subsets: ['latin'] })

const metadata: Metadata = {
  title: 'ChatMe',
  description: 'A simple chat aplication build with Next.js and Typescript.'
}

type RootlayoutProps = {
  children: React.ReactNode
}
function Layout({ children }: RootlayoutProps) {
  return (
    <html lang="eng">
      <body className="min-h-full flex flex-col">{children}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
export default Layout;  