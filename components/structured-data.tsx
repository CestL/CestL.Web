"use client"

import { useLanguage } from "./language-provider"

export default function StructuredData() {
  const { t } = useLanguage()

  // Create structured data for Person
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Luis Pineda",
    jobTitle: t("hero.title"),
    url: "https://your-domain.com",
    sameAs: ["https://github.com/CestL", "https://www.linkedin.com/in/cestl/"],
    email: "pinedalamp@gmail.com",
    knowsAbout: [
      "HTML5",
      "CSS",
      "JavaScript",
      "React",
      "Prompt Engineering",
      "AI-Driven Process Optimization",
      "Web Development",
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }} />
}
