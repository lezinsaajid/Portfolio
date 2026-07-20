"use client";

import { motion } from "framer-motion";
import { Section, PageContainer, SplitLayout, SectionHeader } from "@/components/layout";
import { typography, spacing, container, colorOpacity } from "@/lib/design-tokens";
import { fadeInLeft, staggeredFadeInUp } from "@/lib/motion";

// ============================================
// EDITORIAL EXPERIENCE SECTION
// Career journey with tiered hierarchy
// Tier 1: Full display with achievements
// Tier 2: Compact display with one-liner
// Edit this section to change:
// - Company names and roles
// - Achievements and descriptions
// - Dates and locations
// ============================================

// Tier 1 — Most PM-relevant, fully expanded
const primaryExperiences = [
  {
    company: "Admigo Overseas & Careers",
    role: "Business Development & Operations Associate",
    location: "Kochi",
    period: "Jun 2026",
    achievements: [
      "Identified that manual candidate screening was the primary bottleneck limiting growth — the founder spent 3-5 hours weekly on inquiries that didn't convert. Restructured the intake process and built a qualification workflow that reduced unqualified conversations.",
      "Managed a pipeline of 30+ candidates end to end — from first inquiry through eligibility assessment, document coordination, and partner handoff for Germany and Austria study-abroad programs.",
      "Joined as first hire with no established processes — built operational systems from scratch, learning firsthand how early-stage product and operations decisions compound over time."
    ]
  },
  {
    company: "Nomad Gifts (now TopoNomad)",
    role: "Social Media & Influencer Marketing Intern",
    location: "Remote",
    period: "Jun – Nov 2023",
    achievements: [
      "Owned the full influencer acquisition and campaign lifecycle — defined target creator profiles, ran outreach at scale, negotiated terms, coordinated deliverables, and reported campaign performance to leadership.",
      "Translated campaign data into actionable recommendations — identified which creator segments drove the highest engagement per rupee and adjusted strategy accordingly."
    ]
  },
  {
    company: "QSpiders (Test Yantra Software Solutions)",
    role: "Python & Data Science — Incubation Program",
    location: "Bengaluru",
    period: "Jun 2026 – Present",
    achievements: [
      "Competitively selected for a 3-month structured program covering Python, data analytics, and data science — building fluency in the analytical tools used for product decisions and metrics tracking.",
      "Applied learning through real-world projects and daily presentations — practicing the data analysis skills that drive product prioritization and impact measurement."
    ]
  }
];

// Tier 2 — Relevant but secondary, compact display
const secondaryExperiences = [
  {
    role: "Student Innovation & Entrepreneurship Lead",
    organization: "IEDC — GEC Wayanad",
    period: "Oct 2024 – Jan 2026",
    oneLiner: "Led 30+ member innovation cell across 6 concurrent initiatives — defined goals through stakeholder inputs, managed timelines, and bridged student teams with faculty leadership."
  },
  {
    role: "Events & Public Relations Lead",
    organization: "ACE & IEEE — GEC Wayanad",
    period: "Jul 2023 – May 2025",
    oneLiner: "Planned and executed programs with 500+ total attendees — owned logistics, vendor coordination, stakeholder communication, and cross-functional execution."
  },
  {
    role: "Academic Learning Consultant",
    organization: "YoursTutor — Remote EdTech",
    period: "Jan 2024 – Jun 2026",
    oneLiner: "Designed personalized learning plans for 10+ students by diagnosing knowledge gaps and adapting approach based on individual progress. Maintained 100% retention across 2+ year engagement."
  }
];

export default function Experience() {
  return (
    <Section id="experience">
      <PageContainer>
        <SplitLayout 
          leftWidth="narrow"
          leftColumn={
            <motion.div {...fadeInLeft}>
              <SectionHeader number="04" title="Journey" />
            </motion.div>
          }
          rightColumn={
            <motion.div {...fadeInLeft} transition={{ delay: 0.2 }}>
              <div className={spacing.content.xl}>
                {/* ===============================================
                    TIER 1 — Primary experiences, fully expanded
                    =============================================== */}
                {primaryExperiences.map((exp, index) => (
                  <motion.div
                    key={`${exp.company}-${exp.role}`}
                    {...staggeredFadeInUp(index * 0.08)}
                    className="group"
                  >
                    <div className="mb-4 sm:mb-6">
                      <span className={`${typography.display.hero} ${colorOpacity.subtle} group-hover:text-accent/30 transition-colors duration-700`}>
                        {exp.period.split(' ')[0]}
                      </span>
                    </div>

                    <div className={spacing.content.tight}>
                      <h3 className={`${typography.heading.h4} text-foreground`}>
                        {exp.company}
                      </h3>
                      <p className={`${typography.body.small} text-muted-foreground ${typography.fontWeight.light}`}>
                        {exp.role}
                      </p>
                      <p className={`${typography.body.xsmall} text-muted-foreground/70`}>
                        {exp.location} · {exp.period}
                      </p>
                    </div>

                    <div className={spacing.content.tight}>
                      {exp.achievements.map((achievement, i) => (
                        <p key={i} className={`${typography.body.xsmall} text-muted-foreground ${typography.lineHeight.relaxed} ${typography.fontWeight.light}`}>
                          {achievement}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}

                {/* ===============================================
                    TIER 2 — Secondary experiences, compact
                    Merged from Leadership section
                    =============================================== */}
                <motion.div
                  {...staggeredFadeInUp(0.4)}
                  className="pt-4 sm:pt-6 border-t border-border/50"
                >
                  <p className={`${typography.label.base} text-muted-foreground mb-8 sm:mb-10`}>
                    Additional Experience
                  </p>
                  <div className={spacing.content.normal}>
                    {secondaryExperiences.map((exp, index) => (
                      <motion.div
                        key={`${exp.organization}-${exp.role}`}
                        {...staggeredFadeInUp(0.5 + index * 0.08)}
                        className="group"
                      >
                        <h4 className={`${typography.body.base} text-foreground mb-1 group-hover:text-accent transition-colors duration-700`}>
                          {exp.role}
                        </h4>
                        <p className={`${typography.body.xsmall} text-muted-foreground mb-2`}>
                          {exp.organization} · {exp.period}
                        </p>
                        <p className={`${typography.body.xsmall} text-muted-foreground ${typography.lineHeight.relaxed} ${typography.fontWeight.light}`}>
                          {exp.oneLiner}
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
