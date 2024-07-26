import { ClerkProvider } from "@clerk/nextjs";
import './globals.css'
import { Inter as FontSans } from "next/font/google";
import { Suspense } from "react";
import Loader from "@/components/ui/loader";

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({ children }) {
  const year = new Date().getFullYear();

  return (
    <ClerkProvider>
      <html lang="en" className="m-0 p-0 box-border">
        <body className={`${fontSans.variable} w-full min-h-screen`}>
        <Suspense fallback={<Loader/>}>
          {/* Content */}
          {children}
          </Suspense>
          
        </body>
      </html>
    </ClerkProvider>
  )
}
