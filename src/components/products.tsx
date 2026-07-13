"use client";

import { motion } from "framer-motion";

// ============================================
// EDITORIAL PRODUCTS SECTION
// Apple-style case studies with editorial layout
// Edit this section to change:
// - Product details (name, tagline, description)
// - Tech stack displayed
// - Problem/approach/solution narrative
// - GitHub and demo links
// ============================================

const products = [
  {
    name: "Ascendra",
    logo: "/ascendra-logo.png",
    tagline: "AI-Powered Career Operating System",
    problem: "Job seekers struggle to organize applications, track progress across multiple platforms, and maintain different resume versions for different roles. Existing tools are either too simple or overly complex enterprise solutions.",
    approach: "Built a comprehensive SaaS platform from scratch, treating it as a real product rather than a side project. Focused on user experience, clean architecture, and future AI integration capabilities.",
    businessContext: "Designed as a B2C SaaS with potential B2B expansion for career coaching services. Monetization through freemium model with premium AI features.",
    challenges: "Implementing secure authentication with JWT refresh token rotation, designing scalable database schema for complex job application data, creating intuitive Kanban interface.",
    solution: "Full-stack application with Angular frontend, FastAPI backend, PostgreSQL database, and Docker deployment. Implemented Clean Architecture and Repository Pattern for maintainability.",
    impact: "Production-ready SaaS platform with complete job tracking, resume management, analytics dashboard, and modular AI architecture ready for career coaching features.",
    architecture: "Frontend: Angular with Tailwind CSS. Backend: FastAPI with SQLAlchemy ORM. Database: PostgreSQL. Auth: JWT with refresh token rotation. Deployment: Docker containerization.",
    techStack: ["Angular", "FastAPI", "Python", "PostgreSQL", "Docker", "JWT", "Tailwind CSS"],
    roadmap: "AI-powered resume analysis, career coaching integration, automated job matching, collaborative features for career coaches.",
    github: "https://github.com/lezinsajid/ascendra",
    demo: "#"
  },
  {
    name: "DollarDairy",
    logo: "/dollardairy-logo.png",
    tagline: "AI-Powered Personal Finance App",
    problem: "Personal finance apps require complex navigation and manual data entry. Users want to understand their spending patterns without learning accounting software or navigating multiple screens.",
    approach: "Leveraged natural language processing to create a conversational interface for finance queries. Users can ask questions in plain English and get instant answers.",
    businessContext: "Mobile-first consumer app targeting millennials and Gen Z who want simple, AI-powered financial insights without traditional banking complexity.",
    challenges: "Integrating Claude API for accurate natural language to SQL translation, designing mobile-first UX, handling offline data synchronization, ensuring query accuracy.",
    solution: "React Native mobile app with Node.js backend, PostgreSQL database, and Claude API integration. Implemented Drizzle ORM for type-safe database operations.",
    impact: "Users can ask questions like 'How much did I spend on food this month?' and receive accurate, instant answers from their personal transaction data.",
    architecture: "Frontend: React Native with Expo. Backend: Node.js with Express. Database: PostgreSQL with Drizzle ORM. AI: Claude API for natural language queries.",
    techStack: ["React Native", "Node.js", "PostgreSQL", "Drizzle ORM", "Claude API", "Expo"],
    roadmap: "Budget recommendations, spending predictions, multi-currency support, investment tracking, bank API integration for automatic transaction import.",
    github: "https://github.com/lezinsajid/dollardairy",
    demo: "#"
  },
  {
    name: "HikerNet",
    logo: "/hikernet-logo.png",
    tagline: "Community Trekking Platform",
    problem: "Trekking enthusiasts struggle to find groups, discover trails, and coordinate logistics. Existing platforms are either too commercial or lack community features.",
    approach: "Built a community-focused platform connecting trekkers, enabling group formation, trail discovery, and event coordination.",
    businessContext: "Community platform with potential monetization through premium features, gear partnerships, and guided trek bookings.",
    challenges: "Coordinating team development, designing API architecture for real-time features, managing user-generated content, implementing geolocation features.",
    solution: "React Native mobile app with Node.js backend and MongoDB for flexible data storage. RESTful API architecture with focus on scalability.",
    impact: "Enables trekkers to connect, form groups, discover trails, and coordinate events—building a community around outdoor adventure.",
    architecture: "Frontend: React Native. Backend: Node.js with Express. Database: MongoDB for flexible schema. API: RESTful architecture with authentication.",
    techStack: ["React Native", "Node.js", "MongoDB", "REST APIs", "Express"],
    roadmap: "Real-time group chat, trail difficulty ratings, gear rental marketplace, weather integration, local guide partnerships.",
    github: "https://github.com/lezinsajid/hikernet",
    demo: "#"
  }
];

export default function Products() {
  return (
    <section id="products" className="py-32 md:py-48 px-6 md:px-12 lg:px-20">
      {/* ============================================
          EDITORIAL FULL-WIDTH LAYOUT
          - No section number, different from previous sections
          - Full-width case studies
          - Apple product page style
          ============================================ */}
      <div className="max-w-[1600px] mx-auto">
        
        {/* ===============================================
            SECTION HEADER - Minimal, centered
            - Different from previous sections
            - No underline, just typography
            =============================================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-24 md:mb-32"
        >
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
            Featured Work
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Case studies from idea to impact
          </p>
        </motion.div>

        {/* ===============================================
            PRODUCTS - Apple-style case studies
            - Full-width layouts
            - Alternating image/text positions
            - Large typography
            - No cards, just editorial composition
            =============================================== */}
        <div className="space-y-32 md:space-y-48">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: index * 0.2, ease: "easeOut" }}
              className={`grid grid-cols-12 gap-8 md:gap-16 items-center ${
                index % 2 === 0 ? '' : 'md:grid-flow-dense'
              }`}
            >
              {/* ===============================================
                  PRODUCT VISUAL AREA (7 columns)
                  - Placeholder for product screenshots
                  - Large, prominent
                  - Add your product images
                  =============================================== */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, delay: index * 0.2 + 0.2, ease: "easeOut" }}
                className={`col-span-12 md:col-span-7 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}
              >
                <div className="aspect-[16/10] bg-muted/30 rounded-sm overflow-hidden relative">
                  {/* Product logo - add your logos to public/ */}
                  {product.logo ? (
                    <img 
                      src={product.logo} 
                      alt={`${product.name} logo`}
                      className="w-full h-full object-contain p-12"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-serif text-6xl md:text-8xl text-muted-foreground/20">{product.name[0]}</span>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* ===============================================
                  PRODUCT CONTENT (5 columns)
                  - Editorial typography
                  - No boxes, just spacing
                  - Apple-style presentation
                  =============================================== */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, delay: index * 0.2 + 0.3, ease: "easeOut" }}
                className={`col-span-12 md:col-span-5 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}
              >
                <div className="space-y-8">
                  {/* Product name and tagline */}
                  <div>
                    <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
                      {product.name}
                    </h3>
                    <p className="text-xl md:text-2xl text-accent font-light">
                      {product.tagline}
                    </p>
                  </div>

                  {/* Tech stack - minimal presentation */}
                  <div className="flex flex-wrap gap-3">
                    {product.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs tracking-[0.15em] uppercase text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Problem */}
                  <div>
                    <span className="text-xs tracking-[0.2em] uppercase text-accent">Problem</span>
                    <p className="text-base text-muted-foreground mt-3 leading-relaxed">
                      {product.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <span className="text-xs tracking-[0.2em] uppercase text-accent">Solution</span>
                    <p className="text-base text-muted-foreground mt-3 leading-relaxed">
                      {product.solution}
                    </p>
                  </div>

                  {/* Impact */}
                  <div>
                    <span className="text-xs tracking-[0.2em] uppercase text-accent">Impact</span>
                    <p className="text-base text-muted-foreground mt-3 leading-relaxed">
                      {product.impact}
                    </p>
                  </div>

                  {/* Links - minimal, elegant */}
                  <div className="flex gap-6 pt-4">
                    <a
                      href={product.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center gap-3 text-foreground pb-1"
                    >
                      <span className="text-xs tracking-[0.2em] uppercase">View Code</span>
                      <span className="w-8 h-px bg-foreground group-hover:bg-accent transition-colors duration-700" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
