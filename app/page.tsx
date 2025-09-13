import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Certificates from "@/components/certificates"
import Experience from "@/components/experience"
import Portfolio from "@/components/portfolio"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import StructuredData from "@/components/structured-data"

export default function Home() {
  return (
    <>
      <StructuredData />
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Certificates />
        <Experience />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
