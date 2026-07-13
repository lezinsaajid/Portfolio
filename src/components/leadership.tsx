"use client";

import { motion } from "framer-motion";

// ============================================
// EDITORIAL LEADERSHIP SECTION
// Philosophy-first with roles below
// Edit this section to change:
// - Leadership roles and organizations
// - Key contributions and highlights
// - Leadership philosophy statement
// ============================================

const leadership = [
  {
    role: "Student Innovation & Entrepreneurship Lead",
    organization: "IEDC — GEC Wayanad",
    period: "Oct 2024 – Jan 2026",
    highlights: [
      "Led 30+ member innovation cell, coordinating projects, workshops, and startup initiatives",
      "Served as communication bridge between student teams and institutional leadership",
      "Managed competing priorities and stakeholder alignment across students, faculty, and external mentors",
      "Owned outcomes for innovation initiatives from conception to execution"
    ]
  },
  {
    role: "Events & Public Relations Lead",
    organization: "ACE & IEEE — GEC Wayanad",
    period: "Jul 2023 – May 2025",
    highlights: [
      "Hosted and coordinated events with 500+ total attendees across two student associations",
      "Managed cross-team logistics, vendor coordination, and stakeholder communication",
      "Executed on-ground events under deadline pressure with multiple moving parts",
      "Managed external communications, announcements, and brand messaging simultaneously"
    ]
  },
  {
    role: "Online Learning Consultant",
    organization: "YoursTutor",
    period: "Jan 2024 – Jun 2026",
    highlights: [
      "Managed complete client relationships with 100% student retention across engagement",
      "Designed personalised learning programs for 10+ students with measurable improvement tracking",
      "Owned student onboarding, session scheduling, parent communication, and progress reporting",
      "Conducted gap analysis and adapted curriculum per learner needs"
    ]
  }
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-32 md:py-48 px-6 md:px-12 lg:px-20">
      {/* ============================================
          EDITORIAL PHILOSOPHY-FIRST LAYOUT
          - Philosophy statement as hero
          - Roles as supporting content
          - Different from all previous sections
          ============================================ */}
      <div className="max-w-[1600px] mx-auto">
        
        {/* ===============================================
            PHILOSOPHY STATEMENT - Full-width hero
            - Large serif typography
            - Centered, editorial
            - No section number
            =============================================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-32 md:mb-48"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 max-w-4xl mx-auto leading-tight">
            I believe leadership is about enabling others to do their best work. It's not about being the smartest person in the room—it's about creating an environment where everyone can contribute meaningfully.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            My approach combines clear communication, stakeholder alignment, and ownership of outcomes. Whether leading a 30+ member innovation cell or managing client relationships, I focus on building trust, setting clear expectations, and delivering results that matter.
          </p>
        </motion.div>

        {/* ===============================================
            LEADERSHIP ROLES - Minimal list
            - No cards, just typography
            - Centered for editorial feel
            - Different from experience section
            =============================================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-16 md:space-y-20">
            {leadership.map((item, index) => (
              <motion.div
                key={`${item.organization}-${item.role}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                className="text-center"
              >
                {/* Role and organization */}
                <div className="mb-6">
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
                    {item.role}
                  </h3>
                  <p className="text-base text-muted-foreground">
                    {item.organization} · {item.period}
                  </p>
                </div>

                {/* Highlights - minimal list */}
                <div className="space-y-3 max-w-2xl mx-auto">
                  {item.highlights.map((highlight, i) => (
                    <p key={i} className="text-sm text-muted-foreground leading-relaxed font-light">
                      {highlight}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
