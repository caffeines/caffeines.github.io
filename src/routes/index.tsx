import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { Companies } from '../components/Companies'
import { Experience } from '../components/Experience'
import { Skills } from '../components/Skills'
import { Projects } from '../components/Projects'
import { Certifications } from '../components/Certifications'
import { Footer } from '../components/Footer'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Footer />
    </>
  )
}
