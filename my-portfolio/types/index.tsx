export interface Project {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  tech: string[]
  liveUrl: string
  githubUrl: string
  image: string
  images?: string[]
  features: string[]
  challenges?: string
  year: number
  category: 'fullstack' | 'frontend' | 'backend' | 'mobile'
}

export interface Skill {
  name: string
  icon: string
  level: number
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools'
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}