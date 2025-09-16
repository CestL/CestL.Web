"use client"

import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ResponsiveLayoutProps {
  children: ReactNode
  className?: string
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "full"
  padding?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
  center?: boolean
  as?: "div" | "section" | "article" | "main" | "aside" | "header" | "footer"
}

export default function ResponsiveLayout({
  children,
  className,
  maxWidth = "6xl",
  padding = "lg",
  center = true,
  as: Component = "div",
}: ResponsiveLayoutProps) {
  const maxWidthClasses = {
    sm: "max-w-sm",
    md: "max-w-md", 
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "3xl": "max-w-3xl",
    "4xl": "max-w-4xl",
    "5xl": "max-w-5xl",
    "6xl": "max-w-6xl",
    "7xl": "max-w-7xl",
    full: "max-w-full",
  }

  const paddingClasses = {
    none: "p-0",
    xs: "p-2 sm:p-3",
    sm: "p-3 sm:p-4 md:p-6",
    md: "p-4 sm:p-6 lg:p-8",
    lg: "p-6 sm:p-8 lg:p-12 xl:p-16",
    xl: "p-8 sm:p-12 lg:p-16 xl:p-20",
    "2xl": "p-12 sm:p-16 lg:p-20 xl:p-24",
  }

  return (
    <Component
      className={cn(
        "w-full",
        maxWidthClasses[maxWidth],
        paddingClasses[padding],
        center && "mx-auto",
        className
      )}
    >
      {children}
    </Component>
  )
}

// Specialized layout components for common use cases
export function HeroLayout({ 
  children, 
  className 
}: { 
  children: ReactNode
  className?: string 
}) {
  return (
    <ResponsiveLayout
      maxWidth="7xl"
      padding="lg"
      className={cn("min-h-screen flex items-center justify-center", className)}
    >
      {children}
    </ResponsiveLayout>
  )
}

export function ContentLayout({ 
  children, 
  className 
}: { 
  children: ReactNode
  className?: string 
}) {
  return (
    <ResponsiveLayout
      maxWidth="5xl"
      padding="md"
      className={cn("py-8 sm:py-12 lg:py-16", className)}
    >
      {children}
    </ResponsiveLayout>
  )
}

export function TextLayout({ 
  children, 
  className 
}: { 
  children: ReactNode
  className?: string 
}) {
  return (
    <ResponsiveLayout
      maxWidth="4xl"
      padding="md"
      className={cn("prose prose-lg max-w-none", className)}
    >
      {children}
    </ResponsiveLayout>
  )
}

// Responsive typography utilities
export function ResponsiveText({ 
  children, 
  className,
  size = "base"
}: { 
  children: ReactNode
  className?: string
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl"
}) {
  const sizeClasses = {
    xs: "text-xs sm:text-sm",
    sm: "text-sm sm:text-base",
    base: "text-base sm:text-lg",
    lg: "text-lg sm:text-xl",
    xl: "text-xl sm:text-2xl",
    "2xl": "text-2xl sm:text-3xl",
    "3xl": "text-3xl sm:text-4xl",
    "4xl": "text-4xl sm:text-5xl",
    "5xl": "text-5xl sm:text-6xl",
    "6xl": "text-6xl sm:text-7xl",
    "7xl": "text-7xl sm:text-8xl",
    "8xl": "text-8xl sm:text-9xl",
    "9xl": "text-9xl",
  }

  return (
    <span className={cn(sizeClasses[size], className)}>
      {children}
    </span>
  )
}

// Responsive heading component
export function ResponsiveHeading({ 
  children, 
  className,
  level = 1,
  size = "4xl"
}: { 
  children: ReactNode
  className?: string
  level?: 1 | 2 | 3 | 4 | 5 | 6
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl"
}) {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements
  
  return (
    <HeadingTag className={cn(
      "font-bold leading-tight",
      className
    )}>
      <ResponsiveText size={size}>
        {children}
      </ResponsiveText>
    </HeadingTag>
  )
}

// Mobile-first responsive utilities
export function MobileOnly({ children }: { children: ReactNode }) {
  return <div className="block sm:hidden">{children}</div>
}

export function TabletOnly({ children }: { children: ReactNode }) {
  return <div className="hidden sm:block lg:hidden">{children}</div>
}

export function DesktopOnly({ children }: { children: ReactNode }) {
  return <div className="hidden lg:block">{children}</div>
}

export function MobileAndTablet({ children }: { children: ReactNode }) {
  return <div className="block lg:hidden">{children}</div>
}

export function TabletAndDesktop({ children }: { children: ReactNode }) {
  return <div className="hidden sm:block">{children}</div>
}
