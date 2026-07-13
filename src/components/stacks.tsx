"use client";

import { motion } from "framer-motion";

// ============================================
// EDITORIAL STACKS SECTION
// Typography-focused with principles as hero
// Edit this section to change:
// - AI tools and technologies
// - Technical stack items
// - Product principles
// ============================================

const aiStack = [
  { name: "Claude API", description: "Primary LLM for natural language processing and AI workflows" },
  { name: "OpenAI API", description: "Alternative LLM integration for redundancy and comparison" },
  { name: "Prompt Engineering", description: "Anthropic-certified prompt design and optimization" },
  { name: "AI Workflow Design", description: "End-to-end AI-assisted process automation" },
  { name: "Conversational Systems", description: "Design of AI-powered chat interfaces and query systems" }
];

const techStack = [
  { name: "Angular", description: "Frontend framework for enterprise applications" },
  { name: "React Native", description: "Cross-platform mobile development" },
  { name: "FastAPI", description: "Modern Python backend framework" },
  { name: "Node.js", description: "JavaScript runtime for server-side applications" },
  { name: "PostgreSQL", description: "Relational database for structured data" },
  { name: "MongoDB", description: "NoSQL database for flexible schemas" },
  { name: "Docker", description: "Containerization for deployment consistency" },
  { name: "Tailwind CSS", description: "Utility-first CSS framework" },
  { name: "TypeScript", description: "Type-safe JavaScript development" },
  { name: "Python", description: "Data science, AI/ML, and backend development" }
];

const principles = [
  {
    title: "First Principles Thinking",
    description: "Break problems down to fundamental truths and build up from there. Don't accept assumptions—question everything."
  },
  {
    title: "User-Centric Design",
    description: "Start with user needs, not technical constraints. The best technology is invisible to the user."
  },
  {
    title: "Iterative Execution",
    description: "Ship fast, learn faster. Perfect is the enemy of done. Iterate based on real feedback."
  },
  {
    title: "Systems Thinking",
    description: "Understand how components interact. Design for scalability, maintainability, and long-term viability."
  },
  {
    title: "AI as Amplifier",
    description: "Use AI to augment human capability, not replace it. Focus on high-leverage applications."
  },
  {
    title: "Business Alignment",
    description: "Every technical decision should serve business objectives. Build what matters, not what's cool."
  }
];

export default function Stacks() {
  return (
    <section id="stacks" className="py-32 md:py-48 px-6 md:px-12 lg:px-20">
      {/* ============================================
          EDITORIAL PRINCIPLES-FIRST LAYOUT
          - Principles as hero statement
          - Stacks as supporting content
          - Different from all previous sections
          ============================================ */}
      <div className="max-w-[1600px] mx-auto">
        
        {/* ===============================================
            PRINCIPLES - Full-width hero
            - Large serif typography
            - Editorial presentation
            - No section number
            =============================================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-32 md:mb-48"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-12">
            Principles
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
              >
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4">
                  {principle.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed font-light">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ===============================================
            STACKS - Two-column layout
            - AI Stack and Tech Stack side by side
            - Minimal typography
            - No cards, just spacing
            =============================================== */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          
          {/* AI Stack */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          >
            <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
              AI Stack
            </h3>
            <div className="space-y-6">
              {aiStack.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.05, ease: "easeOut" }}
                  className="group"
                >
                  <h4 className="text-lg text-foreground mb-2 group-hover:text-accent transition-colors duration-700">
                    {item.name}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          >
            <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
              Tech Stack
            </h3>
            <div className="space-y-6">
              {techStack.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.05, ease: "easeOut" }}
                  className="group"
                >
                  <h4 className="text-lg text-foreground mb-2 group-hover:text-accent transition-colors duration-700">
                    {item.name}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
