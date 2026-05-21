'use client'

import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Send, CheckCircle, AlertCircle, Mail, MapPin, Phone } from 'lucide-react'

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    await new Promise(resolve => setTimeout(resolve, 1500))
    setStatus('success')
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setStatus('idle'), 3000)
  }

  return (
    <section id="contact" className="py-28 px-4 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase text-sm">Get in Touch</span>
          <h2 className="text-5xl sm:text-6xl font-bold mt-4 mb-6">
            Let's Work{' '}
            <span className="gradient-text">Together</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create something amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {[
                  { icon: Mail, text: "hello@alexchen.dev", href: "mailto:hello@alexchen.dev" },
                  { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
                  { icon: MapPin, text: "San Francisco, CA", href: "#" }
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{item.text}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <div className="glass rounded-2xl p-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 mb-4">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Available for work
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Currently accepting new projects. Let's bring your ideas to life!
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-8 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white/5 border-white/10 focus:border-indigo-500"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white/5 border-white/10 focus:border-indigo-500"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell me about your project..."
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-white/5 border-white/10 focus:border-indigo-500"
                required
              />
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? (
                'Sending...'
              ) : status === 'success' ? (
                <>
                  <CheckCircle className="mr-2 h-4 w-4" /> Message Sent!
                </>
              ) : status === 'error' ? (
                <>
                  <AlertCircle className="mr-2 h-4 w-4" /> Error
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}