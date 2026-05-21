// config/projects.ts

export interface Project {
    id: number
    title: string
    category: string
    description: string
    longDescription: string
    tech: string[]
    features: string[]
    liveUrl: string
    githubUrl: string
    image: string
    gradient: string
    year: string
    stats: {
      users: string
      commits: string
      stars: string
    }
  }
  
  export const projectsData: Project[] = [
    {
      id: 1,
      title: "Task Management App",
      category: "Full Stack",
      description: "A collaborative task management tool built with Spring Boot and Angular. Features real-time updates and team workspaces.",
      longDescription: "This was my first major full-stack project where I built a complete task management system. I learned about JWT authentication, REST APIs, and database relationships. The app supports multiple teams, task assignments, and progress tracking.",
      tech: ["Java", "Spring Boot", "Angular", "PostgreSQL", "JWT"],
      features: ["User Authentication", "Team Workspaces", "Task Assignment", "Progress Tracking"],
      liveUrl: "https://your-demo.com",
      githubUrl: "https://github.com/yourusername/task-app",
      image: "/projects/taskapp.jpg",
      gradient: "from-blue-500 to-cyan-500",
      year: "2024",
      stats: { users: "500+", commits: "120+", stars: "45" }
    },
    {
      id: 2,
      title: "Mobile Expense Tracker",
      category: "Mobile",
      description: "Cross-platform expense tracking app built with Flutter. Helps users track daily expenses and manage budgets.",
      longDescription: "Built this app to learn Flutter and mobile development. It uses SQLite for local storage and includes features like expense categorization, charts, and budget alerts. Currently planning to add cloud sync.",
      tech: ["Flutter", "Dart", "SQLite", "GetX", "Firebase"],
      features: ["Expense Tracking", "Budget Alerts", "Charts & Analytics", "Multi-currency"],
      liveUrl: "https://your-demo.com",
      githubUrl: "https://github.com/yourusername/expense-tracker",
      image: "/projects/expense.jpg",
      gradient: "from-green-500 to-emerald-500",
      year: "2024",
      stats: { users: "200+", commits: "80+", stars: "28" }
    },
    {
      id: 3,
      title: "Portfolio Website (This one!)",
      category: "Frontend",
      description: "Modern portfolio website built with Next.js, TailwindCSS, and Framer Motion. Fully dynamic with config files.",
      longDescription: "Built this portfolio to showcase my work while learning Next.js 14, TailwindCSS, and animations. It's fully configurable and responsive. I'm continuously improving it as I learn new technologies.",
      tech: ["Next.js 14", "TypeScript", "TailwindCSS", "Framer Motion", "shadcn/ui"],
      features: ["Dark Mode", "Responsive Design", "Smooth Animations", "Dynamic Content"],
      liveUrl: "https://your-portfolio.com",
      githubUrl: "https://github.com/yourusername/portfolio",
      image: "/projects/portfolio.jpg",
      gradient: "from-purple-500 to-pink-500",
      year: "2025",
      stats: { users: "N/A", commits: "50+", stars: "12" }
    },
    {
      id: 4,
      title: "E-Commerce Backend API",
      category: "Backend",
      description: "RESTful API for an e-commerce platform built with Spring Boot. Includes product management, cart, and order processing.",
      longDescription: "Developed this backend API as a learning project to understand Spring Boot deeper. Implemented JWT authentication, role-based access, pagination, and payment integration simulation. The API serves a React frontend.",
      tech: ["Java", "Spring Boot", "MySQL", "JWT", "Maven", "Swagger"],
      features: ["User Auth & Roles", "Product CRUD", "Shopping Cart", "Order Processing"],
      liveUrl: "https://your-demo.com",
      githubUrl: "https://github.com/yourusername/ecommerce-api",
      image: "/projects/ecommerce.jpg",
      gradient: "from-orange-500 to-red-500",
      year: "2023",
      stats: { users: "N/A", commits: "95+", stars: "32" }
    },
    {
      id: 5,
      title: "Weather Dashboard",
      category: "Frontend",
      description: "Real-time weather dashboard using Angular and OpenWeatherMap API. Shows current weather and forecasts.",
      longDescription: "This project helped me learn Angular deeply - components, services, HTTP client, and RxJS. Fetches live weather data and displays it beautifully. Planning to add location-based recommendations.",
      tech: ["Angular", "TypeScript", "RxJS", "OpenWeather API", "Chart.js"],
      features: ["Live Weather Data", "5-Day Forecast", "Search by City", "Responsive Design"],
      liveUrl: "https://your-demo.com",
      githubUrl: "https://github.com/yourusername/weather-dashboard",
      image: "/projects/weather.jpg",
      gradient: "from-teal-500 to-cyan-500",
      year: "2024",
      stats: { users: "150+", commits: "45+", stars: "18" }
    },
    {
      id: 6,
      title: "Learning Next.js Project",
      category: "Learning",
      description: "A blog platform I'm building while learning Next.js 14, App Router, and Server Components.",
      longDescription: "This is my ongoing learning project where I'm exploring Next.js 14 features like App Router, Server Components, and API routes. I'm documenting my learning journey and building features as I learn.",
      tech: ["Next.js 14", "React", "TypeScript", "MDX", "TailwindCSS"],
      features: ["Blog Posts", "MDX Support", "Dark Mode", "In Progress..."],
      liveUrl: "https://your-demo.com",
      githubUrl: "https://github.com/yourusername/learning-nextjs",
      image: "/projects/learning.jpg",
      gradient: "from-indigo-500 to-purple-500",
      year: "2025",
      stats: { users: "N/A", commits: "30+", stars: "8" }
    }
  ]
  
  export const projectCategories = ["All", "Full Stack", "Mobile", "Frontend", "Backend", "Learning"]