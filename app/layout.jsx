
import { ClerkProvider } from "@clerk/nextjs";
import './globals.css'
import { Inter as FontSans } from "next/font/google";
import { Suspense } from "react";
import Loader from "@/components/ui/loader";
import RootProviders from '@/providers/RootProvider';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({ children }) {
  

  return (
    <ClerkProvider>
      
        <html lang="en" className="m-0 p-0 box-border">
          <body className={`${fontSans.variable} w-full min-h-screen`}>
            <RootProviders>
            <Suspense fallback={<Loader />}>
              {children}
            </Suspense>
            </RootProviders>
          </body>
        </html>
      
    </ClerkProvider>
  )
}
