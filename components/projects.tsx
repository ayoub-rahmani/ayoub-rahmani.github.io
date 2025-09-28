"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Car, Truck, Hospital, CreditCard } from "lucide-react"

export function Projects() {
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

  const projects = [
    {
      icon: Car,
      title: "Auto-École Manager",
      description:
        "Comprehensive driving school management system with integrated maps and email recovery functionality. Features student tracking, lesson scheduling, and administrative tools.",
      tech: ["Java", "JavaFX", "MySQL"],
      github: "https://github.com/ayoub-rahmani/Driving_school_Pro",
      color: "bg-blue-500/10 border-blue-500/20",
    },
    {
      icon: Truck,
      title: "Deliverini TN",
      description:
        "Real-time delivery application with live tracking capabilities. Connects customers with delivery services through an intuitive mobile interface.",
      tech: ["Flutter", "Firebase", "Firestore"],
      github: "https://github.com/ayoub-rahmani/Deliverini_TN",
      color: "bg-green-500/10 border-green-500/20",
    },
    {
      icon: Hospital,
      title: "Radiology Center",
      description:
        "Medical facility management system with PDF reporting capabilities. Streamlines patient records, appointment scheduling, and report generation.",
      tech: ["Java", "PDF Generation", "Data Management"],
      github: "https://github.com/ayoub-rahmani/Radiology_Center",
      color: "bg-red-500/10 border-red-500/20",
    },
    {
      icon: CreditCard,
      title: "Smart Checkout",
      description:
        "Smooth mobile checkout experience with elegant animations and user-friendly interface. Optimized for quick and secure transactions.",
      tech: ["Flutter", "Dart", "Animations"],
      github: "https://github.com/ayoub-rahmani/Smart_Checkout",
      color: "bg-purple-500/10 border-purple-500/20",
    },
  ]

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              A showcase of my work spanning mobile applications, desktop software, and web solutions. Each project
              demonstrates different aspects of my technical skills and problem-solving approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm border-border/50 ${project.color}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <project.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-pretty">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild className="group/btn bg-transparent">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild className="group/btn">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        View Project
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="bg-card/30 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">More Projects Coming Soon</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-pretty">
                  I'm constantly working on new projects and exploring innovative technologies. Follow my GitHub to stay
                  updated with my latest work and contributions.
                </p>
                <Button variant="outline" asChild>
                  <a href="https://github.com/ayoub-rahmani" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View All Projects
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
