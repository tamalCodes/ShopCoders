"use client"

import { SessionProvider } from "next-auth/react";
import Navbar from '@/components/navbar/Navbar';
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>CoderCrate</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="An one stop solution to all your coding needs." />
        <link rel="icon" href="/cc.png" />


        {/* //* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik+Wet+Paint&display=swap" rel="stylesheet"></link>


      </head>

      <body className="px-[8%] py-[3%] bg-[#fafafa]">

        <SessionProvider>
          <Navbar />
          {children}
        </SessionProvider>

      </body>
    </html>
  )
}
