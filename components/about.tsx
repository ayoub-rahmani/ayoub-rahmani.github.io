"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Code, Lightbulb, Rocket } from "lucide-react"

export function About() {
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

  const highlights = [
    {
      icon: Brain,
      title: "AI Power User",
      description:
        "Highly proficient in leveraging cutting-edge AI tools (DeepSeek, ChatGPT, Claude, Grok, v0) to accelerate development and solve complex problems.",
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description:
        "From mobile apps with Flutter to desktop applications with JavaFX, I love building complete solutions.",
    },
    {
      icon: Lightbulb,
      title: "Creative Problem Solver",
      description:
        "I thrive on turning innovative ideas into functional, user-friendly applications that make a difference.",
    },
    {
      icon: Rocket,
      title: "Eager Learner",
      description:
        "Incredibly excited to learn new technologies and take on challenging projects. I love stepping out of my comfort zone!",
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              I'm currently pursuing a degree in{" "}
              <span className="text-primary font-semibold">Computer Engineering (GLSI)</span> at Faculté des Sciences de
              Bizerte. I love turning ideas into reality with code, focusing on mobile apps and desktop software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-pretty">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="bg-card/30 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">What I Bring to the Table</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Efficient Development</h4>
                    <p className="text-sm text-muted-foreground">
                      Expert at using AI assistants to write cleaner code, debug faster, and learn new technologies
                      quickly.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Full-Stack Capabilities</h4>
                    <p className="text-sm text-muted-foreground">
                      From mobile apps with Flutter to desktop applications with JavaFX and web technologies.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Growth Mindset</h4>
                    <p className="text-sm text-muted-foreground">
                      Highly motivated to learn new technologies and tackle unfamiliar challenges with enthusiasm.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
