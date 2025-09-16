"use client"

import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Link from "next/link"
import { HeroLayout, ResponsiveHeading, ResponsiveText } from "./responsive-layout"

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

      <HeroLayout className="relative z-10">
        <div className="text-center">
          {/* Main Headline - Responsive Typography */}
          <ResponsiveHeading
            level={1}
            size="4xl"
            className="text-foreground/90 mb-6 sm:mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="break-words hyphens-auto">
              {t("hero.introduction")}
            </span>
          </ResponsiveHeading>

          {/* Tagline - Responsive with better line breaks */}
          <p
            className="text-muted-foreground mb-8 sm:mb-12 leading-relaxed font-light animate-fade-in-up max-w-5xl mx-auto"
            style={{ animationDelay: "0.4s" }}
          >
            <ResponsiveText size="lg" className="block">
              {t("hero.subtitle")}
            </ResponsiveText>
          </p>

          {/* CTA Button - Responsive sizing */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <Button
              size="lg"
              className="gradient-primary text-white font-semibold px-6 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 text-base sm:text-lg hover:scale-105 transition-all duration-300 shadow-2xl glow-primary rounded-2xl"
              asChild
            >
              <Link href="#portfolio">
                {t("hero.viewWork")}
                <ArrowDown className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </HeroLayout>
    </section>
  )
}
