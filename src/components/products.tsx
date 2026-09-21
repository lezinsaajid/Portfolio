"use client";

import { motion } from "framer-motion";
import { Section, PageContainer, CenteredHeader } from "@/components/layout";
import { typography, spacing, radius, grid, container } from "@/lib/design-tokens";
import { staggeredFadeInUp, fadeInScale } from "@/lib/motion";
import Image from "next/image";

// ============================================
// EDITORIAL PRODUCTS SECTION
// Product case studies with PM-first narrative
// Each project leads with WHY, not WHAT
// Edit this section to change:
// - Product details (name, tagline, description)
// - Problem/approach/solution narrative
// - MVP decisions and trade-offs
// - Success metrics
// - GitHub and demo links
// ============================================

const products = [
  {
    name: "Ascendra",
    tagline: "AI-Powered Career Management Platform",
    type: "Full-Stack Web App · Live Product · Built Solo",
    problem: "Job searching is fragmented and difficult to manage across disconnected spreadsheets, notes, and documents. Candidates lose momentum and struggle to track application stages, organize role-specific resumes, and maintain consistent follow-ups in one place.",
    mvpScope: "Built and deployed an end-to-end career management platform solo. Designed a centralized workflow to organize applications, track hiring pipelines, and manage tailored resumes from scratch.",
    keyTradeoff: "Solidified the core pipeline workflow and data architecture first before adding AI layers, ensuring a reliable foundation. Architected the backend using Clean Architecture with FastAPI and PostgreSQL so AI resume parsing and tailoring could be integrated modularly.",
    whatIDidntBuild: "Deliberately deferred job-board scraping, community forums, and mobile apps to focus entirely on eliminating tracking friction and building a fast, dependable workflow.",
    metrics: "Focused on workflow progression: application stage conversion velocity, active pipeline updates, and 30-day workflow retention. What I learned: Building end-to-end proved that speed, clarity, and zero-friction tracking matter far more to users than unnecessary feature complexity.",
    techContext: "Angular · FastAPI · PostgreSQL · Docker · JWT Auth · Clean Architecture",
    image: "/Ascendra logo.png",
    github: "https://github.com/lezinsaajid/ascendra",
    demo: "https://ascendra-ruby.vercel.app/"
  },
  {
    name: "DollarDairy",
    tagline: "AI-Powered Expense Tracking & Spending Assistant",
    type: "Mobile Product · AI Assistant",
    problem: "People avoid tracking expenses because manual categorization into complex forms creates excessive friction. Traditional apps make understanding personal finance feel like managing a spreadsheet.",
    mvpScope: "Designed and built an AI-powered expense tracking and spending assistant that replaces rigid forms with conversational queries, making personal finance information intuitive and immediate to query.",
    keyTradeoff: "Integrated Google's Gemini API directly for intent classification and plain-language queries (e.g., 'How much did I spend on food this weekend?'), prioritizing prompt reliability and low-latency responses over building complex custom NLP.",
    whatIDidntBuild: "Deferred automated bank scraping, investment forecasts, and multi-currency conversions to focus completely on conversational query accuracy and frictionless logging.",
    metrics: "Conversational query retention rate, 30-day tracking consistency, and the ratio of natural-language queries to manual views.",
    techContext: "React Native · Expo · Node.js · PostgreSQL · Drizzle ORM · Gemini API",
    image: "/dd logo.png",
    github: "https://github.com/lezinsaajid/dollardairy",
    demo: "#"
  },
  {
    name: "WordPlay",
    tagline: "Voice-First Communication & Vocabulary Coach",
    type: "AI Product Experiment · Conversational UX",
    problem: "Traditional language and vocabulary apps rely on passive flashcards and multiple-choice drills that fail to prepare learners for real-world, spoken conversations.",
    mvpScope: "Created a voice-first communication coach built around Naina, a conversational AI assistant that engages learners in real-time spoken dialogue and provides actionable feedback on phrasing and vocabulary.",
    keyTradeoff: "Used Vapi for voice orchestration to achieve natural conversational turn-taking. Focused entirely on real-world communication practice rather than traditional flashcard quizzes.",
    whatIDidntBuild: "Deferred gamified leaderboards, written grammar handbooks, and multi-language translation to keep the product experience dedicated to conversational fluency.",
    metrics: "Speaking minutes per session, conversational turn completion rate, and 14-day repeat practice frequency.",
    techContext: "Vapi · Conversational AI · WebRTC · Node.js · Prompt Engineering",
    image: "/wordplay_logo.jpg",
    github: "https://github.com/lezinsaajid",
    demo: "#"
  },
  {
    name: "HikerNet",
    tagline: "Community Trekking & Trail Discovery",
    type: "Mobile Product · Product Project",
    problem: "Trekking enthusiasts struggle to discover local trails and coordinate with hiking companions, often relying on chaotic and unorganized social group chats.",
    mvpScope: "Defined core user journeys and built an MVP focused on trail discovery and group coordination, scoping requirements and executing the mobile interface.",
    keyTradeoff: "Chose MongoDB over PostgreSQL for a flexible schema that could evolve with user-generated trail logs and group details as patterns emerged.",
    whatIDidntBuild: "Deliberately deferred real-time group chat, commercial gear rentals, and live GPS tracking to focus purely on group formation and verified trail discovery.",
    metrics: "Trek groups formed, trail review completion rate, and time from signup to joining a first trek.",
    techContext: "React Native · Node.js · MongoDB · REST APIs · Express · Figma",
    image: "/hk_logo.jpg",
    github: "https://github.com/lezinsaajid/hikernet",
    demo: "#"
  }
];

export default function Products() {
  return (
    <Section id="products">
      <PageContainer>
        <motion.div {...staggeredFadeInUp(0)}>
          <CenteredHeader 
            title="Product Work"
            />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className={`${typography.body.base} text-muted-foreground ${typography.lineHeight.relaxed} ${typography.fontWeight.light} text-center mx-auto whitespace-nowrap`}
        >
          Not what I built — why I built it, what I chose not to build, and what I'd measure
        </motion.p>

        <div className={spacing.content.xl}>
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              {...staggeredFadeInUp(index * 0.2)}
              className={`grid grid-cols-12 ${spacing.grid.normal} items-start`}
            >
              {/* ===============================================
                  PRODUCT VISUAL
                  - Placeholder with product initial as fallback
                  =============================================== */}
              <motion.div
                {...fadeInScale}
                className={`col-span-12 md:col-span-5 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'} mb-8 md:mb-0`}
              >
                <div className="aspect-[16/10] sm:aspect-[4/3] md:aspect-[16/10] rounded-sm overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Tech context appears below visual, secondary to narrative */}
                <div className="mt-4 sm:mt-6">
                  <p className={`${typography.body.xsmall} text-muted-foreground/60 ${typography.fontWeight.light}`}>
                    {product.techContext}
                  </p>
                </div>
              </motion.div>

              {/* ===============================================
                  PRODUCT NARRATIVE
                  - Leads with problem, not tech
                  - Shows product thinking through decisions
                  =============================================== */}
              <motion.div
                {...staggeredFadeInUp(index * 0.2 + 0.3)}
                className={`col-span-12 md:col-span-7 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}
              >
                <div className={spacing.content.normal}>
                  {/* Product header */}
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                      {product.type.split(" · ").map((badgeText, bIdx) => {
                        const isHighlight = badgeText.toLowerCase().includes("ongoing") || badgeText.toLowerCase().includes("live");
                        return (
                          <span 
                            key={bIdx}
                            className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium tracking-wide uppercase border ${
                              isHighlight 
                                ? 'bg-accent/15 text-accent border-accent/20' 
                                : 'bg-muted/50 text-muted-foreground border-border/40'
                            }`}
                          >
                            {badgeText}
                          </span>
                        );
                      })}
                    </div>
                    <h3 className={`${typography.display.section} text-foreground mb-3 sm:mb-4`}>
                      {product.name}
                    </h3>
                    <p className={`${typography.body.base} text-accent ${typography.fontWeight.light}`}>
                      {product.tagline}
                    </p>
                  </div>

                  {/* Problem — the most important part */}
                  <div>
                    <span className={typography.label.base}>Problem Identified</span>
                    <p className={`${typography.body.small} text-muted-foreground mt-2 sm:mt-3 ${typography.lineHeight.relaxed}`}>
                      {product.problem}
                    </p>
                  </div>

                  {/* MVP Scope Decision */}
                  <div>
                    <span className={typography.label.base}>MVP Scope & My Role</span>
                    <p className={`${typography.body.small} text-muted-foreground mt-2 sm:mt-3 ${typography.lineHeight.relaxed}`}>
                      {product.mvpScope}
                    </p>
                  </div>

                  {/* Key Trade-off */}
                  <div>
                    <span className={typography.label.base}>Key Trade-off</span>
                    <p className={`${typography.body.small} text-muted-foreground mt-2 sm:mt-3 ${typography.lineHeight.relaxed}`}>
                      {product.keyTradeoff}
                    </p>
                  </div>

                  {/* What I Deliberately Didn't Build */}
                  <div>
                    <span className={typography.label.base}>What I Deliberately Didn&apos;t Build</span>
                    <p className={`${typography.body.small} text-muted-foreground mt-2 sm:mt-3 ${typography.lineHeight.relaxed}`}>
                      {product.whatIDidntBuild}
                    </p>
                  </div>

                  {/* Success Metrics */}
                  <div>
                    <span className={typography.label.base}>What I&apos;d Measure</span>
                    <p className={`${typography.body.small} text-muted-foreground mt-2 sm:mt-3 ${typography.lineHeight.relaxed}`}>
                      {product.metrics}
                    </p>
                  </div>

                  {/* CTAs */}
                  {/* CTAs */}
                  <div className="flex gap-4 sm:gap-6 pt-4">
                    <a
                      href={product.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center gap-3 text-foreground pb-1"
                    >
                      <span className={typography.label.base}>Source Code</span>
                      <span className="w-8 h-px bg-foreground group-hover:bg-accent transition-colors duration-700" />
                    </a>

                    {product.demo !== "#" && (
                      <a
                        href={product.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-3 text-foreground pb-1"
                      >
                        <span className={typography.label.base}>Live Product</span>
                        <span className="w-8 h-px bg-foreground group-hover:bg-accent transition-colors duration-700" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </PageContainer>
    </Section>
  );
}
