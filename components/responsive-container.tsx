"use client"

import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ResponsiveContainerProps {
  children: ReactNode
  className?: string
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full"
  padding?: "none" | "sm" | "md" | "lg" | "xl"
  center?: boolean
  as?: "div" | "section" | "article" | "main" | "aside"
}

export default function ResponsiveContainer({
  children,
  className,
  maxWidth = "2xl",
  padding = "md",
  center = true,
  as: Component = "div",
}: ResponsiveContainerProps) {
  const maxWidthClasses = {
    sm: "max-w-sm",
    md: "max-w-md", 
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    full: "max-w-full",
  }

  const paddingClasses = {
    none: "p-0",
    sm: "p-2 sm:p-4",
    md: "p-4 sm:p-6 lg:p-8",
    lg: "p-6 sm:p-8 lg:p-12",
    xl: "p-8 sm:p-12 lg:p-16",
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

// Specialized container variants for common use cases
export function PageContainer({ 
  children, 
  className 
}: { 
  children: ReactNode
  className?: string 
}) {
  return (
    <ResponsiveContainer
      maxWidth="2xl"
      padding="lg"
      className={cn("min-h-screen", className)}
    >
      {children}
    </ResponsiveContainer>
  )
}

export function SectionContainer({ 
  children, 
  className 
}: { 
  children: ReactNode
  className?: string 
}) {
  return (
    <ResponsiveContainer
      maxWidth="xl"
      padding="md"
      as="section"
      className={cn("py-8 sm:py-12 lg:py-16", className)}
    >
      {children}
    </ResponsiveContainer>
  )
}

export function CardContainer({ 
  children, 
  className 
}: { 
  children: ReactNode
  className?: string 
}) {
  return (
    <ResponsiveContainer
      maxWidth="lg"
      padding="sm"
      className={cn("bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 shadow-lg", className)}
    >
      {children}
    </ResponsiveContainer>
  )
}

export function GridContainer({ 
  children, 
  className,
  cols = "auto"
}: { 
  children: ReactNode
  className?: string
  cols?: "1" | "2" | "3" | "4" | "auto"
}) {
  const gridCols = {
    "1": "grid-cols-1",
    "2": "grid-cols-1 sm:grid-cols-2",
    "3": "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    "4": "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
    "auto": "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5",
  }

  return (
    <ResponsiveContainer
      maxWidth="full"
      padding="md"
      className={cn("grid gap-4 sm:gap-6 lg:gap-8", gridCols[cols], className)}
    >
      {children}
    </ResponsiveContainer>
  )
}

export function FlexContainer({ 
  children, 
  className,
  direction = "row",
  align = "start",
  justify = "start",
  wrap = true
}: { 
  children: ReactNode
  className?: string
  direction?: "row" | "col" | "row-reverse" | "col-reverse"
  align?: "start" | "center" | "end" | "stretch" | "baseline"
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly"
  wrap?: boolean
}) {
  const directionClasses = {
    row: "flex-row",
    col: "flex-col",
    "row-reverse": "flex-row-reverse",
    "col-reverse": "flex-col-reverse",
  }

  const alignClasses = {
    start: "items-start",
    center: "items-center", 
    end: "items-end",
    stretch: "items-stretch",
    baseline: "items-baseline",
  }

  const justifyClasses = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly",
  }

  return (
    <ResponsiveContainer
      maxWidth="full"
      padding="md"
      className={cn(
        "flex gap-4 sm:gap-6 lg:gap-8",
        directionClasses[direction],
        alignClasses[align],
        justifyClasses[justify],
        wrap && "flex-wrap",
        className
      )}
    >
      {children}
    </ResponsiveContainer>
  )
}
