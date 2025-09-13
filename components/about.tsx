"use client"

import { useLanguage } from "./language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Code2, Brain, Zap, Target, Lightbulb } from "lucide-react"

export default function About() {
  const { t } = useLanguage()

  const skills = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: t("skills.frontendDev"),
      description: t("skills.frontendDesc"),
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: t("skills.aiIntegration"),
      description: t("skills.aiDesc"),
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: t("skills.backendBasics"),
      description: t("skills.backendDesc"),
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: t("skills.userFocused"),
      description: t("skills.userDesc"),
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: t("skills.continuousLearning"),
      description: t("skills.learningDesc"),
      color: "from-yellow-500 to-orange-500",
    },
  ]

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{t("about.title")}</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
              {t("about.subtitle")}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Geometric Illustration Side */}
            <div className="relative animate-slide-in-left">
              <div className="relative w-full max-w-lg mx-auto">
                {/* Main geometric shape */}
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-pink-500/20 p-8 backdrop-blur-sm border border-white/10">
                  <div className="w-full h-full rounded-2xl bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
                    {/* Geometric patterns */}
                    <div className="absolute inset-0 bg-grid opacity-20" />
                    <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-purple-500/30 rounded-full blur-xl animate-float" />
                    <div
                      className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-blue-500/30 rounded-full blur-xl animate-float"
                      style={{ animationDelay: "2s" }}
                    />
                    <div
                      className="absolute top-1/2 right-1/3 w-12 h-12 bg-pink-500/30 rounded-full blur-lg animate-float"
                      style={{ animationDelay: "4s" }}
                    />

                    {/* Center icon */}
                    <div className="relative z-10 w-24 h-24 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-2xl">
                      <Code2 className="h-12 w-12 text-white" />
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl animate-float" />
                <div
                  className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl blur-xl animate-float"
                  style={{ animationDelay: "3s" }}
                />
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-8 animate-slide-in-right">
              <div className="space-y-6">
                <p className="text-lg md:text-xl leading-relaxed text-foreground/90 font-light">
                  {t("about.paragraph1")}
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-foreground/90 font-light">
                  {t("about.paragraph2")}
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-foreground/90 font-light">
                  {t("about.paragraph3")}
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {skills.map((skill, index) => (
                  <Card
                    key={index}
                    className="border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-xl animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div
                        className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${skill.color} mb-4`}
                      >
                        <div className="text-white">{skill.icon}</div>
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{skill.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Resume Button */}
              <div className="pt-6">
                <Button
                  size="lg"
                  className="gradient-secondary text-white font-semibold hover:scale-105 transition-all duration-300 shadow-xl glow-secondary px-8 py-6 text-lg rounded-2xl"
                  asChild
                >
                  <a
                    href="https://drive.google.com/file/d/1vYhhYxWR5H6NQ-nZ4HBlERKcdaDJCXQe/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t("about.resumeAriaLabel")}
                  >
                    <FileText className="h-5 w-5 mr-2" />
                    {t("about.resume")}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
