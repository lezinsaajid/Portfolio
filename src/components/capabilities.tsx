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
    title: "Product Thinking",
    description: "I start with the problem, not the solution. Before writing a single line of code or spec, I ask: who has this problem, how painful is it, and what's the smallest thing we can build to learn if our approach works?",
    evidence: "Identified job seeker workflow fragmentation and built Ascendra to solve it. Identified spending tracking friction and built DollarDairy around conversational queries. Each product started with a problem, not a technology.",
    outcome: "Three products shipped from problem identification through scoping, architecture, and deployment."
  },
  {
    title: "AI Product Fluency",
    description: "Anthropic certified in AI Fluency and Prompt Engineering. I understand LLM capabilities, limitations, and cost structures well enough to make informed build-vs-buy decisions and design AI features that provide genuine user value.",
    evidence: "Integrated Claude API in DollarDairy for natural language finance queries — choosing API integration over custom NLP based on accuracy requirements and time-to-validation. Designed AI-assisted qualification workflow at Admigo.",
    outcome: "Built AI-powered features in production applications. Can evaluate where AI adds real value versus where it's a feature checkbox."
  },
  {
    title: "Business & Data Analysis",
    description: "I gather requirements, identify process gaps, and translate data into decisions. SQL-proficient for querying, comfortable building dashboards, and experienced in translating campaign and pipeline data into actionable recommendations.",
    evidence: "At Admigo, identified that manual screening consumed 3-5 hours weekly of founder time on non-converting inquiries. At Nomad Gifts, analyzed influencer campaign data to identify which creator segments drove highest engagement per rupee.",
    outcome: "SQL Advanced certified. Consistently used data to drive operational and product decisions."
  },
  {
    title: "Stakeholder Management & Execution",
    description: "I coordinate across teams, manage competing priorities, and own outcomes end to end. Whether it's a 30+ member student organization or a client relationship with parents and students, I communicate clearly and deliver consistently.",
    evidence: "Managed full candidate pipeline at Admigo from inquiry through partner handoff. Led IEDC innovation cell across 6 concurrent initiatives. Maintained 100% client retention across 2+ years at YoursTutor.",
    outcome: "Track record of managing complex stakeholder relationships and delivering under ambiguity."
  },
  {
    title: "Technical Foundation",
    description: "I understand full-stack architecture, APIs, databases, and deployment well enough to evaluate feasibility, estimate effort, and have credible conversations with engineers — without needing to write production code daily.",
    evidence: "Architected Ascendra with Clean Architecture and Repository Pattern. Made deliberate technology choices (PostgreSQL vs MongoDB, Claude API vs custom NLP) based on product requirements, not personal preference.",
    outcome: "Technical decisions that served product goals: scalability for Ascendra's AI roadmap, flexible schema for HikerNet's evolving data model."
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
