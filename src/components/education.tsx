"use client";

import { motion } from "framer-motion";
import { Section, PageContainer, SplitLayout, SectionHeader } from "@/components/layout";
import { typography, spacing, colorOpacity } from "@/lib/design-tokens";
import { fadeInLeft, staggeredFadeInUp } from "@/lib/motion";

const education = [
  {
    institution: "Government Engineering College, Wayanad",
    degree: "Bachelor of Technology — Computer Science & Engineering",
    location: "Kerala, India",
    period: "May 2026",
    achievements: [
      "CGPA: 8.34 / 10.0",
      "Progressed continuously from higher secondary to engineering without gap years, maintaining strong academic performance while gaining practical industry experience through internships and independent projects."
    ]
  },
  {
    institution: "MIC Athanikal",
    degree: "Higher Secondary (12th Grade)",
    location: "Kerala, India",
    period: "2022",
    achievements: [
      "Graduated with 99% marks, demonstrating strong academic foundation and consistent performance.",
      "Built the academic foundation that enabled continuous progression without gap years into engineering college and professional experiences."
    ]
  }
];

export default function Education() {
  return (
    <Section id="education">
      <PageContainer>
        <SplitLayout 
          leftWidth="narrow"
          leftColumn={
            <motion.div {...fadeInLeft}>
              <SectionHeader number="05" title="Education" />
            </motion.div>
          }
          rightColumn={
            <motion.div {...fadeInLeft} transition={{ delay: 0.2 }}>
              <div className="flex flex-col gap-12 sm:gap-16">
                {education.sort((a, b) => {
                  const yearA = parseInt(a.period.match(/\d{4}/)?.[0] || "0");
                  const yearB = parseInt(b.period.match(/\d{4}/)?.[0] || "0");
                  return yearB - yearA;
                }).map((edu, index) => (
                  <motion.div
                    key={`${edu.institution}-${edu.degree}`}
                    {...staggeredFadeInUp(index * 0.1)}
                    className="group flex flex-col gap-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      {/* Year Display */}
                      <div className="flex-shrink-0">
                        <span className={`${typography.display.hero} ${colorOpacity.subtle} group-hover:text-accent/30 transition-colors duration-700 block leading-none`}>
                          {edu.period}
                        </span>
                      </div>

                      {/* Title & Metadata */}
                      <div className={`${spacing.content.tight} flex-1 sm:pt-2`}>
                        <h3 className={`${typography.heading.h4} text-foreground mb-1`}>
                          {edu.institution}
                        </h3>
                        <p className={`${typography.body.small} text-muted-foreground ${typography.fontWeight.light} mb-1`}>
                          {edu.degree}
                        </p>
                        <p className={`${typography.body.xsmall} text-muted-foreground/70`}>
                          {edu.location}
                        </p>
                      </div>
                    </div>

                    {/* Achievements bullets */}
                    <div className="flex flex-col gap-3 pl-0 sm:pl-[120px]">
                      {edu.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="text-accent/60 mt-1.5 text-[6px] flex-shrink-0">■</span>
                          <p className={`${typography.body.xsmall} text-muted-foreground ${typography.lineHeight.relaxed} ${typography.fontWeight.light} flex-1`}>
                            {achievement}
                          </p>
                        </div>
                      ))}
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