import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ayoub Rahmani - Computer Engineering Student & AI Power User",
  description:
    "Passionate Computer Engineering student from Tunisia specializing in mobile apps, desktop software, and AI-enhanced development.",
  generator: "v0.app",
  keywords: ["Computer Engineering", "Flutter", "Java", "AI", "Mobile Development", "Tunisia"],
  authors: [{ name: "Ayoub Rahmani" }],
  openGraph: {
    title: "Ayoub Rahmani - Computer Engineering Student",
    description: "Passionate about turning ideas into reality with code, focusing on mobile apps and desktop software.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased">
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
