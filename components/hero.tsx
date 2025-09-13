"use client"

import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dots">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-blue-900/20" />

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "4s" }}
      />

      <div className="container mx-auto container-padding relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Headline */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-foreground/90">{t("hero.introduction")}</span>
          </h1>

          {/* Tagline */}
          <p
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            {t("hero.subtitle")}
          </p>

          {/* CTA Button */}
          <div className="mb-16 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <Button
              size="lg"
              className="gradient-primary text-white font-semibold px-10 py-6 text-lg hover:scale-105 transition-all duration-300 shadow-2xl glow-primary rounded-2xl"
              asChild
            >
              <Link href="#portfolio">
                {t("hero.viewWork")}
                <ArrowDown className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
