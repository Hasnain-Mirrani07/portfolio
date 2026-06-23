import { motion } from 'framer-motion'
import { ExternalLink, Download, Star } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from './AnimatedSection'
import { projects } from '../data/portfolio'

export function Projects() {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-accent-light text-sm font-medium tracking-widest uppercase">Portfolio</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Live apps on App Store & Play Store — trusted by millions of users worldwide.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-12">
          {featured.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} large />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn>
          <h3 className="font-display text-2xl font-semibold mb-8 text-center text-gray-300">
            More Projects
          </h3>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {others.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  large = false,
}: {
  project: (typeof projects)[0]
  large?: boolean
}) {
  return (
    <motion.div
      className={`glass-card overflow-hidden group h-full flex flex-col ${
        large ? 'md:min-h-[320px]' : ''
      }`}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

      <div className="p-6 md:p-8 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{project.icon}</span>
            <div>
              <h3 className="font-display font-semibold text-xl">{project.title}</h3>
              <span className="text-xs text-accent-light font-medium">{project.category}</span>
            </div>
          </div>
          {project.featured && (
            <Star className="w-5 h-5 text-amber-400 fill-amber-400 shrink-0" />
          )}
        </div>

        <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

        {project.downloads && (
          <div className="flex items-center gap-2 text-mint text-sm font-medium mb-4">
            <Download className="w-4 h-4" />
            {project.downloads} downloads
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-xs rounded-lg bg-white/5 text-gray-400 border border-white/5"
            >
              {t}
            </span>
          ))}
        </div>

        {project.links && project.links.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-white/5">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-accent-light hover:text-white transition-colors group/link"
              >
                {link.label}
                <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
