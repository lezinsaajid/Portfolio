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
      "Led a 30+ member student innovation cell, coordinating workshops, hackathons, and early-stage projects",
      "Served as the key coordination bridge between student builders, faculty mentors, and institutional leadership",
      "Balanced conflicting timelines and kept student teams focused on tangible project milestones"
    ]
  },
  {
    role: "Events & Public Relations Lead",
    organization: "ACE & IEEE — GEC Wayanad",
    period: "Jul 2023 – May 2025",
    highlights: [
      "Organized and hosted technical events and programs with 500+ total attendees across two associations",
      "Coordinated cross-functional teams, venue logistics, and real-time troubleshooting under tight deadlines",
      "Managed public announcements, speaker communications, and student engagement"
    ]
  },
  {
    role: "Operations & Business Development Consultant",
    organization: "Admigo Overseas & Careers",
    period: "Jun 2026 – Jul 2026",
    highlights: [
      "Identified candidate qualification bottlenecks and built a structured intake workflow for the founder",
      "Streamlined candidate screening and managed early-stage stakeholder handoffs under lean constraints"
    ]
  },
  {
    role: "Social Media & Influencer Marketing Intern",
    organization: "Nomad Gifts (now TopoNomad)",
    period: "Jun 2023 – Nov 2023",
    highlights: [
      "Managed creator outreach, relationship coordination, and end-to-end campaign deliverables",
      "Analyzed engagement metrics across creator segments to guide future marketing efforts"
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
              Good coordination is invisible — it creates the clarity and momentum people need to do their best work.
            </h2>
            <p className={`${typography.body.base} text-muted-foreground ${container.normal} mx-auto ${typography.fontWeight.light}`}>
              Whether leading a 30-member innovation cell, organizing multi-day events, or working directly with founders and creators, I focus on clear communication, proactive ownership, and following through on what we set out to do.
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
