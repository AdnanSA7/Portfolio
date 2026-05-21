import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { ProjectsSection } from '@/components/projects-section'
import { SkillsSection } from '@/components/skills-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { ParticleBackground } from '@/components/particle-background'
import { LearningSection } from '@/components/learning-section'

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <LearningSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}