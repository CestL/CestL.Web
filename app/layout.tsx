import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Luis Pineda | Frontend Developer & AI Specialist",
  description:
    "Frontend Web Developer & AI-Driven Optimization Engineer. Enhancing user experiences through advanced development and AI-powered solutions.",
  keywords: ["Frontend Developer", "AI specialist", "web development", "React developer", "JavaScript", "portfolio"],
  authors: [{ name: "Luis Pineda" }],
  openGraph: {
    title: "Luis Pineda | Frontend Developer & AI Specialist",
    description:
      "Frontend Web Developer & AI-Driven Optimization Engineer. Enhancing user experiences through advanced development and AI-powered solutions.",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <link rel="canonical" href="https://your-domain.com" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
