'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  SiSpringboot, SiAngular, SiFlutter, SiDart,
  SiJavascript, SiReact, SiNextdotjs, SiTypescript,
  SiPostgresql, SiMongodb, SiGit, SiSharp,
  SiNodedotjs
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { skillsData } from '@/config'

const iconMap: Record<string, any> = {
  FaJava: FaJava, SiSpringboot: SiSpringboot, SiAngular: SiAngular,
  SiFlutter: SiFlutter, SiDart: SiDart, SiJavascript: SiJavascript,
  SiNextdotjs: SiNextdotjs, SiReact: SiReact, SiTypescript: SiTypescript,
  SiNodedotjs: SiNodedotjs, SiPostgresql: SiPostgresql,
  SiMongodb: SiMongodb, SiGit: SiGit, SiSharp: SiSharp
}

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="skills" className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-muted-foreground">Technologies I work with</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {skillsData.map((skill, idx) => {
            const Icon = iconMap[skill.icon]
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: idx * 0.03 
                }}
                whileHover={{ 
                  scale: 1.1,
                  transition: { type: "spring", stiffness: 400 }
                }}
                className="relative"
              >
                <div 
                  className="relative px-5 py-3 rounded-full border backdrop-blur-sm flex items-center gap-2 cursor-default group"
                  style={{
                    backgroundColor: `${skill.color}10`,
                    borderColor: `${skill.color}30`,
                  }}
                >
                  {/* Glow effect on hover */}
                  <div 
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      boxShadow: `0 0 20px ${skill.color}`,
                    }}
                  />
                  
                  {Icon && <Icon className="w-4 h-4" style={{ color: skill.color }} />}
                  <span className="text-sm font-medium">{skill.name}</span>
                  
                  {/* Level indicator dot */}
                  <div 
                    className="w-1.5 h-1.5 rounded-full ml-1"
                    style={{ 
                      backgroundColor: skill.color,
                      opacity: skill.level / 100
                    }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Animated Learning Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.02, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-500/20 via-amber-500/20 to-orange-500/20 border border-yellow-500/30 backdrop-blur-sm"
          >
            <span className="text-xl">📚</span>
            <span className="text-sm">Learning Journey:</span>
            <span className="font-semibold gradient-text">Next.js + TypeScript</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}