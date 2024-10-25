import Hero from './components/sections/Hero'
import ProfessionalSummary from './components/sections/ProfessionalSummary'
import Experience from './components/sections/Experience'
import Skills from './components/sections/Skills'
import Languages from './components/sections/Languages'
import Contact from './components/sections/Contact'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <ProfessionalSummary />
      <Experience />
      <Skills />
      <Languages />
      <Contact />
    </div>
  )
}