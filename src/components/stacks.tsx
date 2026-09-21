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
  { name: "LLMs & Prompt Engineering", description: "Anthropic certified in prompt design, evaluation, and context management" },
  { name: "Vapi", description: "Low-latency voice orchestration for conversational voice assistants" },
  { name: "Gemini API", description: "Direct API integration for natural language querying and intent detection" },
  { name: "AI Workflows & n8n", description: "Automated end-to-end data extraction and operational pipelines" }
];

const techStack = [
  { name: "Python & FastAPI", description: "Backend APIs, data handling, and Clean Architecture services" },
  { name: "SQL & PostgreSQL", description: "Relational data modeling, complex queries, and window functions" },
  { name: "Angular", description: "Component-driven frontend architecture for web platforms" },
  { name: "Power BI & Tableau", description: "Analytics dashboards, pipeline tracking, and metric visualization" },
  { name: "Amplitude & Mixpanel", description: "Event tracking, user journey mapping, and funnel analysis" },
  { name: "Git & Docker", description: "Version control workflows and containerized deployments" }
];

const principles = [
  {
    title: "Understand",
    description: "Start with the actual problem and the people experiencing it before proposing solutions."
  },
  {
    title: "Decide",
    description: "Figure out what matters now, what can wait, and what is genuinely worth building."
  },
  {
    title: "Build",
    description: "Turn decisions into usable, dependable products that solve real friction."
  },
  {
    title: "Learn",
    description: "Observe real usage, gather clear evidence, and determine what should change next."
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
