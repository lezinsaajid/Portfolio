"use client";

import { motion } from "framer-motion";
import { Section, PageContainer } from "@/components/layout";
import { typography, spacing } from "@/lib/design-tokens";
import { staggeredFadeInUp } from "@/lib/motion";

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
    <Section id="stacks">
      <PageContainer>
        <motion.div {...staggeredFadeInUp(0)} className="mb-16 md:mb-20 lg:mb-32 xl:mb-48">
          <h2 className={`${typography.display.section} ${typography.fontFamily.serif} text-foreground mb-8 sm:mb-10 md:mb-12`}>
            Principles
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                {...staggeredFadeInUp(index * 0.1)}
              >
                <h3 className={`${typography.heading.h4} text-foreground mb-3 sm:mb-4`}>
                  {principle.title}
                </h3>
                <p className={`${typography.body.small} text-muted-foreground ${typography.lineHeight.relaxed} ${typography.fontWeight.light}`}>
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
          <motion.div {...staggeredFadeInUp(0.3)}>
            <h3 className={`${typography.heading.h2} text-foreground mb-6 sm:mb-8`}>
              AI Stack
            </h3>
            <div className={spacing.content.normal}>
              {aiStack.map((item, index) => (
                <motion.div
                  key={item.name}
                  {...staggeredFadeInUp(index * 0.05)}
                  className="group"
                >
                  <h4 className={`${typography.body.base} text-foreground mb-2 group-hover:text-accent transition-colors duration-700`}>
                    {item.name}
                  </h4>
                  <p className={`${typography.body.xsmall} text-muted-foreground ${typography.lineHeight.relaxed} ${typography.fontWeight.light}`}>
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div {...staggeredFadeInUp(0.4)}>
            <h3 className={`${typography.heading.h2} text-foreground mb-6 sm:mb-8`}>
              Tech Stack
            </h3>
            <div className={spacing.content.normal}>
              {techStack.map((item, index) => (
                <motion.div
                  key={item.name}
                  {...staggeredFadeInUp(index * 0.05)}
                  className="group"
                >
                  <h4 className={`${typography.body.base} text-foreground mb-2 group-hover:text-accent transition-colors duration-700`}>
                    {item.name}
                  </h4>
                  <p className={`${typography.body.xsmall} text-muted-foreground ${typography.lineHeight.relaxed} ${typography.fontWeight.light}`}>
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </PageContainer>
    </Section>
  );
}
