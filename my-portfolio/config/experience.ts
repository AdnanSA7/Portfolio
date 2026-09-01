export interface ExperienceItem {
  id: number
  role: string
  company: string
  period: string
  duration: string
  type: string
  summary: string
  highlights: string[]
  tech: string[]
  current?: boolean
}

export const experience: ExperienceItem[] = [
  {
    id: 1,
    role: 'Backend Developer',
    company: 'E-Prescription & Medical Store Management System',
    period: '2025',
    duration: 'Healthcare platform',
    type: 'Backend · Official',
    summary:
      'Designed and implemented the backend for a professional healthcare solution — RESTful APIs with Spring Boot, database operations with MS SQL and JPA, and close collaboration with React frontend developers.',
    highlights: [
      'Built REST API layer and JPA-backed data models',
      'Implemented role-based access and medical store operations',
      'Validated and debugged APIs with Postman',
    ],
    tech: ['Spring Boot', 'React', 'MS SQL Server', 'JPA', 'Postman'],
  },
  {
    id: 2,
    role: 'Software Engineer',
    company: 'Enterprise ERP — Supply Chain & Business Systems',
    period: '2025',
    duration: 'Enterprise systems',
    type: 'Full Stack · Enterprise',
    summary:
      'Contributed to enterprise software spanning an ERP Supply Chain Management module, a management business dashboard, and a multi-level approval workflow system.',
    highlights: [
      'Built frontend and backend of an SCM (Supply Chain Management) ERP module',
      'Developed a Java Servlet + Chart.js management dashboard for KPI monitoring',
      'Designed multi-level approval workflow logic with MS SQL stored procedures',
    ],
    tech: ['Java Servlet', 'JavaScript', 'MS SQL Server', 'Chart.js', 'Crystal Reports'],
  },
  {
    id: 3,
    role: 'Full Stack Developer',
    company: 'Rent A Car Automation',
    period: '2024 – 2025',
    duration: 'Web + Mobile product',
    type: 'Full Stack · Product',
    summary:
      'Built a complete car rental product with a web platform (Angular + Spring Boot + MySQL) and a companion cross-platform mobile app in Flutter sharing the same backend.',
    highlights: [
      'Shipped an Angular + Spring Boot web application with an admin dashboard',
      'Built a Flutter mobile app against the same Spring Boot API',
      'Designed a responsive UI with PrimeNG, Tailwind, and Flowbite',
    ],
    tech: ['Angular', 'Spring Boot', 'Flutter', 'MySQL', 'REST API'],
  },
]
