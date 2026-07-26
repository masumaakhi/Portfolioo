// src/app/data/projects.js
import { assets } from "../assets/assets";

const projects = [
  {
    id: "1",
    slug: "mohul-online-shop",
    type: "client",
    image: assets.mohul,
    images: [assets.mohul1, assets.mohul2, assets.mohul3, assets.mohul4, assets.mohul5],
    title: "Mohul Online Shop",
    description: "A comprehensive e-commerce website where users can browse, search, and purchase products with a modern checkout experience.",
    tasks: ["Nextjs", "Nestjs", "PostgreSQL", "TailwindCSS", "TypeScript", "Redis"],
    viewLink: "https://mohulofficial.com/",
    githubLink: "https://github.com/masumaakhi/",
    industry: "E-Commerce",
    duration: "1 Months",
    status: "Completed",
    role: "Full-Stack Developer",
    teamSize: "1",
    overview: "Mohul Online Shop is a robust e-commerce platform built to handle high traffic and provide a seamless shopping experience. The platform features an intuitive admin dashboard, real-time inventory tracking, and a highly optimized storefront.",
    features: [
      "Advanced product search and filtering",
      "Secure payment gateway integration",
      "Real-time inventory management",
      "Admin dashboard with analytics",
      "Responsive, mobile-first design"
    ],
    techStack: [
      { name: "Next.js 14", category: "Frontend" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "NestJS", category: "Backend" },
      { name: "PostgreSQL", category: "Database" },
      { name: "Redis", category: "Caching" }
    ],
    clientInfo: {
      brief: "The client needed a modern, fast, and secure e-commerce platform to replace their legacy system and improve conversion rates.",
      goals: "Increase mobile conversions by 30% and reduce page load times.",
      solution: "Implemented a Next.js App Router storefront for optimal SEO and performance, backed by a scalable NestJS API.",
      results: "Page load times decreased by 40%, and mobile sales increased by 35% in the first quarter."
    },
    challenges: [
      {
        problem: "Handling high concurrency during flash sales.",
        solution: "Implemented Redis caching for product catalogs and optimistic UI updates for the cart."
      }
    ],
    timeline: [
      { phase: "Discovery & Design", duration: "2 Weeks" },
      { phase: "Frontend Development", duration: "4 Weeks" },
      { phase: "Backend & Integration", duration: "4 Weeks" },
      { phase: "Testing & Deployment", duration: "2 Weeks" }
    ]
  },
  {
    id: "2",
    slug: "fusion-recipe-website",
    type: "Demo",
    image: assets.p4,
    images: [assets.recipe1, assets.recipe2, assets.recipe3, assets.recipe4, assets.recipe5],
    title: "Fusion - Recipe Website",
    description: "A comprehensive recipes website where users can browse various recipes and find the best recipes for cooking.",
    tasks: ["Nextjs", "MongoDb", "HTML", "CSS", "TailwindCSS", "JavaScript"],
    viewLink: "https://nextjsrecipes.netlify.app",
    githubLink: "https://github.com/masumaakhi/nextjsrecipes",
    industry: "Food & Beverage",
    duration: "1.5 Months",
    status: "Completed",
    role: "Frontend Developer",
    teamSize: "1",
    overview: "Fusion is a passion project born out of a love for cooking. It allows users to discover new recipes, save their favorites, and even submit their own culinary creations to a growing community.",
    features: [
      "Dynamic recipe search and category filtering",
      "User authentication and profiles",
      "Interactive recipe submission form",
      "Responsive masonry grid for recipe display"
    ],
    techStack: [
      { name: "Next.js", category: "Frontend" },
      { name: "MongoDB", category: "Database" },
      { name: "Tailwind CSS", category: "Styling" }
    ],
    learning: {
      whyBuilt: "I wanted to learn Next.js App Router mechanics while building something I could use in my daily life.",
      problem: "Existing recipe sites are cluttered with ads and have poor UX.",
      idea: "Create a minimalist, fast, and user-centric recipe discovery platform.",
      outcomes: "Gained deep understanding of Next.js Server Components, MongoDB integration, and modern UI/UX principles.",
      futurePlans: "Implement a meal planner feature and AI-driven recipe recommendations."
    }
  },
  {
    id: "3",
    slug: "lifeos-productivity",
    type: "personal",
    image: assets.lifeos,
    images: [assets.lifeos1, assets.lifeos2, assets.lifeos3, assets.lifeos4, assets.lifeos5, assets.lifeos6, assets.lifeos7],
    title: "LifeOS - Personal Productivity & Study Management Platform",
    description: "A modern full-stack productivity platform that helps users manage tasks, study schedules, habits, budgets, and personal goals from a single dashboard.",
    tasks: ["Nextjs", "MongoDb", "TypeScript", "TailwindCSS"],
    viewLink: "https://lifeos-seja.vercel.app",
    githubLink: "https://github.com/masumaakhi",
    industry: "Productivity",
    duration: "10 days",
    status: "Completed",
    role: "Full-Stack Developer",
    teamSize: "1",
    overview: "LifeOS is an all-in-one productivity suite designed to replace multiple disconnected apps. It features task management, habit tracking, and study scheduling in a unified, beautifully designed interface.",
    features: [
      "Drag-and-drop Kanban boards",
      "Pomodoro timer with study analytics",
      "Financial budget tracker",
      "Habit streak visualization"
    ],
    techStack: [
      { name: "Next.js 14", category: "Framework" },
      { name: "TypeScript", category: "Language" },
      { name: "MongoDB", category: "Database" },
      { name: "Tailwind CSS", category: "Styling" }
    ],
    learning: {
      whyBuilt: "I needed a unified system for my own productivity and wanted to master TypeScript in a complex React application.",
      problem: "Using 4 different apps for tasks, habits, notes, and timers caused too much context switching.",
      idea: "A single 'operating system' for daily life management.",
      outcomes: "Mastered advanced React state management, complex data modeling in MongoDB, and TypeScript utility types.",
      futurePlans: "Add offline support via PWA and a mobile application."
    }
  },
  {
    id: "4",
    slug: "ecommerce-shop",
    type: "demo",
    image: assets.headcom1,
    images: [assets.headcom1],
    title: "E-Commerce Shop Website",
    description: "Responsive e-commerce app with product listing, cart, and secure checkout optimized for speed.",
    tasks: ["Reactjs", "TailwindCSS", "Firebase", "JavaScript"],
    viewLink: "https://reactjsecomer.netlify.app",
    githubLink: "https://github.com/masumaakhi/reactjs.e-com",
    industry: "E-Commerce",
    duration: "3 Weeks",
    status: "Completed",
    role: "Frontend Developer",
    teamSize: "1",
    overview: "A technical demonstration of a high-performance React frontend integrated with Firebase for real-time data sync and authentication.",
    features: [
      "Real-time cart synchronization",
      "Firebase Google Authentication",
      "Optimized product image loading",
      "Mock checkout flow"
    ],
    techStack: [
      { name: "React", category: "Frontend" },
      { name: "Firebase", category: "Backend/Auth" },
      { name: "Tailwind CSS", category: "Styling" }
    ],
    demoInfo: {
      purpose: "Demonstrate proficiency in React state management and Firebase integration.",
      learningGoals: "Master Redux/Context API for cart management and Firebase auth flows.",
      exploration: "Explored different ways to structure complex React state without prop drilling.",
      outcomes: "Successfully implemented a robust global state management solution for the shopping cart.",
      futureImprovements: "Migrate to Next.js for SSR and add Stripe payment integration."
    }
  },
  {
    id: "5",
    slug: "online-course-module",
    type: "demo",
    image: assets.p7,
    images: [assets.course1, assets.course2, assets.course3],
    title: "Online Course Module System",
    description: "Full-stack authentication system, two Way of Payment Getway, CRUD Module.",
    tasks: ["HTML", "CSS", "JavaScript", "Reactjs", "Tailwindcss", "Express.js", "Node.js"],
    viewLink: "https://online-course-module-front.netlify.app",
    githubLink: "https://github.com/masumaakhi/Online-Course-Module-System",
    industry: "EdTech",
    duration: "4 Weeks",
    status: "Completed",
    role: "Full-Stack Developer",
    teamSize: "1",
    overview: "An educational platform module focused on secure content delivery, payment processing, and user authentication.",
    features: [
      "JWT-based secure authentication",
      "Stripe and PayPal integration",
      "Admin panel for course management",
      "Student progress tracking"
    ],
    techStack: [
      { name: "React", category: "Frontend" },
      { name: "Node.js", category: "Backend" },
      { name: "Express", category: "API" },
      { name: "Tailwind CSS", category: "Styling" }
    ],
    demoInfo: {
      purpose: "Build a complete MERN stack application with real-world payment integrations.",
      learningGoals: "Understand payment gateway workflows and secure JWT implementation.",
      exploration: "Explored Stripe webhooks and PayPal SDKs.",
      outcomes: "Built a secure, production-ready payment flow.",
      futureImprovements: "Add video streaming capabilities and interactive quizzes."
    }
  },
  {
    id: "6",
    slug: "auth-system",
    type: "open-source",
    image: assets.p3,
    images: [assets.p3, assets.dashboard1],
    title: "Authentication System",
    description: "Full-stack authentication system featuring JWT login, Google sign-in, and secure password reset.",
    tasks: ["HTML", "CSS", "JavaScript", "Reactjs", "Tailwindcss", "Express.js", "Node.js"],
    viewLink: "https://gleeful-dasik-8674b2.netlify.app",
    githubLink: "https://github.com/masumaakhi/mern-authenticate",
    industry: "Developer Tools",
    duration: "2 Weeks",
    status: "Completed",
    role: "Maintainer",
    teamSize: "Open Source",
    overview: "A plug-and-play MERN stack authentication boilerplate designed to help developers kickstart their projects with secure, best-practice auth flows already implemented.",
    features: [
      "Email/Password and Google OAuth login",
      "Secure HTTP-only cookie JWT storage",
      "Forgot password/reset password flow via email",
      "Protected route wrappers for React"
    ],
    techStack: [
      { name: "React", category: "Frontend" },
      { name: "Node.js", category: "Backend" },
      { name: "JWT", category: "Security" }
    ],
    openSourceInfo: {
      contributionType: "Creator & Lead Maintainer",
      pullRequests: "15+ merged PRs",
      issuesSolved: "10+ issues resolved",
      communityImpact: "Used by 50+ developers as a starting template for their full-stack applications.",
      repository: "https://github.com/masumaakhi/mern-authenticate"
    }
  },
  {
    id: "7",
    slug: "foodie-website",
    type: "demo",
    image: assets.p6,
    images: [assets.p6, assets.foodie1, assets.foodie2],
    title: "Foodie Website",
    description: "A food recipe app where users can browse, search, and submit recipes.",
    tasks: ["React", "Firebase", "HTML", "CSS", "TailwindCSS"],
    viewLink: "https://foodrecipeesa.netlify.app",
    githubLink: "https://github.com/your-username/ecommerce",
    industry: "Food & Beverage",
    duration: "2 Weeks",
    status: "Completed",
    role: "Frontend Developer",
    teamSize: "1",
    overview: "A vibrant, visually appealing food discovery app focused on UI/UX best practices and smooth animations.",
    features: [
      "Beautiful recipe cards with hover effects",
      "Category filtering",
      "Responsive navigation",
      "Firebase data integration"
    ],
    techStack: [
      { name: "React", category: "Frontend" },
      { name: "Firebase", category: "Backend" },
      { name: "Tailwind CSS", category: "Styling" }
    ],
    demoInfo: {
      purpose: "Practice advanced Tailwind CSS techniques and responsive design patterns.",
      learningGoals: "Create a 'dribbble-like' pixel-perfect UI implementation.",
      exploration: "Explored CSS grid layouts and complex hover states.",
      outcomes: "Improved CSS layout skills and component abstraction.",
      futureImprovements: "Add Framer Motion for page transitions."
    }
  },
  {
    id: "8",
    slug: "portfolio-website",
    type: "personal",
    image: assets.p2,
    images: [assets.p2, assets.port1, assets.port2],
    title: "Portfolio Website",
    description: "Personal portfolio showcasing my skills, projects and contact info.",
    tasks: ["Next.js", "TailwindCSS", "Responsive Design"],
    viewLink: "https://leafy-stardust-a07834.netlify.app",
    githubLink: "https://github.com/masumaakhi/portfolio",
    industry: "Personal Branding",
    duration: "3 Weeks",
    status: "Ongoing",
    role: "Full-Stack Developer",
    teamSize: "1",
    overview: "My personal digital playground and resume. Designed to be fast, accessible, and a true reflection of my coding capabilities and design aesthetics.",
    features: [
      "Dynamic project details routing",
      "Dark mode first design",
      "Framer motion scroll animations",
      "Interactive contact form"
    ],
    techStack: [
      { name: "Next.js", category: "Framework" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "Framer Motion", category: "Animation" }
    ],
    learning: {
      whyBuilt: "To have a centralized place to showcase my work to recruiters and clients.",
      problem: "Static resumes don't effectively show interactive web development skills.",
      idea: "Build a portfolio that acts as a case study itself.",
      outcomes: "Created a highly performant, SEO-friendly site using Next.js App Router.",
      futurePlans: "Add a blog section to share technical tutorials and insights."
    }
  }
];

export default projects;
