"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl animate-float" />
      <div
        className="absolute bottom-32 right-16 w-16 h-16 bg-blue-500/10 rounded-full blur-xl animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 right-20 w-12 h-12 bg-purple-500/10 rounded-full blur-xl animate-float"
        style={{ animationDelay: "4s" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          {/* Profile Picture */}
          <div className="flex justify-center mb-8">
            <Avatar className="w-32 h-32 border-4 border-primary/20 shadow-xl">
              <AvatarImage src="/placeholder-user.jpg" alt="Ayoub Rahmani" />
              <AvatarFallback className="text-2xl">AR</AvatarFallback>
            </Avatar>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            Hi there, I'm <span className="gradient-text">Ayoub Rahmani</span>
            <span className="animate-pulse">👋</span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            A passionate <span className="text-primary font-semibold">Computer Engineering student</span> from Tunisia,
            turning ideas into reality with code and AI-enhanced development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="group" asChild>
              <a href="#projects">
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>

            <div className="flex gap-4">
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com/ayoub-rahmani" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://www.linkedin.com/in/ayoub-rahmani-linkêdin" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="mailto:ayoub.rahmani.dev@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="text-sm text-muted-foreground">
            <p>🎓 Computer Engineering (GLSI) • 🤖 AI Power User • 🚀 Always Learning</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}