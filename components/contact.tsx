"use client"

import { useState } from "react"
import { useLanguage } from "./language-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Mail, Linkedin, Copy, Check, Send, MessageCircle } from "lucide-react"

export default function Contact() {
  const { t } = useLanguage()
  const [showEmail, setShowEmail] = useState(false)
  const [copied, setCopied] = useState(false)
  const email = "pinedalamp@gmail.com"

  const handleEmailClick = () => {
    setShowEmail(true)
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: t("contact.email"),
      value: email,
      action: showEmail ? handleCopyEmail : handleEmailClick,
      display: showEmail ? email : t("contact.email"),
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: t("contact.github"),
      value: "github.com/CestL",
      href: "https://github.com/CestL",
      gradient: "from-gray-600 to-gray-800",
      bgGradient: "from-gray-600/10 to-gray-800/10",
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: t("contact.linkedin"),
      value: "linkedin.com/in/cestl",
      href: "https://www.linkedin.com/in/cestl/",
      gradient: "from-blue-600 to-blue-800",
      bgGradient: "from-blue-600/10 to-blue-800/10",
    },
  ]

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{t("contact.title")}</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
              {t("contact.subtitle")}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <MessageCircle className="h-8 w-8 text-primary" />
                  {t("contact.getInTouch")}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed font-light">{t("contact.description")}</p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Card
                    key={index}
                    className="border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={method.action}
                  >
                    {/* Background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${method.bgGradient} opacity-50`} />

                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r ${method.gradient} shadow-lg`}
                        >
                          <div className="text-white">{method.icon}</div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg">{method.label}</h4>
                          <p className="text-sm text-muted-foreground">{method.display || method.value}</p>
                        </div>
                        {method.label === t("contact.email") && showEmail && (
                          <div className="text-primary">
                            {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="animate-slide-in-right">
              <Card className="border-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-pink-500/10 h-full backdrop-blur-sm overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-dots opacity-20" />

                <CardHeader className="text-center pb-6 relative z-10">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-primary mb-6 shadow-2xl glow-primary">
                    <Send className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-3xl font-bold">{t("contact.readyToStart")}</CardTitle>
                </CardHeader>

                <CardContent className="text-center space-y-8 relative z-10">
                  <p className="text-lg text-muted-foreground font-light leading-relaxed">
                    {t("contact.readyDescription")}
                  </p>

                  <div className="space-y-6">
                    <Button
                      size="lg"
                      className="w-full gradient-secondary text-white font-semibold hover:scale-105 transition-all duration-300 shadow-xl glow-secondary px-8 py-6 text-lg rounded-2xl"
                      asChild
                    >
                      <a href="mailto:pinedalamp@gmail.com?subject=Let's work together!">
                        <Mail className="h-5 w-5 mr-2" />
                        {t("contact.sendMessage")}
                      </a>
                    </Button>

                    <div className="flex justify-center space-x-4">
                      <Button
                        variant="ghost"
                        size="lg"
                        className="hover:bg-primary/10 hover:scale-110 transition-all duration-300 w-14 h-14 rounded-2xl"
                        asChild
                      >
                        <a
                          href="https://github.com/CestL"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub Profile"
                        >
                          <Github className="h-6 w-6" />
                        </a>
                      </Button>

                      <Button
                        variant="ghost"
                        size="lg"
                        className="hover:bg-primary/10 hover:scale-110 transition-all duration-300 w-14 h-14 rounded-2xl"
                        asChild
                      >
                        <a
                          href="https://www.linkedin.com/in/cestl/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn Profile"
                        >
                          <Linkedin className="h-6 w-6" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-purple-500/10 rounded-full blur-xl animate-float" />
                  <div
                    className="absolute bottom-4 left-4 w-16 h-16 bg-blue-500/10 rounded-full blur-xl animate-float"
                    style={{ animationDelay: "3s" }}
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
