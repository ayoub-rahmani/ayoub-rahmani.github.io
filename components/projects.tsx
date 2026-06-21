"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, Github, Lock, Youtube } from "lucide-react"

export function Projects() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
            { threshold: 0.05 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    const featured = [
        {
            name: "MedCity",
            subtitle: "All-in-One Clinical Management App · PFE",
            period: "Feb – Jun 2026",
            description:
                "Production React Native app for doctors — centralizing appointments, patient records, consultations, secure messaging, and video teleconsultation via Jitsi. Embedded AI clinical assistant powered by BioMistral 7B. K6 load test: p(95) at 282ms, 0% failure rate.",
            stack: ["React Native", "TypeScript", "NestJS", "PostgreSQL", "TypeORM", "Jitsi SDK", "BioMistral 7B"],
            github: null,
            youtube: "https://www.youtube.com/watch?v=kbEGEfk9CkQ",
            private: true,
            privateNote: "Company NDA — MedCity Connect",
            highlight: "19/20 — Highest in graduating class",
        },
        {
            name: "Shadow Weaver",
            subtitle: "Mobile 2D Platformer",
            period: "Apr 2026",
            description:
                "A game built around one mechanic: the player never controls the character — they control the light. Shadows cast by floating obstacles become platforms. The player repositions a light source to sculpt shadow geometry in real time, building paths for an auto-running character.",
            stack: ["Flutter", "Dart", "Flame Engine"],
            github: null,
            youtube: null,
            private: true,
            privateNote: "Pending Google Play Store release",
            highlight: null,
        },
    ]

    const projects = [
        {
            name: "Radiology Center",
            period: "Oct 2024",
            description:
                "Terminal-based system managing radiology exams, appointments, and billing. Automated PDF report generation — cut manual reporting work by 45%. Comprehensive patient search and exam history tracking.",
            stack: ["Java", "JavaFX", "PDF Generation"],
            github: "https://github.com/ayoub-rahmani/Radiology_Center",
            youtube: null,
        },
        {
            name: "Auto-École Pro",
            period: "Feb 2025",
            description:
                "Enterprise driving school management system. Intelligent scheduling with multi-entity conflict detection, OpenStreetMap integration, PDF reports, role-based access control, and a MySQL backend with 17+ modules.",
            stack: ["Java", "JavaFX", "MySQL"],
            github: "https://github.com/ayoub-rahmani/Driving_school_Pro",
            youtube: "https://www.youtube.com/watch?v=gXRtK-GG6nI",
        },
        {
            name: "Deliverini TN",
            period: "May 2025",
            description:
                "Cross-platform food delivery app for Android and iOS. Real-time order tracking, Firebase Firestore sync, live chat between customers and restaurants. Bilingual Arabic RTL/French interface at 60fps.",
            stack: ["Flutter", "Firebase", "Dart"],
            github: "https://github.com/ayoub-rahmani/Deliverini_TN",
            youtube: "https://www.youtube.com/watch?v=4YPkkX-7DxA",
        },
        {
            name: "Smart Checkout",
            period: "Aug 2025",
            description:
                "Mobile checkout app integrated with Instagram for managing product catalogs from social media. Real-time analytics dashboard with revenue tracking, sales trends, and automated stock alerts.",
            stack: ["Flutter", "Dart"],
            github: "https://github.com/ayoub-rahmani/Smart_Checkout",
            youtube: null,
        },
        {
            name: "Snake Battle Arena",
            period: "Nov 2025",
            description:
                "Real-time multiplayer Snake for up to 4 players over a custom TCP client-server. Pre-game lobby, server-side collision detection, live game-state broadcasting, and JavaFX rendering.",
            stack: ["Java", "JavaFX", "TCP Sockets"],
            github: null,
            youtube: null,
        },
    ]

    return (
        <section
            id="projects"
            ref={sectionRef}
            className="py-24 px-4 sm:px-6 lg:px-8"
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "none" : "translateY(32px)", transition: "all 0.7s ease" }}
        >
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-4 mb-16">
                    <span className="font-mono text-sky-400 text-xs tracking-widest">03</span>
                    <h2 className="font-mono text-xs tracking-widest text-slate-400 uppercase">Projects</h2>
                    <div className="flex-1 h-px bg-slate-800" />
                </div>

                {/* Featured */}
                <div className="grid md:grid-cols-2 gap-px bg-slate-800 mb-px">
                    {featured.map((p) => (
                        <div key={p.name} className="bg-[#0a0a0f] p-8 flex flex-col">
                            <div className="flex items-start justify-between mb-2">
                                <div>
                                    <h3 className="text-white text-xl font-bold">{p.name}</h3>
                                    <p className="text-sky-400 text-xs font-mono mt-0.5">{p.subtitle}</p>
                                </div>
                                <div className="flex items-center gap-2 ml-4 flex-shrink-0">
                                    {p.youtube && (
                                        <a
                                            href={p.youtube}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 font-mono text-xs text-rose-400 hover:text-rose-300 border border-rose-500/20 hover:border-rose-400/40 px-2 py-1 transition-colors"
                                        >
                                            <Youtube className="h-3 w-3" />
                                            Demo
                                        </a>
                                    )}
                                    <span className="font-mono text-slate-600 text-xs">{p.period}</span>
                                </div>
                            </div>

                            {p.private && (
                                <div className="flex items-center gap-1.5 text-slate-600 text-xs font-mono mb-3">
                                    <Lock className="h-3 w-3" />
                                    {p.privateNote}
                                </div>
                            )}

                            <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">{p.description}</p>

                            {p.highlight && (
                                <div className="border-l-2 border-sky-400 pl-3 mb-6">
                                    <span className="text-sky-400 text-xs font-mono">{p.highlight}</span>
                                </div>
                            )}

                            <div className="flex flex-wrap gap-2">
                                {p.stack.map((s) => (
                                    <span key={s} className="font-mono text-xs text-slate-500 border border-slate-800 px-2 py-0.5">
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Other projects — 2-col grid, no empty cells */}
                <div className="grid md:grid-cols-2 gap-px bg-slate-800">
                    {projects.map((p) => (
                        <div key={p.name} className="bg-[#0a0a0f] p-6 flex flex-col hover:bg-slate-900/40 transition-colors group">
                            <div className="flex items-start justify-between mb-1">
                                <h3 className="text-white font-semibold">{p.name}</h3>
                                <div className="flex items-center gap-2 ml-2 flex-shrink-0">
                                    {p.youtube && (
                                        <a
                                            href={p.youtube}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-slate-600 hover:text-rose-400 transition-colors"
                                            aria-label="Watch demo on YouTube"
                                        >
                                            <Youtube className="h-4 w-4" />
                                        </a>
                                    )}
                                    {p.github ? (
                                        <a
                                            href={p.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-slate-600 hover:text-sky-400 transition-colors"
                                            aria-label="View on GitHub"
                                        >
                                            <Github className="h-4 w-4" />
                                        </a>
                                    ) : (
                                        <Lock className="h-3.5 w-3.5 text-slate-700" />
                                    )}
                                </div>
                            </div>
                            <span className="font-mono text-slate-600 text-xs mb-3">{p.period}</span>
                            <p className="text-slate-500 text-xs leading-relaxed mb-4 flex-1">{p.description}</p>
                            <div className="flex flex-wrap gap-1.5">
                                {p.stack.map((s) => (
                                    <span key={s} className="font-mono text-xs text-slate-600 border border-slate-800 px-1.5 py-0.5">
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer links */}
                <div className="mt-10 flex items-center justify-end">
                    <a
                        href="https://github.com/ayoub-rahmani"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-xs text-slate-500 hover:text-sky-400 transition-colors"
                    >
                        <Github className="h-3.5 w-3.5" />
                        View all on GitHub
                        <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                </div>
            </div>
        </section>
    )
}
