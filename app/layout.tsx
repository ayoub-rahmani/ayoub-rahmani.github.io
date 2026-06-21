import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
    title: "Ayoub Rahmani — Mobile Developer",
    description:
        "Computer Engineering graduate from Tunisia. Building production-ready mobile apps with React Native and Flutter. Open to junior developer positions and internships.",
    keywords: ["Mobile Developer", "React Native", "Flutter", "TypeScript", "Tunisia", "Computer Engineering"],
    authors: [{ name: "Ayoub Rahmani" }],
    openGraph: {
        title: "Ayoub Rahmani — Mobile Developer",
        description:
            "Computer Engineering graduate from Tunisia. Building production-ready mobile apps with React Native and Flutter.",
        type: "website",
        url: "https://ayoub-rahmani.github.io",
    },
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className="dark">
        <body className="font-sans antialiased" style={{ backgroundColor: "#0a0a0f" }}>
        <Suspense fallback={null}>{children}</Suspense>
        </body>
        </html>
    )
}
