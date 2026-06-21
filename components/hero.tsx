"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowUpRight, Youtube } from "lucide-react"

export function Hero() {
    const [isVisible, setIsVisible] = useState(false)
    const [cursorVisible, setCursorVisible] = useState(true)

    useEffect(() => {
        setIsVisible(true)
        const interval = setInterval(() => setCursorVisible(v => !v), 530)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="min-h-screen flex items-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
            {/* Dot-grid background — denser, more technical feel */}
            <div
                className="absolute inset-0 opacity-[0.035]"
                style={{
                    backgroundImage: `radial-gradient(circle, #38bdf8 1px, transparent 1px)`,
                    backgroundSize: "32px 32px",
                }}
            />
            {/* Glow — shifted to bottom-left for asymmetry */}
            <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-sky-500/4 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-5xl mx-auto w-full pt-24 pb-16">
                <div
                    className="transition-all duration-700"
                    style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(24px)" }}
                >
                    {/* Terminal-style status line — more distinctive than a pill badge */}
                    <div className="inline-flex items-center gap-3 mb-10 font-mono text-xs text-slate-500">
                        <span className="text-sky-400">$</span>
                        <span>status</span>
                        <span className="text-slate-700">·</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                        <span className="text-sky-400 tracking-wider">OPEN TO OPPORTUNITIES</span>
                        <span className="text-slate-700">·</span>
                        <span>June 2026</span>
                    </div>

                    {/* Name */}
                    <h1 className="font-mono text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-white leading-none">
                        Ayoub
                        <br />
                        Rahmani
                        <span
                            className="inline-block w-1 h-[0.85em] bg-sky-400 ml-2 align-middle relative top-[-0.05em]"
                            style={{ opacity: cursorVisible ? 1 : 0, transition: "opacity 0.1s" }}
                        />
                    </h1>

                    {/* Role */}
                    <p className="text-sky-400 font-mono text-sm tracking-[0.2em] uppercase mb-6">
                        Mobile Developer · Computer Engineering Graduate
                    </p>

                    {/* Description */}
                    <p className="text-slate-400 text-lg max-w-xl leading-relaxed mb-10">
                        Building production-ready mobile apps with React Native and Flutter.
                        Based in Tunisia — seeking a junior position or internship.
                    </p>

                    {/* Stats row — vertical dividers instead of border-y */}
                    <div className="flex gap-0 mb-12">
                        {[
                            { value: "19/20", label: "Final Project" },
                            { value: "16.70", label: "Year Average" },
                            { value: "IELTS 7.0", label: "C1 English" },
                            { value: "0%", label: "K6 Failure Rate" },
                        ].map((stat, i) => (
                            <div key={stat.label} className={`flex flex-col pr-8 ${i > 0 ? "pl-8 border-l border-slate-800" : ""}`}>
                                <span className="font-mono text-white text-xl font-bold">{stat.value}</span>
                                <span className="text-slate-500 text-xs mt-1">{stat.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 items-center">
                        <Button
                            asChild
                            className="bg-sky-500 hover:bg-sky-400 text-slate-900 font-semibold rounded-none px-6 h-11 transition-colors"
                        >
                            <a href="#projects">
                                View Projects
                                <ArrowUpRight className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            className="border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 rounded-none px-6 h-11 bg-transparent"
                        >
                            <a href="mailto:ayoub.rahmani.dev@gmail.com">
                                <Mail className="mr-2 h-4 w-4" />
                                Get in touch
                            </a>
                        </Button>

                        <div className="flex gap-3 ml-auto">
                            {[
                                { href: "https://github.com/ayoub-rahmani", icon: Github, label: "GitHub" },
                                { href: "https://www.linkedin.com/in/ayoub-rahmani-linkêdin", icon: Linkedin, label: "LinkedIn" },
                                { href: "https://www.youtube.com/@AyoubRahmaniDev", icon: Youtube, label: "YouTube" },
                            ].map(({ href, icon: Icon, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 transition-colors"
                                    aria-label={label}
                                >
                                    <Icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll hint */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
                <span className="font-mono text-xs tracking-widest">SCROLL</span>
                <div className="w-px h-12 bg-gradient-to-b from-slate-600 to-transparent" />
            </div>
        </section>
    )
}
