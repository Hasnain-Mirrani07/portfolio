import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MapPin, Github, Linkedin } from 'lucide-react'
import { FadeIn } from './AnimatedSection'
import { WhatsAppIcon } from './WhatsAppIcon'
import { personalInfo } from '../data/portfolio'

export function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`)
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    )
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container-max">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-accent-light text-sm font-medium tracking-widest uppercase">Contact</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
              Let's Work <span className="gradient-text">Together</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Have a project in mind? I'd love to hear about it. Let's build something amazing.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          <FadeIn delay={0.1} className="lg:col-span-2 space-y-6">
            <div className="glass-card p-6">
              <Mail className="w-6 h-6 text-accent-light mb-3" />
              <h4 className="font-medium mb-1">Email</h4>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {personalInfo.email}
              </a>
            </div>
            <div className="glass-card p-6">
              <WhatsAppIcon className="w-6 h-6 text-mint mb-3" />
              <h4 className="font-medium mb-1">WhatsApp</h4>
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {personalInfo.whatsapp}
              </a>
            </div>
            <div className="glass-card p-6">
              <MapPin className="w-6 h-6 text-coral mb-3" />
              <h4 className="font-medium mb-1">Location</h4>
              <p className="text-gray-400 text-sm">{personalInfo.location}</p>
            </div>
            <div className="flex gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 glass-card p-4 flex items-center justify-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 glass-card p-4 flex items-center justify-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <motion.button
                type="submit"
                className="w-full py-4 bg-accent hover:bg-accent-light text-white font-medium rounded-xl transition-all flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-accent/25"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {submitted ? 'Opening Email...' : 'Send Message'}
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
