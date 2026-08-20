"use client";

import { motion } from "framer-motion";
import { Section, PageContainer, SplitLayout, SectionHeader } from "@/components/layout";
import { typography, spacing } from "@/lib/design-tokens";
import { fadeInLeft, staggeredFadeInUp } from "@/lib/motion";

const bio = [
  "I build products by starting with the problem — understanding users, defining what matters, and turning ideas into shipped experiences. My technical background helps me work closely with engineers, evaluate trade-offs, and make decisions grounded in both user needs and technical reality.",

  "I've built and shipped products and analytical platforms independently, from identifying opportunities to deployment. With DollarDairy, I integrated AI for conversational finance tracking, while with Ascendra, I built a comprehensive full-stack career platform. Across all projects and operations, I focus on one question: are we solving the right problem?",

  "I thrive in ambiguous environments where problems are not clearly defined. Through solo products, leadership roles, and startup experiences, I've learned to break down uncertainty, prioritize impact, and iterate quickly based on feedback and evidence."
];

const principles = [
  {
    label: "Problem First",
    detail: "Start with understanding the user, context, and underlying problem before jumping into solutions."
  },
  {
    label: "Build & Learn",
    detail: "Ship focused solutions, measure outcomes, and continuously improve through real feedback."
  },
  {
    label: "AI as Leverage",
    detail: "Use AI thoughtfully to improve workflows, unlock capabilities, and create meaningful user value."
  },
  {
    label: "Evidence Over Assumptions",
    detail: "Balance intuition with data, constraints, and clear reasoning when making product decisions."
  }
];

export default function About() {
  return (
    <Section id="about">
      <PageContainer>
        <SplitLayout
          leftWidth="medium"
          leftColumn={
            <motion.div {...fadeInLeft}>
              <SectionHeader number="01" title="How I Think" />
            </motion.div>
          }
          rightColumn={
            <motion.div {...fadeInLeft} transition={{ delay: 0.2 }}>
              <div className={spacing.content.loose}>
                {bio.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    {...staggeredFadeInUp(index * 0.15)}
                    className={`${typography.body.large} text-muted-foreground ${typography.lineHeight.relaxed} ${typography.fontWeight.light}`}
                  >
                    {paragraph}
                  </motion.p>
                ))}

                <motion.div
                  {...staggeredFadeInUp(0.5)}
                  className="pt-4 sm:pt-6 md:pt-8 border-t border-border/50"
                >
                  <p className={`${typography.label.base} text-muted-foreground mb-6 sm:mb-8`}>
                    How I Work
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    {principles.map((principle, index) => (
                      <motion.div
                        key={principle.label}
                        {...staggeredFadeInUp(0.6 + index * 0.1)}
                      >
                        <h4 className={`${typography.body.base} text-foreground mb-2`}>
                          {principle.label}
                        </h4>

                        <p className={`${typography.body.xsmall} text-muted-foreground ${typography.lineHeight.relaxed} ${typography.fontWeight.light}`}>
                          {principle.detail}
                        </p>
                      </motion.div>
                    ))}
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