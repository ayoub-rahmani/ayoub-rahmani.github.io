"use client"

import { useEffect, useRef, useState } from "react"

export function About() {
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

    const experience = [
        {
            period: "Feb – Jun 2026",
            role: "Mobile Developer Intern",
            company: "MedCity Connect",
            location: "Sfax, Tunisia",
            tag: "Startup Act Certified · Healthtech",
            points: [
                "Built a production React Native app for doctors centralizing appointments, patient records, and secure messaging.",
                "Integrated Jitsi Meet SDK for encrypted video teleconsultation and deployed BioMistral 7B via FastAPI + llama.cpp as an embedded AI clinical assistant.",
                "Delivered on time with K6 load test results: p(95) at 282ms, 0% failure rate.",
                "Final grade: 19/20 — highest score in graduating class.",
            ],
            stack: ["React Native", "TypeScript", "NestJS", "PostgreSQL", "Jitsi SDK", "BioMistral 7B"],
        },
    ]

    const education = [
        {
            period: "2022 – 2025",
            degree: "B.Sc. Computer Engineering — Software & Information Systems (GLSI)",
            school: "Faculty of Sciences of Bizerte · University of Carthage",
            note: "Year Average: 16.70/20 · Ranked 3rd in class · Final Project: 19/20 Excellent",
        },
        {
            period: "2023",
            degree: "High School Diploma — Mathematics, Honours (Mention Bien)",
            school: "Pioneer High School of Medenine",
            note: "Average: 15.81/20",
        },
    ]

    const activities = [
        "Enactus — Project Team Co-Leader",
        "Google Developer Groups (GDG) — Event Organizer",
        "Art of Code Club — Competitive Programming",
        "Open Source — GitHub Contributor",
    ]

    return (
        <section
            id="about"
            ref={sectionRef}
            className="py-24 px-4 sm:px-6 lg:px-8"
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "none" : "translateY(32px)", transition: "all 0.7s ease" }}
        >
            <div className="max-w-5xl mx-auto">
                {/* Section label */}
                <div className="flex items-center gap-4 mb-16">
                    <span className="font-mono text-sky-400 text-xs tracking-widest">01</span>
                    <h2 className="font-mono text-xs tracking-widest text-slate-400 uppercase">About</h2>
                    <div className="flex-1 h-px bg-slate-800" />
                </div>

                <div className="grid lg:grid-cols-[1fr_340px] gap-16">
                    {/* Left: bio + experience */}
                    <div>
                        <p className="text-slate-300 text-lg leading-relaxed mb-12 max-w-prose">
                            I'm a Computer Engineering graduate from the University of Carthage, Tunisia, specializing in mobile development.
                            I build cross-platform apps with React Native and Flutter — from database design to production deployment.
                            Comfortable across the full stack, with hands-on experience integrating AI models into real mobile workflows.
                        </p>

                        {/* Experience */}
                        <h3 className="font-mono text-xs tracking-widest text-slate-500 uppercase mb-8">Experience</h3>
                        <div className="space-y-10">
                            {experience.map((exp, i) => (
                                <div key={i} className="relative pl-6 border-l border-slate-800">
                                    <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-sky-400" />
                                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                                        <span className="font-mono text-sky-400 text-sm">{exp.period}</span>
                                        <span className="text-white font-semibold">{exp.role}</span>
                                    </div>
                                    <div className="text-slate-400 text-sm mb-1">{exp.company} · {exp.location}</div>
                                    <div className="font-mono text-xs text-slate-600 mb-4">{exp.tag}</div>
                                    <ul className="space-y-2 mb-4">
                                        {exp.points.map((pt, j) => (
                                            <li key={j} className="text-slate-400 text-sm flex gap-3">
                                                <span className="text-sky-400/60 mt-1 flex-shrink-0">›</span>
                                                {pt}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.stack.map((s) => (
                                            <span key={s} className="font-mono text-xs text-slate-500 border border-slate-800 px-2 py-0.5">
                        {s}
                      </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Education */}
                        <h3 className="font-mono text-xs tracking-widest text-slate-500 uppercase mt-14 mb-8">Education</h3>
                        <div className="space-y-8">
                            {education.map((edu, i) => (
                                <div key={i} className="relative pl-6 border-l border-slate-800">
                                    <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-sky-400 bg-[#0a0a0f]" />
                                    <span className="font-mono text-sky-400 text-sm">{edu.period}</span>
                                    <div className="text-white font-semibold mt-1">{edu.degree}</div>
                                    <div className="text-slate-400 text-sm mt-0.5">{edu.school}</div>
                                    <div className="font-mono text-xs text-slate-600 mt-1">{edu.note}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: sidebar */}
                    <div className="space-y-8">
                        {/* Certifications */}
                        <div className="border border-slate-800 p-6">
                            <h3 className="font-mono text-xs tracking-widest text-slate-500 uppercase mb-5">Certifications</h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="text-white text-sm font-semibold">IELTS Academic</div>
                                    <div className="text-slate-400 text-xs mt-0.5">British Council / IDP · May 2026</div>
                                    <div className="font-mono text-sky-400 text-xs mt-1">Band 7.0 · CEFR C1</div>
                                    <div className="font-mono text-slate-600 text-xs">L:8.5 R:7.5 W:6.5 S:6.0</div>
                                </div>
                                <div className="border-t border-slate-800 pt-4">
                                    <div className="text-white text-sm font-semibold">Microsoft Office Specialist</div>
                                    <div className="text-slate-400 text-xs mt-0.5">Certiport · Word, Excel, PowerPoint</div>
                                    <div className="font-mono text-sky-400 text-xs mt-1">900+ / 1000</div>
                                </div>
                            </div>
                        </div>

                        {/* Languages */}
                        <div className="border border-slate-800 p-6">
                            <h3 className="font-mono text-xs tracking-widest text-slate-500 uppercase mb-5">Languages</h3>
                            <div className="space-y-2.5">
                                {[
                                    { lang: "Arabic", level: "Native" },
                                    { lang: "French", level: "Fluent" },
                                    { lang: "English", level: "C1 · IELTS 7.0" },
                                    { lang: "German", level: "Basic (A2)" },
                                ].map(({ lang, level }) => (
                                    <div key={lang} className="flex justify-between items-center">
                                        <span className="text-slate-300 text-sm">{lang}</span>
                                        <span className="font-mono text-xs text-slate-500">{level}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Activities */}
                        <div className="border border-slate-800 p-6">
                            <h3 className="font-mono text-xs tracking-widest text-slate-500 uppercase mb-5">Activities</h3>
                            <ul className="space-y-2.5">
                                {activities.map((a) => (
                                    <li key={a} className="text-slate-400 text-xs flex gap-2">
                                        <span className="text-sky-400 flex-shrink-0">›</span>
                                        {a}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
