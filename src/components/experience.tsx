"use client";

import { motion } from "framer-motion";
import { Section, PageContainer, SplitLayout, SectionHeader } from "@/components/layout";
import { typography, spacing, colorOpacity } from "@/lib/design-tokens";
import { fadeInLeft, staggeredFadeInUp } from "@/lib/motion";

// ============================================
// EDITORIAL EXPERIENCE SECTION
// Unified career timeline with clear year display
// ============================================

const experiencesByYear = {
  "2026": [
    {
      company: "Airlearn",
      role: "Operations Intern",
      location: "Bengaluru",
      period: "Sep 2026 – Present",
      achievements: [
        "Support product and content operations within a consumer education application environment.",
        "Maintain and organize learning content across multiple languages, ensuring accuracy, quality, and consistent release schedules.",
        "Assist in operational workflows, streamlining content delivery pipelines and resolving day-to-day process bottlenecks.",
        "Gain first-hand insight into how consumer products function, evolve, and support users beyond engineering alone."
      ]
    },
    {
      company: "PySpiders",
      role: "Python & Data Science Intern",
      location: "Bengaluru",
      period: "Jun 2026 - Aug 2026",
      achievements: [
        "Worked hands-on with Python, SQL, data analysis, and data science workflows through practical projects.",
        "Built data-driven solutions while applying analytical thinking to real-world problem statements.",
        "Strengthened technical foundations across data handling, visualization, and application development."
      ]
    },
    {
      company: "Admigo Overseas & Careers",
      role: "Operations & Business Development Consultant",
      location: "Kochi / Remote",
      period: "Jun 2026 – Jul 2026",
      achievements: [
        "Proactively initiated this role to address intake and qualification bottlenecks for an early-stage advisory firm.",
        "Designed and implemented a candidate screening workflow, qualifying leads and streamlining client handoffs.",
        "Gained hands-on experience navigating operational trade-offs and client communication under startup constraints."
      ]
    }
  ],
  "2025": [
    {
      company: "KELTRON",
      role: "Machine Learning & AI Intern",
      location: "Kerala, India",
      period: "2025",
      achievements: [
        "Explored applied machine learning workflows, data preprocessing, and model evaluation in a structured engineering environment.",
        "Developed a practical understanding of AI capabilities and constraints to better evaluate technical feasibility in product decisions."
      ]
    },
    {
      company: "Kerala Police Cyberdome",
      role: "Cybersecurity Intern",
      location: "Kerala, India",
      period: "2025",
      achievements: [
        "Gained hands-on exposure to cybersecurity practices, threat analysis, and security operations in a law-enforcement environment.",
        "Explored real-world cybersecurity challenges and developed an understanding of how security technologies are applied in practice."
      ]
    }
  ],
  "2024": [
    {
      company: "IEDC — GEC Wayanad",
      role: "Student Innovation Lead",
      location: "Wayanad",
      period: "Oct 2024 – Jan 2026",
      achievements: [
        "Led a 30+ member innovation cell across student initiatives, workshops, and startup projects.",
        "Acted as the primary coordination bridge between student execution teams, faculty mentors, and institutional leadership.",
        "Cultivated team ownership, managed competing deadlines, and aligned cross-functional student groups."
      ]
    },
    {
      company: "ACE — GEC Wayanad",
      role: "Public Relations & Events Lead",
      location: "Wayanad",
      period: "Jan 2024 – May 2025",
      achievements: [
        "Led event coordination and public relations for technical and student-focused programs.",
        "Managed communication, logistics, and coordination across teams for events with 500+ attendees."
      ]
    },
    {
      company: "YoursTutor",
      role: "Academic Learning Consultant",
      location: "Remote",
      period: "Jan 2024 – Jun 2026",
      achievements: [
        "Managed complete client relationships, diagnosing individual learning gaps and tailoring educational plans.",
        "Maintained 100% student retention across long-term engagements through clear communication and steady progress reporting."
      ]
    }
  ],
  "2023": [
    {
      company: "IEEE — GEC Wayanad",
      role: "Secretary",
      location: "Wayanad",
      period: "Jul 2023 – Jul 2024",
      achievements: [
        "Coordinated chapter activities, technical events, and member engagement initiatives.",
        "Worked across teams to plan and execute events while managing communication and operations."
      ]
    },
    {
      company: "Nomad Gifts (now TopoNomad)",
      role: "Social Media & Influencer Marketing Intern",
      location: "Kozhikode / Remote",
      period: "Jun 2023 – Nov 2023",
      achievements: [
        "Managed creator outreach, relationship coordination, and end-to-end deliverables for marketing campaigns.",
        "Analyzed campaign performance to identify high-engagement creator segments and optimize marketing spend."
      ]
    }
  ]
};

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
              <div className="flex flex-col gap-16 sm:gap-20">
                {Object.entries(experiencesByYear)
                  .sort(([a], [b]) => parseInt(b) - parseInt(a))
                  .map(([year, experiences], yearIndex) => (
                  <motion.div
                    key={year}
                    {...staggeredFadeInUp(yearIndex * 0.1)}
                    className="flex flex-col gap-8 sm:gap-10"
                  >
                    {/* Year Header */}
                    <div className="flex items-baseline gap-4">
                      <span className={`${typography.display.hero} ${colorOpacity.subtle} group-hover:text-accent/30 transition-colors duration-700 block leading-none`}>
                        {year}
                      </span>
                      <div className="flex-1 h-px bg-border/30" />
                    </div>

                    {/* Experiences for this year */}
                    <div className="flex flex-col gap-8 sm:gap-10">
                      {experiences.map((exp, expIndex) => (
                        <motion.div
                          key={`${exp.company}-${exp.role}`}
                          {...staggeredFadeInUp((yearIndex * 0.1) + (expIndex * 0.05))}
                          className="group flex flex-col gap-4"
                        >
                          {/* Title & Metadata */}
                          <div className={`${spacing.content.tight}`}>
                            <h3 className={`${typography.heading.h4} text-foreground mb-1`}>
                              {exp.company}
                            </h3>
                            <p className={`${typography.body.small} text-muted-foreground ${typography.fontWeight.light} mb-1`}>
                              {exp.role}
                            </p>
                            <p className={`${typography.body.xsmall} text-muted-foreground/70`}>
                              {exp.location} · {exp.period}
                            </p>
                          </div>

                          {/* Achievements bullets */}
                          <div className="flex flex-col gap-3">
                            {exp.achievements.map((achievement, i) => (
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
                ))}
              </div>
            </motion.div>
          }
        />
      </PageContainer>
    </Section>
  );
}
