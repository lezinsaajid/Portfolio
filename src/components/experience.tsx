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
      company: "Admigo Overseas & Careers",
      role: "Consultant (Part-time)",
      location: "Kochi",
      period: "Jun 2026 – Jul 2026",
      achievements: [
        "Proactively created this early-stage operations role by cold-emailing the founder to address manual candidate screening bottlenecks.",
        "Built a candidate intake process to qualify and organize leads before they reached the founder, managing roughly 30 candidates.",
        "Gained hands-on operational systems design experience under early-stage constraints (Note: The company has since shut down, but this built foundational problem-solving skills)."
      ]
    },
    {
      company: "QSpiders Global Connect",
      role: "Python & Data Science Intern (Incubation Program)",
      location: "Bengaluru",
      period: "Jun 2026",
      achievements: [
        "Worked hands-on with Python and data science workflows, focusing on data preprocessing, cleaning, analysis, and data-quality validation.",
        "Completed a structured incubation program using practical datasets to build applied data-analysis and problem-solving skills."
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
        "Gained industry exposure through hands-on work at KELTRON, developing an understanding of how technical projects are executed within a professional engineering environment.",
        "Worked with fundamental Machine Learning and Artificial Intelligence concepts through practical implementations, gaining hands-on experience beyond academic coursework.",
        "Explored data preparation, model development, evaluation, and the practical application of ML techniques to real-world problems.",
        "Worked alongside industry professionals and gained exposure to real-world technical workflows, documentation, problem solving, and project execution.",
        "Bridged academic knowledge with practical industry experience, strengthening my ability to understand technical requirements and work within structured teams."
      ]
    },
    {
      company: "Cybersecurity Internship",
      role: "Cybersecurity Intern",
      location: "Remote",
      period: "2025",
      achievements: [
        "Worked on practical cybersecurity concepts including security assessment, vulnerability identification, and understanding common security risks in software and networked environments.",
        "Applied security concepts through hands-on exercises and technical tasks, developing an understanding of how vulnerabilities are identified, analyzed, and mitigated.",
        "Gained exposure to security-focused problem solving and the importance of designing systems with security considerations from the beginning."
      ]
    },
    {
      company: "Academic & Technical Projects",
      role: "Independent Project Work",
      location: "Independent",
      period: "2025",
      achievements: [
        "Continued building software projects alongside internships, using development as a way to explore problems beyond the classroom and turn ideas into working solutions.",
        "Experimented across web development, mobile applications, and emerging AI/ML technologies, gradually shifting from simply writing code toward understanding the product and user problem behind what I was building.",
        "This period became the foundation for the product-focused work and independent products I went on to build in 2026."
      ]
    }
  ],
  "2024": [
    {
      company: "YoursTutor",
      role: "Academic Learning Consultant",
      location: "Remote",
      period: "Jan 2024 – Jun 2026",
      achievements: [
        "Worked directly with students over a long-term period, diagnosing learning gaps and adapting learning plans based on individual needs.",
        "Managed learning plans for 10+ students, maintaining full retention across engagements lasting 2+ years.",
        "Built foundational experience understanding learner behaviors, user feedback, and education products, establishing key product management skills."
      ]
    },
    {
      company: "IEDC — Government Engineering College Wayanad",
      role: "Student Innovation Lead",
      location: "Wayanad",
      period: "Oct 2024 – Jan 2026",
      achievements: [
        "Led a 30+ member innovation cell across 6 concurrent initiatives, translating ambiguous faculty requirements into clear deliverables for student teams.",
        "Acted as the key bridge between student execution teams and faculty leadership to keep institutional goals aligned."
      ]
    }
  ],
  "2023": [
    {
      company: "ACE & IEEE — GEC Wayanad",
      role: "Events & Public Relations Lead",
      location: "Wayanad",
      period: "Jul 2023 – May 2025",
      achievements: [
        "Planned and executed programs with 500+ total attendees, coordinating logistics, stakeholder communications, and cross-functional execution."
      ]
    },
    {
      company: "Nomad Gifts (now TopoNomad)",
      role: "Social Media & Influencer Marketing Intern",
      location: "Remote",
      period: "Jun 2023 – Nov 2023",
      achievements: [
        "Owned the full influencer campaign cycle: creator identification, outreach, negotiation, campaign coordination, and performance reporting.",
        "Analyzed campaign data to identify which creator segments drove the strongest engagement per rupee spent."
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
