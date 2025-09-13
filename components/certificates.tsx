"use client"

import { useLanguage } from "./language-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, ExternalLink, CheckCircle } from "lucide-react"

export default function Certificates() {
  const { t } = useLanguage()

  const certificates = [
    {
      name: t("certificates.htmlcss"),
      issuer: "Platzi",
      year: "2023",
      icon: <Award className="h-8 w-8" />,
      link: "https://platzi.com/p/CestLuis/curso/2008-html-css/diploma/detalle/",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/10 to-red-500/10",
    },
    {
      name: t("certificates.frontend"),
      issuer: "Platzi",
      year: "2023",
      icon: <Award className="h-8 w-8" />,
      link: "https://platzi.com/p/CestLuis/curso/2467-frontend-developer/diploma/detalle/",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
    },
    {
      name: t("certificates.prompt"),
      issuer: "Coursera",
      year: "2024",
      icon: <Award className="h-8 w-8" />,
      link: "https://www.coursera.org/account/accomplishments/verify/YRHOXH45YTBE",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
    },
  ]

  return (
    <section id="certificates" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{t("certificates.title")}</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
              {t("certificates.subtitle")}
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((certificate, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-0 bg-card/50 backdrop-blur-sm overflow-hidden animate-scale-in hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="pb-4 relative">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${certificate.bgGradient} opacity-50`} />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${certificate.gradient} shadow-lg`}
                      >
                        <div className="text-white">{certificate.icon}</div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge variant="secondary" className="text-xs font-medium bg-background/80">
                          {certificate.year}
                        </Badge>
                        <div className="flex items-center gap-1 text-green-400">
                          <CheckCircle className="h-4 w-4" />
                          <span className="text-xs font-medium">Certified</span>
                        </div>
                      </div>
                    </div>

                    <CardTitle className="text-xl font-bold leading-tight group-hover:text-gradient transition-all duration-300 mb-2">
                      {certificate.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground font-medium">{certificate.issuer}</p>
                  </div>
                </CardHeader>

                <CardContent className="pt-0 relative z-10">
                  <Button
                    className="w-full group-hover:bg-gradient-primary group-hover:text-white transition-all duration-300 bg-background/80 text-foreground border border-border/50 hover:border-transparent font-semibold rounded-xl"
                    asChild
                  >
                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${certificate.name} certificate`}
                    >
                      {t("certificates.viewButton")}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
