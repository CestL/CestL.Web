"use client"

import { useLanguage } from "./language-provider"
import { ResponsiveText } from "./responsive-layout"

export default function GlowingSection() {
  const { t } = useLanguage()

  return (
    <section className="relative py-8 sm:py-12 lg:py-16 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <ResponsiveText 
            size="lg" 
            className="text-primary glow-primary font-light leading-relaxed max-w-4xl mx-auto"
          >
            {t("hero.subtitle")}
          </ResponsiveText>
        </div>
      </div>
    </section>
  )
}
