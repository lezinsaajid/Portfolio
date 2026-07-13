"use client";

import { motion } from "framer-motion";

// ============================================
// EDITORIAL CAPABILITIES SECTION
// List-style layout with alternating emphasis
// Edit this section to change:
// - Capability titles and descriptions
// - Evidence and outcome statements
// - Number of capabilities displayed
// ============================================

const capabilities = [
  {
    title: "Product Thinking",
    description: "I approach problems from first principles, understanding user needs, business constraints, and technical feasibility before defining solutions.",
    evidence: "Built Ascendra, a complete career management SaaS platform with Kanban workflows, analytics, and AI-ready architecture.",
    outcome: "Shipped production-ready products that solve real problems, not just features."
  },
  {
    title: "AI Fluency",
    description: "Certified by Anthropic in AI Fluency Framework and Prompt Engineering. I integrate LLMs thoughtfully to augment human capability, not replace it.",
    evidence: "Applied Claude API in DollarDairy for natural language finance queries and designed AI-assisted workflows for business processes.",
    outcome: "Built AI-powered features that provide genuine value and improved user experience."
  },
  {
    title: "Business Analysis",
    description: "I gather requirements, document processes, identify gaps, and communicate with stakeholders to ensure alignment between technical execution and business goals.",
    evidence: "Managed full candidate pipeline at Admigo, advancing 30+ candidates to final selection stage for Germany and Austria programs.",
    outcome: "Delivered measurable business outcomes through structured analysis and stakeholder management."
  },
  {
    title: "Execution",
    description: "I don't just plan—I ship. From idea to deployment, I own the complete lifecycle, making decisions and iterating rapidly based on feedback.",
    evidence: "Solo-built three production-ready applications including full-stack SaaS, mobile apps, and AI integrations.",
    outcome: "Consistent track record of turning ideas into deployed, working products."
  },
  {
    title: "Leadership",
    description: "I lead by enabling others, coordinating teams, managing competing priorities, and creating environments where people can do their best work.",
    evidence: "Led 30+ member innovation cell and coordinated events with 500+ attendees across student leadership roles.",
    outcome: "Built and managed high-performing teams that delivered complex initiatives."
  },
  {
    title: "Communication",
    description: "I translate complex technical concepts for business stakeholders and business requirements for engineering teams. Clear communication is force multiplier.",
    evidence: "Presented daily project updates in incubation program, managed client relationships at YoursTutor with 100% retention.",
    outcome: "Bridged gaps between technical and non-technical stakeholders effectively."
  },
  {
    title: "Systems Thinking",
    description: "I see the bigger picture—how components interact, what breaks when things scale, and how to design for long-term maintainability.",
    evidence: "Architected Ascendra with Clean Architecture and Repository Pattern for scalability, designed modular AI architecture.",
    outcome: "Built systems that are maintainable, scalable, and ready for growth."
  },
  {
    title: "Strategy",
    description: "I think multiple steps ahead, prioritizing features based on impact, defining MVPs strategically, and tracking progress against clear objectives.",
    evidence: "Defined product scope for HikerNet, prioritized features based on user needs, managed OKR tracking in previous roles.",
    outcome: "Made strategic decisions that maximized impact with limited resources."
  }
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-32 md:py-48 px-6 md:px-12 lg:px-20">
      {/* ============================================
          EDITORIAL SPLIT LAYOUT
          - Left: Section number and title
          - Right: Capabilities list
          - Different from About section layout
          ============================================ */}
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-12 gap-8 md:gap-16">
          
          {/* ===============================================
              LEFT COLUMN: SECTION NUMBER & TITLE (2 columns)
              - Minimal, editorial
              - Different width than About
              =============================================== */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="col-span-12 md:col-span-2 sticky top-32 h-fit"
          >
            <div className="space-y-4">
              <span className="font-serif text-6xl md:text-7xl text-muted-foreground/30">02</span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
                What I Bring
              </h2>
            </div>
          </motion.div>

          {/* ===============================================
              RIGHT COLUMN: CAPABILITIES LIST (10 columns)
              - Editorial list layout
              - Alternating emphasis
              - Large typography
              - No cards, just typography and spacing
              =============================================== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="col-span-12 md:col-span-10"
          >
            <div className="space-y-16 md:space-y-24">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                  className={`group ${index % 2 === 0 ? 'pl-0 md:pl-12' : 'pl-0 md:pl-24'}`}
                >
                  {/* ===============================================
                      CAPABILITY TITLE
                      - Large serif typography
                      - Accent color on hover
                      =============================================== */}
                  <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 group-hover:text-accent transition-colors duration-700">
                    {capability.title}
                  </h3>
                  
                  {/* ===============================================
                      DESCRIPTION
                      - Large, readable text
                      - Light weight for elegance
                      =============================================== */}
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light mb-8 max-w-3xl">
                    {capability.description}
                  </p>
                  
                  {/* ===============================================
                      EVIDENCE AND OUTCOME
                      - Minimal labels
                      - Inline presentation
                      - No boxes, just typography
                      =============================================== */}
                  <div className="space-y-4 max-w-3xl">
                    <div>
                      <span className="text-xs tracking-[0.2em] uppercase text-accent">Evidence</span>
                      <p className="text-base text-muted-foreground mt-2 leading-relaxed">
                        {capability.evidence}
                      </p>
                    </div>
                    <div>
                      <span className="text-xs tracking-[0.2em] uppercase text-accent">Outcome</span>
                      <p className="text-base text-muted-foreground mt-2 leading-relaxed">
                        {capability.outcome}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
