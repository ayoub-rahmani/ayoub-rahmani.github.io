"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState("")

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)

            const sections = ["about", "skills", "projects", "contact"]
            for (const id of sections.reverse()) {
                const el = document.getElementById(id)
                if (el && window.scrollY >= el.offsetTop - 120) {
                    setActiveSection(id)
                    break
                }
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navItems = [
        { href: "#about", label: "About" },
        { href: "#skills", label: "Skills" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ]

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-[#0a0a0f]/90 backdrop-blur-md border-b border-slate-800"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <a href="#" className="font-mono text-sm text-sky-400 tracking-wider">
                        AR<span className="text-slate-600">/</span>
                    </a>

                    {/* Desktop */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => {
                            const id = item.href.slice(1)
                            return (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className={`font-mono text-xs tracking-widest uppercase transition-colors duration-200 ${
                                        activeSection === id
                                            ? "text-sky-400"
                                            : "text-slate-500 hover:text-slate-200"
                                    }`}
                                >
                                    {item.label}
                                </a>
                            )
                        })}
                        <a
                            href="mailto:ayoub.rahmani.dev@gmail.com"
                            className="font-mono text-xs tracking-widest px-4 py-2 border border-sky-500/30 text-sky-400 hover:bg-sky-500/10 transition-colors"
                        >
                            Hire me
                        </a>
                    </div>

                    {/* Mobile */}
                    <button
                        className="md:hidden text-slate-400 hover:text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>

                {isMobileMenuOpen && (
                    <div className="md:hidden border-t border-slate-800 py-4 space-y-4 bg-[#0a0a0f]">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="block font-mono text-xs tracking-widest uppercase text-slate-400 hover:text-white px-2 py-1"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    )
}
