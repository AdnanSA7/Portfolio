'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const roles = ['Full Stack Developer', 'Problem Solver', 'Tech Lead', 'Open Source Contributor']

export function AnimatedText() {
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(150)

  useEffect(() => {
    const ticker = setInterval(() => {
      tick()
    }, delta)

    return () => clearInterval(ticker)
  }, [text, isDeleting])

  const tick = () => {
    const fullText = roles[index]
    
    if (isDeleting) {
      setText(fullText.substring(0, text.length - 1))
      setDelta(50)
    } else {
      setText(fullText.substring(0, text.length + 1))
      setDelta(150)
    }

    if (!isDeleting && text === fullText) {
      setIsDeleting(true)
      setDelta(2000)
    } else if (isDeleting && text === '') {
      setIsDeleting(false)
      setIndex((prev) => (prev + 1) % roles.length)
      setDelta(500)
    }
  }

  return (
    <div className="inline-flex items-center gap-2">
      <span className="gradient-text">{text}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="w-0.5 h-8 bg-gradient-to-r from-blue-600 to-purple-600"
      />
    </div>
  )
}