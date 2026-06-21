"use client"

import { useEffect, useRef, useState } from "react"

export function Skills() {
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

    const categories = [
        {
            label: "Mobile",
            items: ["React Native", "Flutter", "TypeScript", "Dart", "Android", "iOS"],
            accent: "sky",
        },
        {
            label: "Backend & APIs",
            items: ["NestJS", "Node.js", "FastAPI", "REST", "TypeORM", "Swagger"],
            accent: "violet",
        },
        {
            label: "Databases",
            items: ["PostgreSQL", "Firebase", "MySQL", "SQLite", "Firestore"],
            accent: "emerald",
        },
        {
            label: "AI & Integrations",
            items: ["BioMistral 7B", "llama.cpp", "Jitsi Meet SDK", "FastAPI inference"],
            accent: "amber",
        },
        {
            label: "Tools & Methods",
            items: ["Git", "Figma", "Postman", "K6", "Jira", "Scrum", "Docker", "BurpSuite"],
            accent: "rose",
        },
        {
            label: "Other Languages",
            items: ["Java", "JavaFX", "Python", "C", "PHP", "C++"],
            accent: "slate",
        },
    ]

    const accentMap: Record<string, string> = {
        sky: "text-sky-400 border-sky-500/20 bg-sky-500/5",
        violet: "text-violet-400 border-violet-500/20 bg-violet-500/5",
        emerald: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
        amber: "text-amber-400 border-amber-500/20 bg-amber-500/5",
        rose: "text-rose-400 border-rose-500/20 bg-rose-500/5",
        slate: "text-slate-400 border-slate-600/40 bg-slate-500/5",
    }

    const labelMap: Record<string, string> = {
        sky: "text-sky-400",
        violet: "text-violet-400",
        emerald: "text-emerald-400",
        amber: "text-amber-400",
        rose: "text-rose-400",
        slate: "text-slate-400",
    }

    return (
        <section
            id="skills"
            ref={sectionRef}
            className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0d0d14]"
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "none" : "translateY(32px)", transition: "all 0.7s ease" }}
        >
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-4 mb-16">
                    <span className="font-mono text-sky-400 text-xs tracking-widest">02</span>
                    <h2 className="font-mono text-xs tracking-widest text-slate-400 uppercase">Skills</h2>
                    <div className="flex-1 h-px bg-slate-800" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-800">
                    {categories.map((cat) => (
                        <div key={cat.label} className="bg-[#0d0d14] p-6 hover:bg-slate-900/50 transition-colors">
                            <h3 className={`font-mono text-xs tracking-widest uppercase mb-4 ${labelMap[cat.accent]}`}>
                                {cat.label}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {cat.items.map((item) => (
                                    <span
                                        key={item}
                                        className={`text-xs px-2.5 py-1 border font-mono ${accentMap[cat.accent]}`}
                                    >
                    {item}
                  </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* What I do well */}
                <div className="mt-16 border border-slate-800 p-8">
                    <h3 className="font-mono text-xs tracking-widest text-slate-500 uppercase mb-8">What I do well</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Mobile-first thinking",
                                desc: "Production React Native & Flutter apps — clean architecture, typed APIs, and polished UI across Android and iOS.",
                            },
                            {
                                title: "Backend integration",
                                desc: "NestJS APIs, PostgreSQL with TypeORM, REST design, Swagger docs, and K6 load testing.",
                            },
                            {
                                title: "AI deployment",
                                desc: "Running and integrating LLMs locally — BioMistral 7B via FastAPI and llama.cpp inside a mobile workflow.",
                            },
                            {
                                title: "Real-time & video",
                                desc: "Jitsi Meet SDK, Firebase real-time sync, push notifications, and live chat.",
                            },
                            {
                                title: "UI from Figma",
                                desc: "Translating designs into code — responsive interfaces, animations, multilingual and RTL support.",
                            },
                            {
                                title: "Agile delivery",
                                desc: "Scrum across 6 sprints, 4 releases, Jira tracking, and Postman API validation from day one.",
                            },
                        ].map((item) => (
                            <div key={item.title}>
                                <div className="text-white text-sm font-semibold mb-1.5">{item.title}</div>
                                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
