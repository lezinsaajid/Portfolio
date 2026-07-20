"use client";

import { motion } from "framer-motion";
import { Section, PageContainer, CenteredHeader } from "@/components/layout";
import { typography, spacing, container } from "@/lib/design-tokens";
import { staggeredFadeInUp } from "@/lib/motion";

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
    <Section id="leadership">
      <PageContainer>
        <motion.div {...staggeredFadeInUp(0)}>
          <div className="text-center mb-16 md:mb-20 lg:mb-32 xl:mb-48">
            <h2 className={`${typography.display.section} ${typography.fontFamily.serif} text-foreground mb-6 sm:mb-8 ${container.wide} mx-auto ${typography.lineHeight.normal}`}>
              I believe leadership is about enabling others to do their best work. It's not about being the smartest person in the room—it's about creating an environment where everyone can contribute meaningfully.
            </h2>
            <p className={`${typography.body.base} text-muted-foreground ${container.normal} mx-auto ${typography.fontWeight.light}`}>
              My approach combines clear communication, stakeholder alignment, and ownership of outcomes. Whether leading a 30+ member innovation cell or managing client relationships, I focus on building trust, setting clear expectations, and delivering results that matter.
            </p>
          </div>
        </motion.div>

        <motion.div {...staggeredFadeInUp(0.2)} className="mx-auto max-w-4xl">
          <div className={spacing.content.loose}>
            {leadership.map((item, index) => (
              <motion.div
                key={`${item.organization}-${item.role}`}
                {...staggeredFadeInUp(index * 0.1)}
                className="text-center"
              >
                <div className="mb-4 sm:mb-6">
                  <h3 className={`${typography.heading.h3} text-foreground mb-2`}>
                    {item.role}
                  </h3>
                  <p className={`${typography.body.small} text-muted-foreground`}>
                    {item.organization} · {item.period}
                  </p>
                </div>

                <div className={spacing.content.tight}>
                  {item.highlights.map((highlight, i) => (
                    <p key={i} className={`${typography.body.xsmall} text-muted-foreground ${typography.lineHeight.relaxed} ${typography.fontWeight.light}`}>
                      {highlight}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </PageContainer>
    </Section>
  );
}
