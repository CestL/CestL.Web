"use client"

import { useLanguage } from "./language-provider"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Sparkles } from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const { t } = useLanguage()

  const projects = [
    {
      title: t("portfolio.project1.title"),
      description: t("portfolio.project1.description"),
      image: "/images/lucaswallet.png",
      link: "https://www.lucaswallet.com/en",
      github: "https://github.com/CestL/lucas-wallet",
      tags: ["React", "AI Integration", "Crypto", "Web3"],
      featured: true,
      status: "Live",
    },
    {
      title: t("portfolio.project2.title"),
      description: t("portfolio.project2.description"),
      image: "/images/allpay-dashboard.png",
      link: "https://all-pay.netlify.app/",
      github: "https://github.com/CestL/all-pay",
      tags: ["JavaScript", "Payment", "Fintech", "UI/UX"],
      featured: false,
      status: "Live",
    },
    {
      title: t("portfolio.project3.title"),
      description: t("portfolio.project3.description"),
      image: "/images/sandoval-store.png",
      link: "https://www.sandovalmiguel.store/",
      github: "https://github.com/CestL/MSSorteos",
      tags: ["Next.js", "Lottery", "E-commerce", "Responsive"],
      featured: false,
      status: "Live",
    },
  ]

  const generateScreenshotUrl = (url: string) => {
    const encodedUrl = encodeURIComponent(url)
    return `https://api.screenshotone.com/take?access_key=demo&url=${encodedUrl}&viewport_width=1200&viewport_height=800&device_scale_factor=1&format=png&image_quality=80&block_ads=true&block_cookie_banners=true&block_banners_by_heuristics=true&block_trackers=true&delay=3&timeout=60`
  }

  const getImageUrl = (imageUrl: string, projectLink: string) => {
    if (imageUrl && imageUrl.trim() !== "") {
      return imageUrl
    }
    return generateScreenshotUrl(projectLink)
  }

  const getFallbackImage = (projectTitle: string) => {
    return `https://via.placeholder.com/600x400/9333ea/ffffff?text=${encodeURIComponent(projectTitle)}`
  }

  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{t("portfolio.title")}</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
              {t("portfolio.subtitle")}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-0 bg-card/50 backdrop-blur-sm overflow-hidden animate-scale-in hover:scale-105 ${
                  project.featured ? "lg:col-span-2 xl:col-span-2" : ""
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Image */}
                <div className={`relative overflow-hidden bg-muted ${project.featured ? "h-64 md:h-80" : "h-48"}`}>
                  <Image
                    src={getImageUrl(project.image, project.link) || "/placeholder.svg"}
                    alt={`Screenshot of ${project.title} project`}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      if (!target.src.includes("via.placeholder.com")) {
                        target.src = `https://api.urlbox.io/v1/ca482d7e-9417-4569-90fe-80f7c5e1c781/png?url=${encodeURIComponent(project.link)}&width=600&height=400&delay=2000`
                      } else {
                        target.src = getFallbackImage(project.title)
                      }
                    }}
                    unoptimized={!project.image || project.image.trim() === ""}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  {/* Status Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {project.featured && (
                      <Badge className="bg-gradient-primary text-white font-semibold border-0 shadow-lg">
                        <Sparkles className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                    <Badge className="bg-green-500/90 text-white font-semibold border-0 shadow-lg">
                      {project.status}
                    </Badge>
                  </div>

                  {/* Hover Actions */}
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <Button size="sm" className="bg-white/90 text-black hover:bg-white font-semibold shadow-lg" asChild>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} project`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm rounded-xl"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} source code`}
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">{project.description}</p>
                </CardHeader>

                <CardContent className="pb-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs font-medium bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-0">
                  <Button
                    className="w-full gradient-primary text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg rounded-xl"
                    asChild
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} project`}
                    >
                      {t("portfolio.viewProject")}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
