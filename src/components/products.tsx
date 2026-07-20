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
    tagline: "Career Management Platform",
    type: "Full-stack SaaS · Live product",
    problem: "Job seekers manage their search across disconnected spreadsheets, losing track of follow-ups and momentum. No tool combined application tracking with resume management and actionable analytics — existing solutions are either too simple or enterprise-grade overkill.",
    mvpScope: "Prioritized Kanban workflow, resume vault, and analytics dashboard for v1. Deliberately deferred social features, third-party job board integrations, and collaborative tools — validated core tracking value first.",
    keyTradeoff: "Chose Clean Architecture with Repository Pattern over faster development speed. The v2 roadmap includes AI-powered resume analysis and career coaching, which would require rebuilding the core otherwise. Accepted slower initial delivery for long-term extensibility.",
    whatIDidntBuild: "Social features, job board API integrations, team collaboration, mobile app. Each had user interest signals but would have diluted focus before proving the core value proposition.",
    metrics: "Weekly active users, applications tracked per user, resume downloads, time-to-first-application-logged, 7-day retention after signup.",
    techContext: "Angular · FastAPI · PostgreSQL · Docker · JWT auth with refresh token rotation",
    image: "/Ascendra logo.png",
    github: "https://github.com/lezinsaajid/ascendra",
    demo: "https://ascendra-ruby.vercel.app/"
  },
  {
    name: "DollarDairy",
    tagline: "AI-Powered Personal Finance App",
    type: "Mobile product · AI-powered",
    problem: "People don't track spending because manual entry creates friction. Every finance app assumes users will categorize transactions and navigate dashboards. Natural language is how people actually think about money — 'how much did I spend on food last month?' is the real query.",
    mvpScope: "Built conversational spending queries as the primary interface. Users ask questions in plain English and get answers from their real transaction data. Kept traditional transaction entry as secondary — the insight is the product, not the data entry.",
    keyTradeoff: "Integrated Anthropic's Claude API for natural language processing instead of building a custom NLP model. Higher per-query cost, but dramatically faster time-to-validation and significantly better accuracy for the conversational use case.",
    whatIDidntBuild: "Budget recommendations, spending predictions, multi-currency support, bank API integration for automatic imports. Focused v1 entirely on proving that conversational finance queries reduce the friction that prevents tracking.",
    metrics: "Queries per user per week, spending tracking consistency over 30 days, natural language query accuracy rate, manual-entry-to-query ratio.",
    techContext: "React Native · Expo · Node.js · PostgreSQL · Drizzle ORM · Claude API",
    image: "/dd logo.png",
    github: "https://github.com/lezinsaajid/dollardairy",
    demo: "#"
  },
  {
    name: "HikerNet",
    tagline: "Community Trekking Platform",
    type: "Mobile product · Group project",
    problem: "Trekking enthusiasts struggle to find groups, discover trails, and coordinate logistics. Existing platforms are either commercial tour operators or scattered WhatsApp groups with no discoverability.",
    mvpScope: "My role: Owned product scoping and requirements. Defined core user workflows, prioritized features for v1, and coordinated execution across the team. Focused v1 on group formation and trail discovery — the 'find people to trek with' problem.",
    keyTradeoff: "Chose MongoDB over PostgreSQL for flexible schema that could evolve with user-generated content patterns we hadn't fully mapped yet. Accepted weaker relational querying for faster iteration on the data model.",
    whatIDidntBuild: "Real-time group chat, gear rental marketplace, guide bookings, weather integration. Validated that the core 'discover and join treks' loop was worth solving before adding layers.",
    metrics: "Groups created per week, trek completion rate, repeat group formation, time from signup to first trek join.",
    techContext: "React Native · Node.js · MongoDB · REST APIs · Express",
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
                    <p className={`${typography.label.base} text-muted-foreground mb-2 sm:mb-3`}>
                      {product.type}
                    </p>
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
