export interface ProjectStats {
  scale: string
  commits: string
  visibility: string
}

export interface Project {
  id: number
  title: string
  shortTitle: string
  category: string
  description: string
  longDescription: string
  role: string
  tech: string[]
  features: string[]
  liveUrl: string
  githubUrl: string
  image: string
  accent: string
  year: string
  stats: ProjectStats
  highlights: string[]
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Rent A Car Automation — Web Application',
    shortTitle: 'Rent A Car · Web',
    category: 'Full Stack',
    description:
      'A modern car rental management web application built with Angular and Spring Boot, featuring a responsive admin experience and real-time data management.',
    longDescription:
      'A full-featured car rental web platform built with Angular and Spring Boot. I implemented vehicle management, booking workflows, customer management, and administrative operations, and designed the responsive UI with PrimeNG, Tailwind CSS, and Flowbite. MySQL powers storage with real-time synchronization.',
    role: 'Full-stack development — Angular frontend, Spring Boot backend, and database design',
    tech: ['Angular', 'Spring Boot', 'MySQL', 'PrimeNG', 'Tailwind CSS', 'Flowbite', 'TypeScript'],
    features: [
      'Vehicle Management',
      'Booking System',
      'Customer Management',
      'Admin Dashboard',
      'Responsive Design',
      'REST API Integration',
    ],
    liveUrl: '',
    githubUrl: '',
    image: '/projects/rent-car-web.jpg',
    accent: 'from-sky-500 to-cyan-500',
    year: '2024',
    stats: {
      scale: 'Production',
      commits: '150+',
      visibility: 'Private',
    },
    highlights: ['Full-stack architecture', 'Admin dashboard', 'Real-time data sync'],
  },
  {
    id: 2,
    title: 'Rent A Car Automation — Mobile Application',
    shortTitle: 'Rent A Car · Mobile',
    category: 'Mobile',
    description:
      'Cross-platform mobile car rental app built with Flutter, sharing the same Spring Boot backend as the web platform.',
    longDescription:
      'A Flutter-based mobile application for car rental services, sharing the Spring Boot backend with its web counterpart. I implemented vehicle browsing, booking requests, customer account management, and real-time backend synchronization — focused on a smooth, responsive experience across Android and iOS.',
    role: 'Mobile development with Flutter, integrated against an existing Spring Boot API',
    tech: ['Flutter', 'Dart', 'Spring Boot', 'MySQL', 'REST API'],
    features: [
      'Cross-Platform Mobile App',
      'Vehicle Search & Booking',
      'User Account Management',
      'Real-Time Data Sync',
      'API Integration',
      'Mobile-Optimized UI',
    ],
    liveUrl: '',
    githubUrl: '',
    image: '/projects/rent-car-mobile.jpg',
    accent: 'from-emerald-500 to-teal-500',
    year: '2025',
    stats: {
      scale: 'Production',
      commits: '120+',
      visibility: 'Private',
    },
    highlights: ['Cross-platform', 'Shared backend', 'Mobile-first UX'],
  },
  {
    id: 3,
    title: 'E-Prescription & Medical Store Management System',
    shortTitle: 'E-Prescription',
    category: 'Backend',
    description:
      'Healthcare platform for digital prescriptions, pharmacy operations, and medical inventory management.',
    longDescription:
      'As a backend developer on a professional healthcare solution, I designed the backend architecture with Spring Boot, built RESTful APIs, and managed database operations with MS SQL and JPA. I collaborated closely with React frontend developers, performed API testing and debugging with Postman, and maintained version control through Git and GitHub.',
    role: 'Backend development — REST APIs, database design (MS SQL + JPA), API testing',
    tech: ['Spring Boot', 'React', 'MS SQL Server', 'JPA', 'Git', 'GitHub', 'Postman'],
    features: [
      'E-Prescription Management',
      'Medical Store Operations',
      'RESTful APIs',
      'Role-Based Access',
      'Database Management',
      'Frontend Integration',
    ],
    liveUrl: '',
    githubUrl: '',
    image: '/projects/e-prescription.jpg',
    accent: 'from-emerald-500 to-green-600',
    year: '2025',
    stats: {
      scale: 'Enterprise',
      commits: '300+',
      visibility: 'Private',
    },
    highlights: ['Enterprise healthcare', 'Backend architecture', 'API design'],
  },
  {
    id: 4,
    title: 'ERP Supply Chain Management System',
    shortTitle: 'ERP · SCM',
    category: 'Full Stack',
    description:
      'Enterprise resource planning solution focused on supply chain and business process management.',
    longDescription:
      'I contributed to an ERP software project focused on the Supply Chain Management module, working on both frontend and backend components to improve business workflows, reporting, and overall system performance. I collaborated with a development team to build scalable enterprise solutions.',
    role: 'Frontend and backend development on the Supply Chain Management module',
    tech: ['Java Servlet', 'JavaScript', 'MS SQL Server', 'Crystal Reports'],
    features: [
      'Supply Chain Management',
      'Inventory Tracking',
      'Business Reporting',
      'Enterprise Workflows',
      'Database Integration',
      'ERP Modules',
    ],
    liveUrl: '',
    githubUrl: '',
    image: '/projects/erp.jpg',
    accent: 'from-indigo-500 to-violet-500',
    year: '2025',
    stats: {
      scale: 'Enterprise',
      commits: '250+',
      visibility: 'Private',
    },
    highlights: ['Enterprise ERP', 'SCM module', 'Reporting'],
  },
  {
    id: 5,
    title: 'ATM Management System',
    shortTitle: 'ATM Management',
    category: 'Desktop Application',
    description:
      'Java Swing-based ATM simulation with secure transaction and account management.',
    longDescription:
      'A desktop ATM application built with Java Swing and MySQL that simulates real-world banking operations — account authentication, balance inquiries, deposits, withdrawals, and transaction history. I put special attention on security and user experience.',
    role: 'Desktop application development with Java Swing',
    tech: ['Java', 'Java Swing', 'MySQL', 'JDBC'],
    features: [
      'User Authentication',
      'Balance Inquiry',
      'Cash Withdrawal',
      'Deposit Transactions',
      'Transaction History',
      'Database Integration',
    ],
    liveUrl: '',
    githubUrl: '',
    image: '/projects/atm.jpg',
    accent: 'from-amber-500 to-orange-500',
    year: '2024',
    stats: {
      scale: 'Academic',
      commits: '80+',
      visibility: 'N/A',
    },
    highlights: ['Java Swing', 'Secure banking flow', 'JDBC'],
  },
  {
    id: 6,
    title: 'Management Business Dashboard',
    shortTitle: 'Business Dashboard',
    category: 'Full Stack',
    description:
      'Business intelligence dashboard for monitoring KPIs, operational metrics, and management reports.',
    longDescription:
      'I designed and developed both the frontend and backend of a business management dashboard. I built server-side logic with Java Servlet and interactive interfaces with HTML, CSS, JavaScript, and Chart.js, implementing data visualization, reporting, and real-time business insights for management decision-making.',
    role: 'Full-stack development — Java Servlet backend and interactive data-visualization frontend',
    tech: ['Java Servlet', 'HTML', 'CSS', 'JavaScript', 'Chart.js'],
    features: [
      'Interactive Dashboard',
      'Business KPI Monitoring',
      'Data Visualization',
      'Management Reports',
      'Responsive UI',
      'Backend Data Processing',
    ],
    liveUrl: '',
    githubUrl: '',
    image: '/projects/business-dashboard.jpg',
    accent: 'from-blue-500 to-indigo-600',
    year: '2025',
    stats: {
      scale: 'Enterprise',
      commits: '100+',
      visibility: 'Private',
    },
    highlights: ['KPIs & reporting', 'Chart.js visuals', 'Full stack'],
  },
  {
    id: 7,
    title: 'Multi-Level Approval Workflow System',
    shortTitle: 'Approval Workflow',
    category: 'Full Stack',
    description:
      'Enterprise workflow system supporting multi-stage approval processes and automated decision routing.',
    longDescription:
      'I developed frontend and backend components of a multi-level approval system, designing workflow logic with MS SQL stored procedures and building interfaces for request submission, approval tracking, and workflow management. The system supports hierarchical approvals, role-based permissions, audit trails, and automated status transitions.',
    role: 'Full-stack development — workflow logic, stored procedures, and approval interfaces',
    tech: ['Java Servlet', 'JavaScript', 'HTML', 'CSS', 'MS SQL Server', 'Stored Procedures'],
    features: [
      'Multi-Level Approval Workflow',
      'Role-Based Access Control',
      'Approval Tracking',
      'Audit Logs',
      'Automated Workflow Routing',
      'Stored Procedure Optimization',
    ],
    liveUrl: '',
    githubUrl: '',
    image: '/projects/approval-system.jpg',
    accent: 'from-yellow-500 to-orange-600',
    year: '2025',
    stats: {
      scale: 'Enterprise',
      commits: '80+',
      visibility: 'Private',
    },
    highlights: ['Workflow logic', 'Stored procedures', 'Audit trails'],
  },
]

export const projectCategories = ['All', 'Full Stack', 'Mobile', 'Backend', 'Desktop Application']
