import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { ProjectsSection } from '@/components/projects-section'
import { AboutSection } from '@/components/about-section'
import { ExperienceSection } from '@/components/experience-section'
import { SkillsSection } from '@/components/skills-section'
import { LearningSection } from '@/components/learning-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { AuroraBackground } from '@/components/aurora-background'
import { ParticleBackground } from '@/components/particle-background'
import { CustomCursor } from '@/components/custom-cursor'
import { ScrollProgress } from '@/components/scroll-progress'

export default function Home() {
  return (
    <>
      <AuroraBackground />
      <ParticleBackground />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main id="main">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <LearningSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
