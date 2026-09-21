"use client";

import { motion } from "framer-motion";
import { Section, PageContainer, SplitLayout, SectionHeader } from "@/components/layout";
import { typography, spacing } from "@/lib/design-tokens";
import { fadeInLeft, staggeredFadeInUp } from "@/lib/motion";

const bio = [
  "I studied Computer Science, but over time I realized that the part of technology I enjoy most isn't just writing code.",
  "I like understanding the problem, thinking about the user, figuring out what is worth building, and working across different sides of a product.",
  "I've built multiple products myself, experimented with AI and automation, and gained hands-on experience in operations through my current role at Airlearn.",
  "I'm now looking to grow toward Product Management, Product Operations, Business Analysis, and Strategy & Operations roles."
];

const principles = [
  {
    label: "Understand",
    detail: "Start with the actual problem and the people experiencing it."
  },
  {
    label: "Decide",
    detail: "Figure out what matters now, what can wait, and what is worth building."
  },
  {
    label: "Build",
    detail: "Turn the decision into something usable."
  },
  {
    label: "Learn",
    detail: "See what works, what doesn't, and what should change next."
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
                    Product Thinking
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

                  <motion.p
                    {...staggeredFadeInUp(1.0)}
                    className={`${typography.body.base} ${typography.fontFamily.serif} italic text-foreground pt-6 mt-6 border-t border-border/30`}
                  >
                    I care about building the right thing, not just building more things.
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          }
        />
      </PageContainer>
    </Section>
  );
}