"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "Python", "Java", "Dart", "JavaScript", "PHP"],
      color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    },
    {
      title: "Frameworks & Mobile Development",
      skills: ["Flutter", "JavaFX"],
      color: "bg-green-500/10 text-green-400 border-green-500/20",
    },
    {
      title: "AI Tools & Assistants",
      skills: ["ChatGPT", "Claude", "DeepSeek", "Grok", "v0 AI"],
      color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    },
    {
      title: "Web Technologies",
      skills: ["HTML", "CSS", "JavaScript", "PHP"],
      color: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    },
    {
      title: "Productivity & Multimedia Tools",
      skills: ["Figma", "CapCut", "Excel", "Word", "PowerPoint"],
      color: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    },
  ]

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technologies & Tools</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              A comprehensive toolkit spanning programming languages, AI assistants, and creative tools that enable me
              to build innovative solutions efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-center">{category.title}</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="outline"
                        className={`${category.color} hover:scale-105 transition-transform cursor-default`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-card/30 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 gradient-text">AI-Enhanced Productivity</h3>
                <p className="text-muted-foreground max-w-4xl mx-auto text-pretty">
                  As an AI power user, I leverage cutting-edge tools like DeepSeek, ChatGPT, Claude, Grok, and v0 to
                  accelerate development, solve complex problems, and enhance productivity. This allows me to focus on
                  creative problem-solving while AI handles routine tasks and provides intelligent assistance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
