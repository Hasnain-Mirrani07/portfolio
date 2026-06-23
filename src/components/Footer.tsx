import { personalInfo } from '../data/portfolio'
import { Heart } from 'lucide-react'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 py-10">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-display font-semibold text-lg">{personalInfo.name}</p>
            <p className="text-gray-500 text-sm">{personalInfo.title}</p>
          </div>

          <p className="text-gray-500 text-sm flex items-center gap-1">
            Built with <Heart className="w-3.5 h-3.5 text-coral fill-coral" /> using React & Tailwind
          </p>

          <p className="text-gray-600 text-sm">&copy; {year} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
