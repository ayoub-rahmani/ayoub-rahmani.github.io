"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, MapPin, Calendar } from "lucide-react"

export function Contact() {
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

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "ayoub.rahmani.dev@gmail.com",
      href: "mailto:ayoub.rahmani.dev@gmail.com",
      color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "ayoub-rahmani",
      href: "https://github.com/ayoub-rahmani",
      color: "bg-gray-500/10 text-gray-400 border-gray-500/20",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "ayoub-rahmani-linkêdin",
      href: "https://www.linkedin.com/in/ayoub-rahmani-linkêdin",
      color: "bg-blue-600/10 text-blue-500 border-blue-600/20",
    },
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Connect</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Open to new opportunities and collaborations! Always excited to learn and take on new challenges. Let's
              discuss how we can work together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className={`group hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm border-border/50 ${method.color}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <method.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{method.title}</h3>
                  <Button variant="link" asChild className="p-0 h-auto text-muted-foreground hover:text-foreground">
                    <a href={method.href} target="_blank" rel="noopener noreferrer">
                      {method.value}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-card/30 backdrop-blur-sm border-border/50">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">Ready to Collaborate?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-pretty">
                Whether you have a project in mind, want to discuss opportunities, or just want to connect, I'd love to
                hear from you. Let's build something amazing together!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <Button size="lg" asChild>
                  <a href="mailto:ayoub.rahmani.dev@gmail.com">
                    <Mail className="h-5 w-5 mr-2" />
                    Get In Touch
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://github.com/ayoub-rahmani" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5 mr-2" />
                    View My Work
                  </a>
                </Button>
              </div>

              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Tunisia</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Available for opportunities</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <footer className="mt-16 text-center text-sm text-muted-foreground">
            <p>© 2025 Ayoub Rahmani. Built with Next.js and hosted on GitHub Pages.</p>
            <p className="mt-2">
              <span className="gradient-text font-semibold">Always learning, always growing</span> 🚀
            </p>
          </footer>
        </div>
      </div>
    </section>
  )
}
