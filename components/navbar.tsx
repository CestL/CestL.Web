"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { Globe, Home, User, Award, Briefcase, FolderOpen, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en")
  }

  const navItems = [
    { href: "#home", label: t("home"), icon: Home },
    { href: "#about", label: t("about"), icon: User },
    { href: "#certificates", label: t("certificates"), icon: Award },
    { href: "#experience", label: t("experience"), icon: Briefcase },
    { href: "#portfolio", label: t("portfolio"), icon: FolderOpen },
    { href: "#contact", label: t("contact"), icon: Mail },
  ]

  return (
    <>
      {/* Desktop Compact Sidebar - Hidden on Home section, visible when scrolled */}
      <div
        className={cn(
          "fixed left-0 top-0 z-50 w-20 h-full bg-background/95 backdrop-blur-md border-r border-border/50 shadow-2xl transform transition-all duration-500 hidden lg:block",
          isScrolled ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col items-center py-6 space-y-6 h-full">
          {/* Navigation Links with Icons */}
          <div className="flex flex-col space-y-4 flex-1">
            {navItems.map((item) => {
              const IconComponent = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex flex-col items-center justify-center p-3 rounded-xl hover:bg-primary/10 transition-all duration-300 group relative"
                  title={item.label}
                >
                  <IconComponent className="h-5 w-5 text-foreground/80 group-hover:text-foreground transition-colors duration-300" />
                  <span className="text-xs font-medium text-foreground/60 group-hover:text-foreground/80 mt-1 text-center leading-tight">
                    {item.label}
                  </span>
                </Link>
              )
            })}
          </div>
          
          {/* Language Toggle at bottom */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="flex flex-col items-center justify-center p-3 rounded-xl hover:bg-primary/10 transition-all duration-300"
            title={`Switch to ${language === "en" ? "Spanish" : "English"}`}
          >
            <Globe className="h-5 w-5 text-foreground/80" />
            <span className="text-xs font-medium text-foreground/60 mt-1">
              {language.toUpperCase()}
            </span>
          </Button>
        </div>
      </div>

      {/* Mobile/Tablet Top Navigation - Icon-based */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 lg:hidden",
          isScrolled ? "bg-background/60 backdrop-blur-sm shadow-lg border-b border-border/30" : "bg-transparent"
        )}
      >
        <nav className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Mobile Navigation - Icon-based */}
            <div className="flex items-center space-x-1">
              {navItems.map((item) => {
                const IconComponent = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-center p-2 rounded-lg hover:bg-primary/10 transition-all duration-300 group relative"
                    title={item.label}
                  >
                    <IconComponent className="h-5 w-5 text-foreground/80 group-hover:text-foreground transition-colors duration-300" />
                  </Link>
                )
              })}
            </div>

            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-2 hover:bg-primary/10 transition-colors duration-300"
              aria-label={`Switch to ${language === "en" ? "Spanish" : "English"}`}
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium hidden sm:block">{language.toUpperCase()}</span>
            </Button>
          </div>
        </nav>
      </header>
    </>
  )
}