import { FadeIn } from './AnimatedSection'
import { personalInfo } from '../data/portfolio'
import { Smartphone, Globe, Rocket } from 'lucide-react'

const highlights = [
  {
    icon: Smartphone,
    title: 'Cross-Platform Expert',
    desc: 'Flutter, iOS (Swift), Android (Kotlin) — one codebase, native performance.',
  },
  {
    icon: Globe,
    title: 'Global Fintech',
    desc: 'Apps live in 8+ countries across Africa with millions of active users.',
  },
  {
    icon: Rocket,
    title: 'End-to-End Delivery',
    desc: 'From architecture to App Store deployment — full product lifecycle ownership.',
  },
]

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-accent-light text-sm font-medium tracking-widest uppercase">About Me</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
              Who I <span className="gradient-text">Am</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn delay={0.1}>
            <div className="relative">
              <div className="glass-card p-8 md:p-10">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent via-mint to-coral flex items-center justify-center text-3xl font-display font-bold mb-6">
                  HM
                </div>
                <h3 className="font-display text-2xl font-semibold mb-4">{personalInfo.name}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{personalInfo.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {['Flutter', 'iOS', 'Android', 'Fintech', 'Blockchain', 'AI'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent-light border border-accent/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-gradient-to-br from-accent/20 to-mint/10 blur-sm" />
            </div>
          </FadeIn>

          <div className="space-y-6">
            {highlights.map((item, i) => (
              <FadeIn key={item.title} delay={0.15 + i * 0.1}>
                <div className="glass-card p-6 flex gap-5 group hover:border-accent/20 transition-all hover:translate-x-1">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <item.icon className="w-6 h-6 text-accent-light" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
