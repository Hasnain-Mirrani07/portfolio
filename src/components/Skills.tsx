import { motion } from 'framer-motion'
import { FadeIn, StaggerContainer, StaggerItem } from './AnimatedSection'
import { skills } from '../data/portfolio'

const categories = [...new Set(skills.map((s) => s.category))]

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-max">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-accent-light text-sm font-medium tracking-widest uppercase">Expertise</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              A deep toolkit spanning mobile development, backend integration, blockchain, and AI.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <StaggerItem key={category}>
              <div className="glass-card p-6 md:p-8">
                <h3 className="font-display font-semibold text-lg mb-6 text-accent-light">{category}</h3>
                <div className="space-y-5">
                  {skills
                    .filter((s) => s.category === category)
                    .map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-300">{skill.name}</span>
                          <span className="text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-accent to-mint"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
