"use client";

import { motion } from "framer-motion";
import { Section, PageContainer, SplitLayout, SectionHeader } from "@/components/layout";
import { typography, spacing, container } from "@/lib/design-tokens";
import { fadeInLeft, staggeredFadeInUp } from "@/lib/motion";

// ============================================
// EDITORIAL CERTIFICATIONS SECTION
// Trimmed to PM-relevant credentials only
// Edit this section to change:
// - Certification names and issuers
// - Dates and descriptions
// - Credential links
// ============================================

const certifications = [
  {
    name: "AI Fluency Framework & Foundations",
    issuer: "Anthropic",
    date: "Jun 2026",
    credential: "https://www.anthropic.com",
    description: "Comprehensive understanding of AI systems, capabilities, limitations, and ethical considerations. Applied directly in product decisions — evaluating where AI adds genuine user value versus where it's unnecessary complexity."
  },
  {
    name: "Claude 101 — Prompt Engineering",
    issuer: "Anthropic",
    date: "Jun 2026",
    credential: "https://www.anthropic.com",
    description: "Advanced prompt engineering techniques for optimizing LLM interactions. Applied in DollarDairy for natural language finance queries — designing prompts that translate user questions into accurate database queries."
  },
  {
    name: "SQL (Advanced)",
    issuer: "HackerRank",
    date: "Jun 2026",
    credential: "https://www.hackerrank.com",
    description: "Advanced SQL including complex joins, subqueries, window functions, and query optimization. The foundation for data-driven product decisions, analytics dashboards, and impact measurement."
  }
];

// Education — compact display
const education = {
  degree: "Bachelor of Technology — Computer Science & Engineering",
  institution: "Government Engineering College, Wayanad, Kerala",
  year: "May 2026",
  gpa: "CGPA: 8.34 / 10.0"
};

export default function Certifications() {
  return (
    <Section id="credentials">
      <PageContainer>
        <SplitLayout 
          leftWidth="narrow"
          leftColumn={
            <motion.div {...fadeInLeft}>
              <SectionHeader number="05" title="Credentials" />
            </motion.div>
          }
          rightColumn={
            <motion.div {...fadeInLeft} transition={{ delay: 0.2 }}>
              <div className={spacing.content.xl}>
                {/* ===============================================
                    CERTIFICATIONS
                    Only PM-relevant credentials displayed
                    =============================================== */}
                <motion.div {...staggeredFadeInUp(0)}>
                  <div className={spacing.content.normal}>
                    {certifications.map((cert, certIndex) => (
                      <motion.div
                        key={cert.name}
                        {...staggeredFadeInUp(certIndex * 0.1)}
                        className="group"
                      >
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 sm:gap-4">
                          <div className="flex-1">
                            <h4 className={`${typography.body.base} text-foreground mb-1 group-hover:text-accent transition-colors duration-700`}>
                              {cert.name}
                            </h4>
                            <p className={`${typography.body.xsmall} text-muted-foreground mb-2 sm:mb-3`}>
                              {cert.issuer} · {cert.date}
                            </p>
                            <p className={`${typography.body.small} text-muted-foreground ${typography.lineHeight.relaxed} ${typography.fontWeight.light} ${container.normal}`}>
                              {cert.description}
                            </p>
                          </div>
                          {cert.credential !== "#" && (
                            <a
                              href={cert.credential}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`${typography.label.base} text-muted-foreground hover:text-accent transition-colors duration-700 whitespace-nowrap`}
                            >
                              View
                            </a>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* ===============================================
                    EDUCATION — Compact display
                    =============================================== */}
                <motion.div
                  {...staggeredFadeInUp(0.3)}
                  className="pt-4 sm:pt-6 border-t border-border/50"
                >
                  <p className={`${typography.label.base} text-muted-foreground mb-6 sm:mb-8`}>
                    Education
                  </p>
                  <div>
                    <h4 className={`${typography.body.base} text-foreground mb-1`}>
                      {education.degree}
                    </h4>
                    <p className={`${typography.body.xsmall} text-muted-foreground mb-1`}>
                      {education.institution}
                    </p>
                    <p className={`${typography.body.xsmall} text-muted-foreground/70`}>
                      {education.year} · {education.gpa}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          }
        />
      </PageContainer>
    </Section>
  );
}
