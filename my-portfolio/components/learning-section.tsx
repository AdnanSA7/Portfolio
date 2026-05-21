'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { BookOpen, Target, Rocket, Heart } from 'lucide-react'
import { personalInfo } from '@/config'

export function LearningSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const learningItems = [
    {
      icon: BookOpen,
      title: "Currently Learning",
      description: personalInfo.currentlyLearning.join(" • "),
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "Next Goals",
      description: personalInfo.nextGoals.join(" • "),
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Rocket,
      title: "Looking For",
      description: personalInfo.lookingFor,
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Heart,
      title: "Work Style",
      description: personalInfo.workStyle,
      color: "from-green-500 to-emerald-500"
    }
  ]

  return (
    <section id="learning" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold tracking-wide uppercase text-sm">Growth Mindset</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            My Learning{' '}
            <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Always curious, always learning. Here's what I'm focused on right now.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {learningItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl p-6 bg-card/30 backdrop-blur-sm border border-border hover:shadow-lg transition-all"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-4`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}