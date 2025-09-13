"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navbar
    home: "Home",
    about: "About",
    certificates: "Certificates",
    experience: "Experience",
    portfolio: "Portfolio",
    contact: "Contact",

    // Hero
    "hero.title": "Frontend Developer & AI Specialist",
    "hero.subtitle":
      "Enhancing user experiences and digital solutions through advanced front-end development and AI-powered process optimization.",
    "hero.introduction":
      "Allow me to introduce myself, I'm Luis — a Frontend Web Developer & AI-Driven Optimization Engineer",
    "hero.viewWork": "View My Work",

    // About
    "about.title": "About Me",
    "about.subtitle":
      "Passionate about creating exceptional digital experiences through continuous learning and innovation",
    "about.paragraph1":
      "I am a passionate and meticulous web developer with a keen eye for detail and a deep understanding of front-end technologies. Specializing in HTML, CSS, and JavaScript, I craft seamless, dynamic, and responsive digital experiences that prioritize usability and innovation.",
    "about.paragraph2":
      "My expertise extends beyond traditional web development—I'm also skilled in engineering effective prompts, refining how users interact with AI systems to create more natural and intuitive engagements.",
    "about.paragraph3":
      "Driven by a commitment to continuous improvement, I constantly explore new technologies, refine my problem-solving abilities, and seek out efficient solutions to elevate user experiences.",
    "about.resume": "Download Resume",
    "about.resumeAriaLabel": "Download my resume",

    // Certificates
    "certificates.title": "My Certificates",
    "certificates.subtitle": "Continuous learning and professional development achievements",
    "certificates.htmlcss": "HTML 5 & CSS",
    "certificates.frontend": "Frontend Developer",
    "certificates.prompt": "Prompt Engineering",
    "certificates.viewButton": "View Certificate",

    // Experience
    "experience.title": "Professional Experience",
    "experience.subtitle": "Currently focused on growth, learning, and building meaningful projects",
    "experience.current.title": "Full-Stack Developer in Training",
    "experience.current.company": "Personal Development",
    "experience.current.period": "2023 - Present",
    "experience.current.description":
      "At the moment I'm focused on personal projects and studying to improve my code. I'm learning and growing to become a better Full-Stack developer, already working with frontend and exploring some backend details.",

    // Portfolio
    "portfolio.title": "Featured Projects",
    "portfolio.subtitle": "A showcase of my recent work, creative solutions, and continuous learning journey",
    "portfolio.viewProject": "View Project",
    "portfolio.project1.title": "LucasWallet",
    "portfolio.project1.description":
      "AI assistant designed to streamline transactions, including crypto purchases, payments, and more.",
    "portfolio.project2.title": "AllPay",
    "portfolio.project2.description": "All-in-One Payment and Financial Management Platform",
    "portfolio.project3.title": "Sandoval Store",
    "portfolio.project3.description":
      "Web application for lotteries and raffles with modern design and user-friendly interface",

    // Contact
    "contact.title": "Let's Connect",
    "contact.subtitle": "Ready to collaborate? Let's discuss your next project and bring your ideas to life",
    "contact.getInTouch": "Get in touch",
    "contact.description":
      "I'm always interested in new opportunities and exciting projects. Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out!",
    "contact.readyToStart": "Ready to start?",
    "contact.readyDescription":
      "Let's discuss how we can work together to create something amazing. I'm excited to hear about your project!",
    "contact.sendMessage": "Send Message",
    "contact.github": "GitHub",
    "contact.email": "Email",
    "contact.linkedin": "LinkedIn",

    // Footer
    "footer.description":
      "Frontend Developer & AI Specialist passionate about creating exceptional digital experiences through continuous learning and innovation.",
    "footer.quickLinks": "Quick Links",
    "footer.connect": "Connect",
    "footer.rights": "All Rights Reserved",
    "footer.madeWith": "Made with",
    "footer.and": "and",
    "footer.using": "using Next.js & Tailwind CSS",

    // Skills and other elements
    "skills.frontendDev": "Frontend Development",
    "skills.frontendDesc": "HTML, CSS, JavaScript, React",
    "skills.aiIntegration": "AI Integration",
    "skills.aiDesc": "Prompt Engineering & Optimization",
    "skills.backendBasics": "Backend Basics",
    "skills.backendDesc": "Node.js, APIs, Database Fundamentals",
    "skills.userFocused": "User-Focused Design",
    "skills.userDesc": "Responsive & Accessible Interfaces",
    "skills.continuousLearning": "Continuous Learning",
    "skills.learningDesc": "Always exploring new technologies",
    "skills.currentFocus": "Current Focus Areas",
    "skills.frontendFocus": "Frontend Focus",
    "skills.reactModern": "React & Modern JS",
    "skills.fullStackGoal": "Full-Stack Goal",
    "skills.backendLearning": "Backend Learning",
  },
  es: {
    // Navbar
    home: "Inicio",
    about: "Sobre Mí",
    certificates: "Certificados",
    experience: "Experiencia",
    portfolio: "Portafolio",
    contact: "Contacto",

    // Hero
    "hero.title": "Desarrollador Frontend & Especialista en IA",
    "hero.subtitle":
      "Mejorando experiencias de usuario y soluciones digitales a través del desarrollo front-end avanzado y la optimización de procesos potenciada por IA.",
    "hero.introduction":
      "Permíteme presentarme, soy Luis — un Desarrollador Web Frontend & Ingeniero de Optimización Impulsado por IA",
    "hero.viewWork": "Ver Mi Trabajo",

    // About
    "about.title": "Sobre Mí",
    "about.subtitle":
      "Apasionado por crear experiencias digitales excepcionales a través del aprendizaje continuo y la innovación",
    "about.paragraph1":
      "Soy un desarrollador web apasionado y meticuloso con un ojo agudo para los detalles y una comprensión profunda de las tecnologías front-end. Especializado en HTML, CSS y JavaScript, creo experiencias digitales fluidas, dinámicas y responsivas que priorizan la usabilidad y la innovación.",
    "about.paragraph2":
      "Mi experiencia se extiende más allá del desarrollo web tradicional: también soy hábil en la ingeniería de prompts efectivos, refinando cómo los usuarios interactúan con los sistemas de IA para crear interacciones más naturales e intuitivas.",
    "about.paragraph3":
      "Impulsado por un compromiso con la mejora continua, constantemente exploro nuevas tecnologías, refino mis habilidades de resolución de problemas y busco soluciones eficientes para elevar las experiencias de los usuarios.",
    "about.resume": "Descargar Curriculum",
    "about.resumeAriaLabel": "Descargar mi curriculum",

    // Certificates
    "certificates.title": "Mis Certificados",
    "certificates.subtitle": "Logros de aprendizaje continuo y desarrollo profesional",
    "certificates.htmlcss": "HTML 5 y CSS",
    "certificates.frontend": "Desarrollador Frontend",
    "certificates.prompt": "Ingeniería de Prompts",
    "certificates.viewButton": "Ver Certificado",

    // Experience
    "experience.title": "Experiencia Profesional",
    "experience.subtitle":
      "Actualmente enfocado en el crecimiento, aprendizaje y construcción de proyectos significativos",
    "experience.current.title": "Desarrollador Full-Stack en Formación",
    "experience.current.company": "Desarrollo Personal",
    "experience.current.period": "2023 - Presente",
    "experience.current.description":
      "En este momento me enfoco en proyectos personales y estudio para mejorar mi código. Estoy aprendiendo y creciendo para convertirme en un mejor desarrollador Full-Stack, ya trabajando con frontend y explorando algunos detalles de backend.",

    // Portfolio
    "portfolio.title": "Proyectos Destacados",
    "portfolio.subtitle": "Una muestra de mi trabajo reciente, soluciones creativas y mi viaje de aprendizaje continuo",
    "portfolio.viewProject": "Ver Proyecto",
    "portfolio.project1.title": "LucasWallet",
    "portfolio.project1.description":
      "Asistente de IA diseñado para agilizar transacciones, incluyendo compras de criptomonedas, pagos y más.",
    "portfolio.project2.title": "AllPay",
    "portfolio.project2.description": "Plataforma de Pago y Gestión Financiera Todo en Uno",
    "portfolio.project3.title": "Tienda Sandoval",
    "portfolio.project3.description":
      "Aplicación web para loterías y rifas con diseño moderno e interfaz amigable para el usuario",

    // Contact
    "contact.title": "Conectemos",
    "contact.subtitle": "¿Listo para colaborar? Hablemos sobre tu próximo proyecto y hagamos realidad tus ideas",
    "contact.getInTouch": "Ponte en contacto",
    "contact.description":
      "Siempre estoy interesado en nuevas oportunidades y proyectos emocionantes. Ya sea que tengas una pregunta, quieras colaborar o simplemente saludar, ¡no dudes en contactarme!",
    "contact.readyToStart": "¿Listo para empezar?",
    "contact.readyDescription":
      "Hablemos sobre cómo podemos trabajar juntos para crear algo increíble. ¡Estoy emocionado de escuchar sobre tu proyecto!",
    "contact.sendMessage": "Enviar Mensaje",
    "contact.github": "GitHub",
    "contact.email": "Correo",
    "contact.linkedin": "LinkedIn",

    // Footer
    "footer.description":
      "Desarrollador Frontend & Especialista en IA apasionado por crear experiencias digitales excepcionales a través del aprendizaje continuo y la innovación.",
    "footer.quickLinks": "Enlaces Rápidos",
    "footer.connect": "Conectar",
    "footer.rights": "Todos los Derechos Reservados",
    "footer.madeWith": "Hecho con",
    "footer.and": "y",
    "footer.using": "usando Next.js & Tailwind CSS",

    // Skills and other elements
    "skills.frontendDev": "Desarrollo Frontend",
    "skills.frontendDesc": "HTML, CSS, JavaScript, React",
    "skills.aiIntegration": "Integración de IA",
    "skills.aiDesc": "Ingeniería y Optimización de Prompts",
    "skills.backendBasics": "Fundamentos Backend",
    "skills.backendDesc": "Node.js, APIs, Fundamentos de Bases de Datos",
    "skills.userFocused": "Diseño Centrado en el Usuario",
    "skills.userDesc": "Interfaces Responsivas y Accesibles",
    "skills.continuousLearning": "Aprendizaje Continuo",
    "skills.learningDesc": "Siempre explorando nuevas tecnologías",
    "skills.currentFocus": "Áreas de Enfoque Actuales",
    "skills.frontendFocus": "Enfoque Frontend",
    "skills.reactModern": "React y JS Moderno",
    "skills.fullStackGoal": "Objetivo Full-Stack",
    "skills.backendLearning": "Aprendizaje Backend",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
