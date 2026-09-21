"use client";

import { motion } from "framer-motion";
import { Section, PageContainer, SplitLayout, SectionHeader } from "@/components/layout";
import { typography, spacing, container } from "@/lib/design-tokens";
import { fadeInLeft, staggeredFadeInUp } from "@/lib/motion";

// ============================================
// EDITORIAL CAPABILITIES SECTION
// Consolidated to 5 PM-relevant capabilities
// Edit this section to change:
// - Capability titles and descriptions
// - Evidence and outcome statements
// ============================================

const capabilities = [
  {
    title: "Product",
    description: "Product thinking, user stories, requirements, prioritization, and product discovery. I focus on breaking down user friction, evaluating what is worth building, and keeping scope focused on core outcomes.",
    evidence: "Identified job-seeker workflow fragmentation and built Ascendra to solve it. Designed DollarDairy around conversational queries to eliminate manual expense logging friction. Explored voice-first conversational UX with WordPlay.",
    outcome: "Three independent products shipped from problem framing and requirement definition through scoping and deployment."
  },
  {
    title: "Data & Analytics",
    description: "SQL, Excel, Power BI, Tableau, Amplitude, Mixpanel. Comfortable querying structured databases, building intuitive reporting dashboards, and analyzing funnel behavior.",
    evidence: "HackerRank certified in Advanced SQL (complex joins, subqueries, and window functions). Built pipeline analysis dashboards in Tableau and analyzed creator performance metrics at Nomad Gifts.",
    outcome: "Ability to pull insights directly from raw data and translate quantitative trends into actionable product and operational decisions."
  },
  {
    title: "AI & Automation",
    description: "LLMs, prompt engineering, AI workflows, n8n, Vapi. Anthropic certified in AI Fluency and Prompt Engineering. Focused on applying AI where it provides tangible user leverage rather than novelty.",
    evidence: "Integrated Google's Gemini API directly for plain-language financial querying in DollarDairy. Orchestrated real-time voice interactions using Vapi in WordPlay. Designed automated workflow pipelines.",
    outcome: "Working knowledge of latency considerations, prompt design, API costs, and conversational UX patterns in production environments."
  },
  {
    title: "Technical",
    description: "Python, FastAPI, Angular, PostgreSQL, Git. Grounded in Computer Science fundamentals, allowing me to understand system architecture and collaborate seamlessly with engineers.",
    evidence: "Architected Ascendra with Clean Architecture and Repository Pattern using Angular and FastAPI. Handled relational data modeling with PostgreSQL and built mobile experiences in React Native.",
    outcome: "Able to evaluate technical feasibility, understand engineering trade-offs, and independently build working products."
  }
];

export default function Capabilities() {
  return (
    <Section id="capabilities">
      <PageContainer>
        <SplitLayout 
          leftWidth="narrow"
          leftColumn={
            <motion.div {...fadeInLeft}>
              <SectionHeader number="03" title="What I Bring" />
            </motion.div>
          }
          rightColumn={
            <motion.div {...fadeInLeft} transition={{ delay: 0.2 }}>
              <div className={spacing.content.xl}>
                {capabilities.map((capability, index) => (
                  <motion.div
                    key={capability.title}
                    {...staggeredFadeInUp(index * 0.1)}
                    className="group"
                  >
                    <h3 className={`${typography.heading.h3} text-foreground mb-4 sm:mb-6 group-hover:text-accent transition-colors duration-700`}>
                      {capability.title}
                    </h3>
                    
                    <p className={`${typography.body.base} text-muted-foreground ${typography.lineHeight.relaxed} ${typography.fontWeight.light} mb-6 sm:mb-8 ${container.normal}`}>
                      {capability.description}
                    </p>
                    
                    <div className={spacing.content.tight}>
                      <div>
                        <span className={typography.label.base}>Evidence</span>
                        <p className={`${typography.body.xsmall} text-muted-foreground mt-2 ${typography.lineHeight.relaxed}`}>
                          {capability.evidence}
                        </p>
                      </div>
                      <div>
                        <span className={typography.label.base}>Outcome</span>
                        <p className={`${typography.body.xsmall} text-muted-foreground mt-2 ${typography.lineHeight.relaxed}`}>
                          {capability.outcome}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          }
        />
      </PageContainer>
    </Section>
  );
}
