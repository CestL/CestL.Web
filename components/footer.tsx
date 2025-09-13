"use client"

import { useLanguage } from "./language-provider"
import { Github, Linkedin, Mail, Heart, Code } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border/50 py-12">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <Link href="/" className="text-2xl font-bold text-gradient">
                Luis Pineda
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed font-light">{t("footer.description")}</p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">{t("footer.quickLinks")}</h3>
              <nav className="flex flex-col space-y-2">
                {[
                  { href: "#about", label: t("about") },
                  { href: "#certificates", label: t("certificates") },
                  { href: "#experience", label: t("experience") },
                  { href: "#portfolio", label: t("portfolio") },
                  { href: "#contact", label: t("contact") },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm font-light"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">{t("footer.connect")}</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/CestL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-muted hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/cestl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-muted hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:pinedalamp@gmail.com"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-muted hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm font-light">
              &copy; {currentYear} Luis Pineda. {t("footer.rights")}.
            </p>
            <p className="text-muted-foreground text-sm flex items-center font-light">
              {t("footer.madeWith")} <Heart className="h-4 w-4 mx-1 text-red-400" /> {t("footer.and")}{" "}
              <Code className="h-4 w-4 mx-1 text-primary" /> {t("footer.using")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
