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
        },
        {
            label: "Backend & APIs",
            items: ["NestJS", "Node.js", "FastAPI", "REST", "TypeORM", "Swagger"],
        },
        {
            label: "Databases",
            items: ["PostgreSQL", "Firebase", "MySQL", "SQLite", "Firestore"],
        },
        {
            label: "AI & Integrations",
            items: ["BioMistral 7B", "llama.cpp", "Jitsi Meet SDK", "FastAPI inference"],
        },
        {
            label: "Tools & Methods",
            items: ["Git", "Figma", "Postman", "K6", "Jira", "Scrum", "Docker", "BurpSuite"],
        },
        {
            label: "Other Languages",
            items: ["Java", "JavaFX", "Python", "C", "PHP", "C++"],
        },
    ]

    const strengths = [
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
            desc: "Translating designs into pixel-perfect code — responsive interfaces, animations, multilingual and RTL support.",
        },
        {
            title: "Agile delivery",
            desc: "Scrum, Jira tracking, Postman API validation, and load testing from day one.",
        },
    ]

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
                            <h3 className="font-mono text-xs tracking-widest uppercase mb-4 text-sky-400">
                                {cat.label}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {cat.items.map((item) => (
                                    <span
                                        key={item}
                                        className="text-xs px-2.5 py-1 border font-mono text-sky-400 border-sky-500/20 bg-sky-500/5"
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
                        {strengths.map((item, i) => (
                            <div key={item.title} className="flex gap-3">
                                <span className="font-mono text-sky-400/40 text-xs mt-0.5 flex-shrink-0 w-5">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <div>
                                    <div className="text-white text-sm font-semibold mb-1.5">{item.title}</div>
                                    <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
