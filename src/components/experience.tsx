"use client";

import { motion } from "framer-motion";

// ============================================
// EDITORIAL EXPERIENCE SECTION
// Career journey with large years
// Edit this section to change:
// - Company names and roles
// - Achievements and descriptions
// - Dates and locations
// ============================================

const experiences = [
  {
    company: "Admigo Overseas & Careers",
    role: "Business Development & Operations Associate",
    location: "Kochi",
    period: "Jun 2026",
    achievements: [
      "Founding hire at early-stage consultancy — managed business development, client onboarding, and operational setup from scratch",
      "Advanced 30+ candidates to final selection stage across Germany and Austria study-abroad programs — handling inquiry screening, eligibility assessment, and partner coordination end to end",
      "Identified manual screening bottlenecks and proposed AI-assisted qualification workflow to reduce founder time on unqualified inquiries"
    ]
  },
  {
    company: "QSpiders (Test Yantra Software Solutions)",
    role: "Python & Data Science — Incubation Program",
    location: "Bengaluru",
    period: "Jun 2026 – Present",
    achievements: [
      "Competitively selected for structured 3-month incubation program covering Python, data analytics, data science, and Power BI",
      "Applied learning through real-world projects and daily presentations to technical mentors"
    ]
  },
  {
    company: "Nomad Gifts (now TopoNomad)",
    role: "Social Media & Influencer Marketing Intern",
    location: "Remote",
    period: "Jun – Nov 2023",
    achievements: [
      "Managed social media content and brand communication for D2C travel gifts company — creating platform-specific content and maintaining consistent brand messaging",
      "Ran end-to-end influencer outreach campaigns — identifying creators, managing negotiations, coordinating deliverables, and tracking campaign performance",
      "Reported campaign insights and engagement metrics to brand leadership — translating social data into actionable recommendations"
    ]
  },
  {
    company: "IEDC — GEC Wayanad",
    role: "Student Innovation & Entrepreneurship Lead",
    location: "Wayanad",
    period: "Oct 2024 – Jan 2026",
    achievements: [
      "Led 30+ member innovation cell — coordinating projects, workshops, and startup initiatives across students, faculty, and external mentors",
      "Served as communication bridge between student execution teams and institutional leadership — managing competing priorities and stakeholder alignment"
    ]
  },
  {
    company: "ACE & IEEE — GEC Wayanad",
    role: "Events & Public Relations Lead",
    location: "Wayanad",
    period: "Jul 2023 – May 2025",
    achievements: [
      "Hosted and coordinated multiple large-scale events with 500+ total attendees — managing cross-team logistics, vendor coordination, stakeholder communication, and on-ground execution",
      "Managed external communications, announcements, and brand messaging for two student associations simultaneously"
    ]
  },
  {
    company: "YoursTutor",
    role: "Online Learning Consultant",
    location: "Remote EdTech Platform",
    period: "Jan 2024 – Jun 2026",
    achievements: [
      "Designed and delivered personalised learning programs for 10+ students — conducting gap analysis, adapting curriculum per learner, and tracking measurable improvement",
      "Managed complete client relationships — student onboarding, session scheduling, parent communication, and progress reporting — with 100% student retention"
    ]
  },
  {
    company: "Keltron",
    role: "AI/ML Intern",
    location: "Kerala",
    period: "Jun 2025",
    achievements: [
      "Contributed to data analysis workflows and machine learning pipeline exploration",
      "Gained hands-on exposure to AI product development cycles and real-world data quality challenges"
    ]
  },
  {
    company: "Kerala Police Cyberdome",
    role: "Cybersecurity Intern",
    location: "Kerala",
    period: "Jul – Aug 2025",
    achievements: [
      "Studied cybersecurity principles and real-world threat mitigation strategies in government security environment",
      "Gained awareness of digital safety and data protection frameworks"
    ]
  },
  {
    company: "SheCanFoundation",
    role: "Fundraising & Outreach Intern",
    location: "Remote",
    period: "Jul 2025",
    achievements: [
      "Led donor communication campaigns for social impact initiative",
      "Developed persuasive writing, relationship management, and stakeholder follow-up skills"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 md:py-48 px-6 md:px-12 lg:px-20">
      {/* ============================================
          EDITORIAL CAREER JOURNEY
          - Large years as visual anchor
          - Minimal, elegant presentation
          - No cards, just typography
          - Different from previous sections
          ============================================ */}
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-12 gap-8 md:gap-16">
          
          {/* ===============================================
              LEFT COLUMN: SECTION NUMBER & TITLE (2 columns)
              - Minimal editorial
              =============================================== */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="col-span-12 md:col-span-2 sticky top-32 h-fit"
          >
            <div className="space-y-4">
              <span className="font-serif text-6xl md:text-7xl text-muted-foreground/30">03</span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
                Journey
              </h2>
            </div>
          </motion.div>

          {/* ===============================================
              RIGHT COLUMN: EXPERIENCE LIST (10 columns)
              - Large editorial years
              - Minimal presentation
              - No boxes, just spacing
              =============================================== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="col-span-12 md:col-span-10"
          >
            <div className="space-y-20 md:space-y-28">
              {experiences.map((exp, index) => (
                <motion.div
                  key={`${exp.company}-${exp.role}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: index * 0.08, ease: "easeOut" }}
                  className="group"
                >
                  {/* ===============================================
                      YEAR - Large serif typography
                      - Visual anchor for each entry
                      - Extract year from period
                      =============================================== */}
                  <div className="mb-6">
                    <span className="font-serif text-6xl md:text-7xl lg:text-8xl text-muted-foreground/20 group-hover:text-accent/30 transition-colors duration-700">
                      {exp.period.split(' ')[0]}
                    </span>
                  </div>

                  {/* ===============================================
                      EXPERIENCE DETAILS
                      - Company, role, location
                      - Minimal typography
                      =============================================== */}
                  <div className="space-y-4 mb-8">
                    <h3 className="font-serif text-2xl md:text-3xl text-foreground">
                      {exp.company}
                    </h3>
                    <p className="text-lg text-muted-foreground font-light">
                      {exp.role}
                    </p>
                    <p className="text-sm text-muted-foreground/70">
                      {exp.location} · {exp.period}
                    </p>
                  </div>

                  {/* ===============================================
                      ACHIEVEMENTS
                      - Minimal list
                      - No bullets, just spacing
                      =============================================== */}
                  <div className="space-y-3 max-w-3xl">
                    {exp.achievements.map((achievement, i) => (
                      <p key={i} className="text-base text-muted-foreground leading-relaxed font-light">
                        {achievement}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
