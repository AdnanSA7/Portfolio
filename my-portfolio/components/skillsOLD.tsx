'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  SiSpringboot, SiAngular, SiFlutter, SiDart,
  SiJavascript, SiReact, SiNextdotjs, SiTypescript,
  SiPostgresql, SiMongodb, SiGit, SiSharp,
  SiNodedotjs, SiPython, SiDocker, SiGraphql
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

const skillGroups = [
  {
    name: "Core Expertise",
    skills: [
      { name: "Java", icon: FaJava, color: "#007396" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "Angular", icon: SiAngular, color: "#DD0031" },
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
      { name: "Dart", icon: SiDart, color: "#0175C2" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" }
    ]
  },
  {
    name: "Currently Learning",
    skills: [
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" }
    ]
  },
  {
    name: "Tools & Others",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "C#", icon: SiSharp, color: "#239120" }
    ]
  }
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="skills" className="relative py-16 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-muted-foreground">Technologies I work with</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {skillGroups.map((group, groupIdx) => (
            <motion.div
              key={group.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: groupIdx * 0.1 }}
              className="flex-1 min-w-[200px]"
            >
              <h3 className="text-center text-sm font-semibold text-primary mb-4">{group.name}</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {group.skills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: (groupIdx * 0.1) + (idx * 0.03) }}
                    className="group relative"
                  >
                    <div className="w-14 h-14 rounded-xl bg-card/50 backdrop-blur-sm border border-border flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg">
                      <skill.icon className="w-7 h-7" style={{ color: skill.color }} />
                    </div>
                    <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}