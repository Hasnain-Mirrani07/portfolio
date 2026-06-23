import { FadeIn, StaggerContainer, StaggerItem } from './AnimatedSection'
import { experienceDomains } from '../data/portfolio'

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-max">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-accent-light text-sm font-medium tracking-widest uppercase">Domains</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
              Industry <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Delivering production apps across diverse industries and complex technical challenges.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experienceDomains.map((exp) => (
            <StaggerItem key={exp.domain}>
              <div className="glass-card p-6 h-full group hover:border-accent/30 transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">
                  {exp.icon}
                </div>
                <h3 className="font-display font-semibold text-xl mb-2">{exp.domain}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{exp.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
