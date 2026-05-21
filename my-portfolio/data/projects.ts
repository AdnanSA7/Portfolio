import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'taskflow-pro',
    title: 'TaskFlow Pro',
    shortDescription: 'Enterprise task management with real-time collaboration and AI-powered insights',
    fullDescription: `TaskFlow Pro is a comprehensive project management solution built for modern teams. It combines real-time collaboration, advanced analytics, and AI-powered task recommendations to help teams work smarter.

The platform handles thousands of concurrent users with WebSocket connections for instant updates. The AI engine analyzes work patterns to suggest optimal task assignments and deadlines.`,
    tech: ['Next.js 14', 'TypeScript', 'PostgreSQL', 'Redis', 'WebSockets', 'TailwindCSS', 'Prisma', 'OpenAI API'],
    liveUrl: 'https://taskflow-pro.demo.com',
    githubUrl: 'https://github.com/yourusername/taskflow-pro',
    image: '/projects/taskflow-pro/main.jpg',
    images: ['/projects/taskflow-pro/1.jpg', '/projects/taskflow-pro/2.jpg'],
    features: [
      'Real-time task updates with WebSocket connections',
      'AI-powered task prioritization and assignment',
      'Interactive dashboards with 10+ chart types',
      'Team collaboration with comments and mentions',
      'Advanced search with Elasticsearch',
      'Role-based access control (RBAC)',
      'Email notifications and reminders',
      'RESTful API with Swagger documentation'
    ],
    challenges: 'The biggest challenge was maintaining real-time consistency across multiple users editing the same task. We implemented CRDTs (Conflict-free Replicated Data Types) to ensure eventual consistency without locking.',
    year: 2024,
    category: 'fullstack'
  },
  {
    id: 'ai-content-studio',
    title: 'AI Content Studio',
    shortDescription: 'OpenAI-powered content generation platform with fine-tuning',
    fullDescription: `Content Studio leverages GPT-4 to help marketers and writers generate high-quality content faster. The platform includes fine-tuning capabilities, allowing businesses to train models on their brand voice.`,
    tech: ['Python', 'FastAPI', 'React', 'Redis', 'Celery', 'PostgreSQL', 'Docker', 'AWS'],
    liveUrl: 'https://ai-content-studio.demo.com',
    githubUrl: 'https://github.com/yourusername/ai-content-studio',
    image: '/projects/ai-studio/main.jpg',
    features: [
      'Multiple AI models (GPT-4, Claude, Llama 2)',
      'Fine-tuning interface for custom models',
      'Content templates for blogs, ads, emails',
      'SEO optimization suggestions',
      'Team workspace with sharing',
      'API access with rate limiting',
      'Usage analytics and cost tracking'
    ],
    challenges: 'Managing API costs and response times required implementing a smart caching layer and request queuing system with Celery.',
    year: 2024,
    category: 'fullstack'
  },
  {
    id: 'marketplace-platform',
    title: 'Marketplace Platform',
    shortDescription: 'Full-featured e-commerce platform with Stripe integration',
    fullDescription: `A complete marketplace solution allowing vendors to list products and accept payments. Includes inventory management, order tracking, review system, and admin dashboard.`,
    tech: ['Node.js', 'Express', 'MongoDB', 'Stripe', 'React Native', 'Redis', 'RabbitMQ'],
    liveUrl: 'https://marketplace.demo.com',
    githubUrl: 'https://github.com/yourusername/marketplace',
    image: '/projects/marketplace/main.jpg',
    features: [
      'Multi-vendor marketplace support',
      'Secure payment processing with Stripe Connect',
      'Real-time inventory management',
      'Automated payout system for vendors',
      'Review and rating system',
      'Mobile app with React Native',
      'Admin dashboard with analytics',
      'Order tracking and notifications'
    ],
    challenges: 'Building a reliable payout system that handles refunds, disputes, and international payments required careful state management and idempotent API design.',
    year: 2023,
    category: 'fullstack'
  }
]