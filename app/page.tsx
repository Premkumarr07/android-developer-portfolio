import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Footer from "../components/Footer"
import Skills from "@/components/Skills"


export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills/>
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

