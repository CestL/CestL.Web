"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { href: "#home", label: t("home") },
    { href: "#about", label: t("about") },
    { href: "#certificates", label: t("certificates") },
    { href: "#experience", label: t("experience") },
    { href: "#portfolio", label: t("portfolio") },
    { href: "#contact", label: t("contact") },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "glass shadow-2xl border-b border-border/50" : "bg-transparent",
      )}
    >
      <nav className="container mx-auto container-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-gradient hover:scale-105 transition-transform duration-300"
            aria-label="Home"
          >
            Luis Pineda
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-all duration-300 relative group"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="hidden sm:flex items-center space-x-2 hover:bg-primary/10 transition-colors duration-300"
              aria-label={`Switch to ${language === "en" ? "Spanish" : "English"}`}
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="lg:hidden hover:bg-primary/10 transition-colors duration-300"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={cn(
            "lg:hidden absolute left-0 right-0 top-full glass border-t border-border/50 transition-all duration-500 ease-in-out",
            isMenuOpen ? "max-h-96 opacity-100 visible" : "max-h-0 opacity-0 invisible overflow-hidden",
          )}
        >
          <div className="container mx-auto container-padding py-6">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-base font-medium text-foreground/80 hover:text-foreground transition-colors duration-300 py-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Language Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="sm:hidden self-start mt-4 hover:bg-primary/10 transition-colors duration-300"
              >
                <Globe className="h-4 w-4 mr-2" />
                {language === "en" ? "Español" : "English"}
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
