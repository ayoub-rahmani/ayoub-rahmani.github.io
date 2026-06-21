"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Github, Linkedin, MapPin, Youtube, Globe } from "lucide-react"

export function Contact() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
            { threshold: 0.1 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    const links = [
        {
            icon: Mail,
            label: "Email",
            value: "ayoub.rahmani.dev@gmail.com",
            href: "mailto:ayoub.rahmani.dev@gmail.com",
        },
        {
            icon: Github,
            label: "GitHub",
            value: "ayoub-rahmani",
            href: "https://github.com/ayoub-rahmani",
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            value: "ayoub-rahmani",
            href: "https://www.linkedin.com/in/ayoub-rahmani-linkêdin",
        },
        {
            icon: Youtube,
            label: "YouTube",
            value: "@ayoub-rahmani",
            href: "https://www.youtube.com/@AyoubRahmaniDev",
        },
        {
            icon: Globe,
            label: "Website",
            value: "ayoub-rahmani.github.io",
            href: "https://ayoub-rahmani.github.io",
        },
    ]

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0d0d14]"
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "none" : "translateY(32px)", transition: "all 0.7s ease" }}
        >
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-4 mb-16">
                    <span className="font-mono text-sky-400 text-xs tracking-widest">04</span>
                    <h2 className="font-mono text-xs tracking-widest text-slate-400 uppercase">Contact</h2>
                    <div className="flex-1 h-px bg-slate-800" />
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left */}
                    <div>
                        <h3 className="text-white text-3xl font-bold mb-4 leading-snug">
                            Let's build
                            <br />
                            something together.
                        </h3>
                        <p className="text-slate-400 leading-relaxed mb-8">
                            I'm a Computer Engineering graduate based in Tunisia, open to junior developer positions
                            and internships in mobile or full-stack development. If you're working on something interesting,
                            I'd like to hear about it.
                        </p>

                        <div className="flex items-center gap-3 text-slate-500 text-sm mb-6">
                            <MapPin className="h-4 w-4 text-sky-400" />
                            <span>Medenine, Tunisia · +216 92 031 886</span>
                        </div>

                        <a
                            href="mailto:ayoub.rahmani.dev@gmail.com"
                            className="inline-flex items-center gap-3 bg-sky-500 hover:bg-sky-400 text-slate-900 font-semibold px-6 py-3 font-mono text-sm transition-colors"
                        >
                            <Mail className="h-4 w-4" />
                            Send me an email
                        </a>
                    </div>

                    {/* Right: links */}
                    <div className="border border-slate-800 divide-y divide-slate-800">
                        {links.map(({ icon: Icon, label, value, href }) => (
                            <a
                                key={label}
                                href={href}
                                target={href.startsWith("mailto") ? undefined : "_blank"}
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-5 hover:bg-slate-900/50 transition-colors group"
                            >
                                <div className="w-9 h-9 border border-slate-800 flex items-center justify-center flex-shrink-0 group-hover:border-sky-500/40 transition-colors">
                                    <Icon className="h-4 w-4 text-slate-500 group-hover:text-sky-400 transition-colors" />
                                </div>
                                <div>
                                    <div className="font-mono text-xs text-slate-600 uppercase tracking-wider">{label}</div>
                                    <div className="text-slate-300 text-sm group-hover:text-white transition-colors">{value}</div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-20 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="font-mono text-slate-700 text-xs">© 2026 Ayoub Rahmani</span>
                    <span className="font-mono text-slate-700 text-xs">Built with Next.js · Hosted on GitHub Pages</span>
                </div>
            </div>
        </section>
    )
}
