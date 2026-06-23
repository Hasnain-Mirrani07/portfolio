import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react'
import { WhatsAppIcon } from './WhatsAppIcon'
import { personalInfo, stats } from '../data/portfolio'

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center section-padding pt-32">
      <div className="container-max w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-gray-300 mb-8"
          >
            <Sparkles className="w-4 h-4 text-mint" />
            <span>Available for new opportunities</span>
            <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
          </motion.div>

          <motion.h1
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {personalInfo.name.split(' ')[0]}
            <br />
            <span className="gradient-text">{personalInfo.name.split(' ')[1]}</span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-gray-400 font-light mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {personalInfo.title}
          </motion.p>

          <motion.p
            className="text-lg text-gray-500 max-w-2xl mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Crafting high-performance mobile apps with{' '}
            <span className="text-white">Flutter</span>,{' '}
            <span className="text-white">iOS</span> &{' '}
            <span className="text-white">Android</span> — from Fintech wallets with{' '}
            <span className="text-mint font-medium">2M+ downloads</span> to Blockchain & AI-powered solutions.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <a
              href="#projects"
              className="group px-8 py-4 bg-accent hover:bg-accent-light text-white font-medium rounded-2xl transition-all hover:shadow-xl hover:shadow-accent/30 flex items-center gap-2"
            >
              View My Work
              <motion.span
                className="inline-block"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </a>
            <a
              href="#contact"
              className="px-8 py-4 glass hover:bg-white/10 text-white font-medium rounded-2xl transition-all"
            >
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            className="flex gap-4 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {[
              { icon: Github, href: personalInfo.github, label: 'GitHub' },
              { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
              { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
              { icon: WhatsAppIcon, href: personalInfo.whatsappUrl, label: 'WhatsApp' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className={`w-11 h-11 glass rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110 ${label === 'WhatsApp' ? 'hover:text-mint' : ''}`}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="glass-card p-5 md:p-6 text-center group hover:border-accent/30 transition-colors"
              whileHover={{ y: -4 }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="font-display text-3xl md:text-4xl font-bold gradient-text mb-1">
                {stat.value}
                <span className="text-accent-light">{stat.suffix}</span>
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.a
          href="#about"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 hover:text-white transition-colors hidden md:flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.a>
      </div>
    </section>
  )
}
