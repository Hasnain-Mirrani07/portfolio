export interface StoreLink {
  label: string
  url: string
}

export interface Project {
  id: string
  title: string
  category: string
  description: string
  downloads?: string
  tech: string[]
  links?: StoreLink[]
  featured?: boolean
  gradient: string
  icon: string
}

export interface Experience {
  domain: string
  description: string
  icon: string
}

export const personalInfo = {
  name: 'Hasnain Mirrani',
  title: 'Senior Flutter Developer',
  tagline: 'Building world-class mobile experiences',
  bio: `I'm a Senior Flutter Developer with extensive experience building production-grade mobile applications across Fintech, Telco, Blockchain, AI, and E-commerce domains. I've shipped apps with millions of combined downloads across multiple countries, delivering secure, scalable, and beautiful user experiences on iOS and Android.`,
  email: 'hasnainmirrani07@gmail.com',
  github: 'https://github.com/Hasnain-Mirrani07',
  linkedin: 'https://www.linkedin.com/in/hasnain-mirrani',
  location: 'Pakistan',
}

export const stats = [
  { label: 'Apps Shipped', value: '15+', suffix: '' },
  { label: 'Total Downloads', value: '2', suffix: 'M+' },
  { label: 'Countries', value: '8+', suffix: '' },
  { label: 'Years Experience', value: '5+', suffix: '' },
]

export const skills = [
  { name: 'Flutter & Dart', level: 98, category: 'Mobile' },
  { name: 'iOS (Swift)', level: 85, category: 'Mobile' },
  { name: 'Android (Kotlin)', level: 88, category: 'Mobile' },
  { name: 'Firebase', level: 90, category: 'Backend' },
  { name: 'REST APIs', level: 92, category: 'Backend' },
  { name: 'Solidity / Web3', level: 80, category: 'Blockchain' },
  { name: 'Google Maps SDK', level: 90, category: 'Integration' },
  { name: 'AI / ML Integration', level: 85, category: 'AI' },
  { name: 'State Management', level: 95, category: 'Architecture' },
  { name: 'CI/CD', level: 82, category: 'DevOps' },
]

export const experienceDomains: Experience[] = [
  {
    domain: 'Fintech',
    description: 'Mobile money, digital wallets, and payment solutions for multiple African markets with millions of active users.',
    icon: '💳',
  },
  {
    domain: 'Telco & Selfcare',
    description: 'Telecom self-care apps enabling bill payments, data bundles, account management, and customer support.',
    icon: '📱',
  },
  {
    domain: 'Ride Booking',
    description: 'Google Maps integrated ride-hailing apps with real-time tracking, fare calculation, and driver matching.',
    icon: '🚗',
  },
  {
    domain: 'Blockchain',
    description: 'Decentralized voting and lottery systems using Solidity, Web3, and Infura for on-chain event monitoring.',
    icon: '⛓️',
  },
  {
    domain: 'AI & AI Agents',
    description: 'Intelligent mobile applications powered by AI models and autonomous agent workflows.',
    icon: '🤖',
  },
  {
    domain: 'E-Commerce',
    description: 'Full-featured shopping platforms with cart, checkout, payments, and order tracking.',
    icon: '🛒',
  },
]

export const projects: Project[] = [
  {
    id: 'mixx',
    title: 'Mixx',
    category: 'Fintech',
    description:
      'A leading mobile money and digital wallet application serving Senegal with seamless payments, transfers, and financial services.',
    downloads: '1M+',
    tech: ['Flutter', 'Firebase', 'REST API', 'Payment Gateway'],
    links: [
      { label: 'App Store', url: 'https://apps.apple.com/pk/app/mixx/id1508891088' },
      { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=sn.free.app' },
    ],
    featured: true,
    gradient: 'from-violet-600 to-indigo-600',
    icon: '💰',
  },
  {
    id: 'mixx-tanzania',
    title: 'Mixx Tanzania',
    category: 'Fintech',
    description:
      'Mobile financial services app for Tanzania, enabling digital payments, airtime top-ups, and money transfers at scale.',
    downloads: '1M+',
    tech: ['Flutter', 'Firebase', 'Telco Integration', 'MFS'],
    links: [
      { label: 'App Store', url: 'https://apps.apple.com/pk/app/mixx/id1508891088' },
      { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=tz.tigo.mfsapp' },
    ],
    featured: true,
    gradient: 'from-blue-600 to-cyan-500',
    icon: '🇹🇿',
  },
  {
    id: 'mixx-togo',
    title: 'Mixx Togo',
    category: 'Fintech',
    description:
      'Digital wallet and mobile money platform for Togo, providing secure financial transactions and bill payments.',
    downloads: '100K+',
    tech: ['Flutter', 'REST API', 'Payment SDK', 'Push Notifications'],
    links: [
      { label: 'App Store', url: 'https://apps.apple.com/pk/app/mixx-togo/id6443914936' },
      { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=tg.togocom.tmoney' },
    ],
    featured: true,
    gradient: 'from-emerald-600 to-teal-500',
    icon: '🇹🇬',
  },
  {
    id: 'mvola',
    title: 'Mvola',
    category: 'Fintech',
    description:
      'Telma Mvola mobile money app for Madagascar — enabling transfers, payments, and financial inclusion for millions.',
    downloads: '100K+',
    tech: ['Flutter', 'Firebase', 'Telco API', 'Biometrics'],
    links: [
      { label: 'App Store', url: 'https://apps.apple.com/pk/app/mvola/id1496566692' },
      { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=mg.telma.mvolaapp' },
    ],
    featured: true,
    gradient: 'from-orange-500 to-red-500',
    icon: '🇲🇬',
  },
  {
    id: 'mvola-comores',
    title: 'Mvola Comores',
    category: 'Fintech',
    description:
      'Mobile money solution for Comoros islands, extending Telma financial services to the Comorian market.',
    downloads: '10K+',
    tech: ['Flutter', 'REST API', 'Localization', 'Secure Storage'],
    links: [
      { label: 'App Store', url: 'https://apps.apple.com/pk/app/mvola-comores/id6472446298' },
      { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=mg.telma.cmrmvolaapp' },
    ],
    gradient: 'from-amber-500 to-yellow-500',
    icon: '🇰🇲',
  },
  {
    id: 'piqla',
    title: 'PIQLA Ride Booking',
    category: 'Ride Hailing',
    description:
      'Full-featured ride-hailing application with Google Maps integration, real-time driver tracking, fare estimation, and seamless booking experience.',
    tech: ['Flutter', 'Google Maps', 'Real-time Tracking', 'Firebase'],
    links: [
      { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.piqla.customer' },
    ],
    gradient: 'from-purple-600 to-pink-500',
    icon: '🚕',
  },
  {
    id: 'tcs-tracker',
    title: 'TCS Tracker',
    category: 'Logistics',
    description:
      'Parcel tracking application — assign a tracking number to monitor detailed shipment history, dates, times, and city locations with API integration and authentication.',
    downloads: '50K+',
    tech: ['Flutter', 'REST API', 'Local Storage', 'Authentication'],
    gradient: 'from-sky-500 to-blue-600',
    icon: '📦',
  },
  {
    id: 'ismmart',
    title: 'ISMMART',
    category: 'E-Commerce',
    description:
      'E-commerce mobile application with product catalog, shopping cart, secure checkout, and order management for a growing user base.',
    downloads: '30K+',
    tech: ['Flutter', 'Firebase', 'Payment Integration', 'Push Notifications'],
    gradient: 'from-rose-500 to-orange-400',
    icon: '🛍️',
  },
  {
    id: 'blockchain-voting',
    title: 'Blockchain Voting System',
    category: 'Blockchain',
    description:
      'Decentralized voting platform built with Solidity smart contracts, Web3 library for Flutter, and Infura integration to listen to all blockchain transaction events in real-time.',
    tech: ['Flutter', 'Solidity', 'Web3', 'Infura', 'Smart Contracts'],
    gradient: 'from-indigo-600 to-purple-700',
    icon: '🗳️',
  },
  {
    id: 'blockchain-lottery',
    title: 'Blockchain Lottery System',
    category: 'Blockchain',
    description:
      'Transparent lottery system on blockchain using Solidity smart contracts with Infura connectivity and Flutter frontend for a trustless gaming experience.',
    tech: ['Flutter', 'Solidity', 'Infura', 'Web3', 'Ethereum'],
    gradient: 'from-fuchsia-600 to-violet-600',
    icon: '🎰',
  },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
