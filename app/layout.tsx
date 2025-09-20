import type {Metadata} from 'next'
import './globals.css'
import {marcellus} from '@/public/Fonts'
import React from 'react'

export const metadata: Metadata = {
  title: 'Almaris главная'
}

export default function RootLayout({
                                     children
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
    <body className={`${marcellus.className} antialiased w-full`}>{children}</body>
    </html>
  )
}
