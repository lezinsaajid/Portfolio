"use client";

import { motion } from "framer-motion";

// ============================================
// EDITORIAL CERTIFICATIONS SECTION
// Minimal list with emphasis on issuer
// Edit this section to change:
// - Certification names and issuers
// - Dates and descriptions
// - Credential links
// ============================================

const certifications = [
  {
    name: "AI Fluency Framework & Foundations",
    issuer: "Anthropic",
    date: "Jun 2026",
    credential: "https://www.anthropic.com",
    description: "Comprehensive understanding of AI systems, capabilities, limitations, and ethical considerations. Applied directly in production applications."
  },
  {
    name: "Claude 101 — Prompt Engineering",
    issuer: "Anthropic",
    date: "Jun 2026",
    credential: "https://www.anthropic.com",
    description: "Advanced prompt engineering techniques for optimizing LLM interactions. Applied in DollarDairy for natural language finance queries."
  },
  {
    name: "One Million Prompters",
    issuer: "Anthropic / UAE AI Initiative",
    date: "2026",
    credential: "#",
    description: "Part of global initiative to train one million people in AI prompt engineering and responsible AI usage."
  },
  {
    name: "SQL (Advanced)",
    issuer: "HackerRank",
    date: "Jun 2026",
    credential: "https://www.hackerrank.com",
    description: "Advanced SQL skills including complex queries, joins, subqueries, and database optimization. Applied in analytics dashboards and business reporting."
  },
  {
    name: "SQL (Basic)",
    issuer: "HackerRank",
    date: "Jun 2026",
    credential: "https://www.hackerrank.com",
    description: "Foundational SQL knowledge including SELECT, INSERT, UPDATE, DELETE operations and basic database design."
  },
  {
    name: "Problem Solving (Intermediate)",
    issuer: "HackerRank",
    date: "Jun 2026",
    credential: "https://www.hackerrank.com",
    description: "Intermediate algorithmic problem-solving skills with focus on data structures and algorithms."
  },
  {
    name: "Foundational C# with Microsoft",
    issuer: "freeCodeCamp",
    date: "Nov 2025",
    credential: "https://www.freecodecamp.org",
    description: "Foundational C# programming concepts including object-oriented programming, .NET framework basics, and application development."
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-32 md:py-48 px-6 md:px-12 lg:px-20">
      {/* ============================================
          EDITORIAL TWO-COLUMN LAYOUT
          - Left: Section number and title
          - Right: Certifications grouped by issuer
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
              <span className="font-serif text-6xl md:text-7xl text-muted-foreground/30">04</span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
                Credentials
              </h2>
            </div>
          </motion.div>

          {/* ===============================================
              RIGHT COLUMN: CERTIFICATIONS (10 columns)
              - Grouped by issuer
              - Minimal presentation
              - No cards, just typography
              =============================================== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="col-span-12 md:col-span-10"
          >
            <div className="space-y-20">
              {/* Group by issuer */}
              {[
                {
                  issuer: "Anthropic",
                  certs: certifications.filter(c => c.issuer.includes("Anthropic"))
                },
                {
                  issuer: "HackerRank",
                  certs: certifications.filter(c => c.issuer.includes("HackerRank"))
                },
                {
                  issuer: "Other",
                  certs: certifications.filter(c => !c.issuer.includes("Anthropic") && !c.issuer.includes("HackerRank"))
                }
              ].map((group, groupIndex) => (
                <motion.div
                  key={group.issuer}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: groupIndex * 0.15, ease: "easeOut" }}
                >
                  {/* Issuer header */}
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-8">
                    {group.issuer}
                  </h3>

                  {/* Certifications for this issuer */}
                  <div className="space-y-8">
                    {group.certs.map((cert, certIndex) => (
                      <motion.div
                        key={cert.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: certIndex * 0.05, ease: "easeOut" }}
                        className="group"
                      >
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                          <div className="flex-1">
                            <h4 className="text-lg md:text-xl text-foreground mb-2 group-hover:text-accent transition-colors duration-700">
                              {cert.name}
                            </h4>
                            <p className="text-sm text-muted-foreground mb-3">
                              {cert.date}
                            </p>
                            <p className="text-base text-muted-foreground leading-relaxed font-light max-w-2xl">
                              {cert.description}
                            </p>
                          </div>
                          {cert.credential !== "#" && (
                            <a
                              href={cert.credential}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-accent transition-colors duration-700 whitespace-nowrap"
                            >
                              View
                            </a>
                          )}
                        </div>
                      </motion.div>
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
