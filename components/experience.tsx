"use client"

import { useLanguage } from "./language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Calendar, Building, Code, Lightbulb, Target } from "lucide-react"

export default function Experience() {
  const { t } = useLanguage()

  const skills = [
    { name: t("skills.frontendDev"), level: 85 },
    { name: "React & JavaScript", level: 80 },
    { name: t("skills.aiIntegration"), level: 75 },
    { name: t("skills.backendBasics"), level: 60 },
    { name: t("skills.continuousLearning"), level: 95 },
  ]

  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{t("experience.title")}</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
              {t("experience.subtitle")}
            </p>
          </div>

          {/* Timeline Card */}
          <div className="relative animate-scale-in">
            {/* Timeline line */}
            <div className="absolute left-8 top-20 bottom-8 w-0.5 bg-gradient-primary opacity-30" />

            <Card className="relative overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5" />
              <div className="absolute inset-0 bg-dots opacity-30" />

              <CardContent className="relative p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Timeline Icon */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-xl glow-primary">
                        <TrendingUp className="h-8 w-8 text-white" />
                      </div>
                      {/* Timeline dot */}
                      <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                        {t("experience.current.title")}
                      </h3>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Building className="w-5 h-5" />
                          <span className="font-medium">{t("experience.current.company")}</span>
                        </div>
                        <span className="hidden sm:inline text-muted-foreground/50">•</span>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-5 h-5" />
                          <time className="font-medium">{t("experience.current.period")}</time>
                        </div>
                      </div>
                    </div>

                    <p className="text-lg md:text-xl leading-relaxed text-foreground/90 font-light">
                      {t("experience.current.description")}
                    </p>

                    {/* Skills Progress */}
                    <div className="space-y-4 pt-4">
                      <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Code className="h-5 w-5 text-primary" />
                        {t("skills.currentFocus")}
                      </h4>

                      <div className="grid sm:grid-cols-2 gap-4">
                        {skills.map((skill, index) => (
                          <div key={index} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium text-foreground/80">{skill.name}</span>
                              <span className="text-xs text-muted-foreground">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2">
                              <div
                                className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                                style={{
                                  width: `${skill.level}%`,
                                  animationDelay: `${index * 0.2}s`,
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Highlights */}
                    <div className="grid sm:grid-cols-3 gap-4 pt-6">
                      {[
                        {
                          icon: <Code className="h-5 w-5" />,
                          title: t("skills.frontendFocus"),
                          desc: t("skills.reactModern"),
                        },
                        {
                          icon: <Lightbulb className="h-5 w-5" />,
                          title: t("skills.aiIntegration"),
                          desc: "Prompt Engineering",
                        },
                        {
                          icon: <Target className="h-5 w-5" />,
                          title: t("skills.fullStackGoal"),
                          desc: t("skills.backendLearning"),
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-3 rounded-xl bg-background/30 backdrop-blur-sm"
                        >
                          <div className="text-primary">{item.icon}</div>
                          <div>
                            <div className="text-sm font-semibold text-foreground">{item.title}</div>
                            <div className="text-xs text-muted-foreground">{item.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
