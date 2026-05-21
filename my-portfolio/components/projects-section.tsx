'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ExternalLink, ChevronLeft, ChevronRight, Filter, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FaGithub } from 'react-icons/fa6'

const projectsData = [
  {
    id: 1,
    title: "TaskFlow Pro",
    category: "Full Stack",
    description: "AI-powered task management platform with real-time collaboration, predictive analytics, and team productivity insights.",
    longDescription: "TaskFlow Pro revolutionized how teams manage their daily tasks by incorporating AI-driven prioritization and real-time collaboration features. The platform handles thousands of concurrent users with WebSocket connections for instant updates.",
    tech: ["Next.js 14", "TypeScript", "PostgreSQL", "Redis", "WebSockets", "TailwindCSS"],
    features: ["AI Task Prioritization", "Real-time Collaboration", "Analytics Dashboard", "Team Management"],
    liveUrl: "https://taskflow-pro.demo.com",
    githubUrl: "https://github.com/yourusername/taskflow-pro",
    image: "/projects/taskflow.jpg",
    gradient: "from-blue-500 to-cyan-500",
    year: "2024",
    stats: { users: "10K+", commits: "450+", stars: "280" }
  },
  {
    id: 2,
    title: "NeoBank Platform",
    category: "Full Stack",
    description: "Modern digital banking solution with biometric authentication, instant payments, and real-time transaction monitoring.",
    longDescription: "NeoBank provides a complete banking experience with features like instant P2P transfers, biometric login, spending analytics, and investment tracking.",
    tech: ["React Native", "Node.js", "MongoDB", "Stripe", "AWS", "Redis"],
    features: ["Biometric Auth", "Instant Payments", "Investment Dashboard", "Spending Analytics"],
    liveUrl: "https://neobank.demo.com",
    githubUrl: "https://github.com/yourusername/neobank",
    image: "/projects/neobank.jpg",
    gradient: "from-purple-500 to-pink-500",
    year: "2024",
    stats: { users: "25K+", commits: "680+", stars: "420" }
  },
  {
    id: 3,
    title: "AI Content Studio",
    category: "AI/ML",
    description: "Enterprise content generation platform with fine-tuned LLM models for brand voice consistency and SEO optimization.",
    longDescription: "Content Studio leverages GPT-4 and Claude AI to help businesses generate high-quality, on-brand content at scale. Includes fine-tuning capabilities and SEO scoring.",
    tech: ["Python", "FastAPI", "React", "LangChain", "OpenAI", "PostgreSQL"],
    features: ["Custom AI Models", "Auto-Generate Content", "Brand Voice Training", "SEO Scoring"],
    liveUrl: "https://ai-content-studio.demo.com",
    githubUrl: "https://github.com/yourusername/ai-studio",
    image: "/projects/aistudio.jpg",
    gradient: "from-orange-500 to-red-500",
    year: "2024",
    stats: { users: "5K+", commits: "320+", stars: "180" }
  },
  {
    id: 4,
    title: "Cloud Dashboard",
    category: "DevOps",
    description: "Unified cloud management platform with multi-provider support, cost optimization, and automated scaling.",
    longDescription: "Cloud Dashboard aggregates metrics from AWS, Azure, and GCP into a single interface, providing cost analysis, resource optimization, and automated scaling recommendations.",
    tech: ["Go", "React", "GraphQL", "Terraform", "AWS", "Prometheus"],
    features: ["Multi-Cloud Support", "Cost Analytics", "Automated Scaling", "Alerting System"],
    liveUrl: "https://cloud-dashboard.demo.com",
    githubUrl: "https://github.com/yourusername/cloud-dashboard",
    image: "/projects/cloud.jpg",
    gradient: "from-green-500 to-emerald-500",
    year: "2023",
    stats: { users: "15K+", commits: "560+", stars: "340" }
  },
  {
    id: 5,
    title: "EcoCommerce",
    category: "E-commerce",
    description: "Sustainable marketplace connecting eco-friendly brands with conscious consumers, featuring carbon-neutral shipping.",
    longDescription: "EcoCommerce is a purpose-driven marketplace that helps sustainable brands reach conscious consumers. Includes carbon footprint tracking, eco-certification badges, and green shipping options.",
    tech: ["Next.js", "Stripe", "MongoDB", "Redis", "TailwindCSS", "Node.js"],
    features: ["Carbon Tracking", "Eco Badges", "Green Shipping", "Brand Profiles"],
    liveUrl: "https://ecocommerce.demo.com",
    githubUrl: "https://github.com/yourusername/ecocommerce",
    image: "/projects/eco.jpg",
    gradient: "from-teal-500 to-green-500",
    year: "2024",
    stats: { users: "8K+", commits: "390+", stars: "220" }
  },
  {
    id: 6,
    title: "DevOps Pipeline",
    category: "DevOps",
    description: "CI/CD automation platform with integrated testing, deployment strategies, and performance monitoring.",
    longDescription: "DevOps Pipeline streamlines the software delivery process with automated testing, blue-green deployments, canary releases, and comprehensive performance monitoring.",
    tech: ["Jenkins", "Docker", "Kubernetes", "Python", "Groovy", "Grafana"],
    features: ["Automated Testing", "Rollback Support", "Performance Monitoring", "Slack Integration"],
    liveUrl: "https://devops-pipeline.demo.com",
    githubUrl: "https://github.com/yourusername/devops-pipeline",
    image: "/projects/devops.jpg",
    gradient: "from-red-500 to-orange-500",
    year: "2023",
    stats: { users: "12K+", commits: "720+", stars: "450" }
  }
]

const categories = ["All", "Full Stack", "AI/ML", "DevOps", "E-commerce"]

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 6
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const filteredProjects = selectedCategory === "All" 
    ? projectsData 
    : projectsData.filter(p => p.category === selectedCategory)
  
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)
  const displayedProjects = filteredProjects.slice((currentPage - 1) * projectsPerPage, currentPage * projectsPerPage)

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategory])

  return (
    <section id="projects" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold tracking-wide uppercase text-sm">Portfolio</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            Featured{' '}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my best works that showcase my expertise in building modern web applications
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category 
                ? "bg-gradient-to-r from-primary to-secondary text-white" 
                : "bg-card/80 backdrop-blur-sm hover:border-primary/50"}
            >
              {category === "All" ? <Filter className="w-4 h-4 mr-2" /> : null}
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-full rounded-2xl overflow-hidden bg-card/80 backdrop-blur-sm border border-border shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Card Image Area */}
                <div className={`relative h-48 overflow-hidden bg-gradient-to-r ${project.gradient}`}>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-sm font-medium">Click to view details</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                      {project.year}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-muted/50 rounded-full">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="text-xs px-2 py-1 bg-muted/50 rounded-full">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                  
                  {/* Stats */}
                  <div className="flex justify-between items-center pt-4 border-t border-border">
                    <div className="flex gap-4 text-xs text-muted-foreground">
                      <span>⭐ {project.stats.stars}</span>
                      <span>📝 {project.stats.commits}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0" asChild onClick={(e) => e.stopPropagation()}>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <FaGithub className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0" asChild onClick={(e) => e.stopPropagation()}>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center gap-2 mt-12"
          >
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="bg-card/80 backdrop-blur-sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                onClick={() => setCurrentPage(page)}
                className={currentPage === page 
                  ? "bg-gradient-to-r from-primary to-secondary text-white" 
                  : "bg-card/80 backdrop-blur-sm"}
              >
                {page}
              </Button>
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="bg-card/80 backdrop-blur-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </motion.div>
        )}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl bg-card/95 backdrop-blur-md border border-border shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-black/20 hover:bg-black/40"
                onClick={() => setSelectedProject(null)}
              >
                <X className="w-5 h-5" />
              </Button>
              
              <div className={`h-48 bg-gradient-to-r ${selectedProject.gradient}`} />
              
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
                <div className="flex gap-2 mb-4">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {selectedProject.category}
                  </span>
                  <span className="px-2 py-1 rounded-full bg-muted text-muted-foreground text-xs">
                    {selectedProject.year}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {selectedProject.longDescription}
                </p>
                
                <h3 className="font-semibold mb-3">Key Features</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.features.map((feature) => (
                    <span key={feature} className="px-3 py-1 rounded-full bg-muted/50 text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
                
                <h3 className="font-semibold mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-muted/50 font-mono text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button asChild className="flex-1">
                    <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="flex-1">
                    <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="w-4 h-4 mr-2" /> View Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}