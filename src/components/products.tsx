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
    name: "HikerNet",
    tagline: "Community Trekking Platform",
    type: "Mobile Product · Completed Project",
    problem: "Trekking enthusiasts struggle to find groups, discover trails, and coordinate logistics. Existing platforms are either commercial tour operators or scattered WhatsApp groups with no discoverability.",
    mvpScope: "Academic / product project. Owned product scoping — defined core user journeys, prioritized MVP features, translated requirements into development tasks, and coordinated execution across the team.",
    keyTradeoff: "Chose MongoDB over PostgreSQL for flexible schema that could evolve with user-generated content patterns we hadn't fully mapped yet. Accepted weaker relational querying for faster iteration on the data model.",
    whatIDidntBuild: "Designed the UI in Figma, self-taught specifically for this project. Deliberately deferred real-time group chat, gear rental marketplace, guide bookings, and weather integration to focus entirely on group formation and trail discovery.",
    metrics: "Groups created per week, trek completion rate, repeat group formation, time from signup to first trek join.",
    techContext: "React Native · Node.js · MongoDB · REST APIs · Express · Figma",
    image: "/hk_logo.jpg",
    github: "https://github.com/lezinsaajid/hikernet",
    demo: "#"
  },
  {
    name: "DollarDairy",
    tagline: "AI-Powered Personal Finance App",
    type: "Mobile Product · Ongoing Project · 6–7 Months Development",
    problem: "People don't track spending because manual entry creates friction. Traditional finance apps assume users will categorize transactions and navigate dashboards. Natural language is how people actually think about money — query spending in plain language instead of navigating dashboards.",
    mvpScope: "Designed and shipped a conversational expense-tracking experience by integrating Google's Gemini API directly, letting users query spending in plain language.",
    keyTradeoff: "Spent development cycle designing the conversational interface and prompt design with Gemini API directly over custom NLP. Handled Gemini API rate limits, latency considerations, and decisions about what financial data should be exposed to the model.",
    whatIDidntBuild: "Budget recommendations, spending predictions, multi-currency support, bank API integration for automatic imports. Focused entirely on conversational finance query latency and reliability.",
    metrics: "Conversational query retention rate, queries per user per week, spending tracking consistency over 30 days, manual-entry-to-query ratio.",
    techContext: "React Native · Expo · Node.js · PostgreSQL · Drizzle ORM · Gemini API",
    image: "/dd logo.png",
    github: "https://github.com/lezinsaajid/dollardairy",
    demo: "#"
  },
  {
    name: "Ascendra",
    tagline: "Career Management Platform",
    type: "Full-stack SaaS · Live Product",
    problem: "Job seekers manage their search across disconnected spreadsheets, losing track of follow-ups and momentum. Job seekers have applications, resumes, questionnaires, companies, roles, and follow-ups scattered across different places.",
    mvpScope: "Defined the MVP by prioritizing application management, resume organization, and workflow visibility. Wrote product requirements, user stories, and built and deployed the full-stack app solo.",
    keyTradeoff: "Deliberately deferred AI features until the core experience was solid, rather than chasing a flashier v1. Chose Clean Architecture with Repository Pattern over faster development speed to facilitate future AI-powered resume analysis.",
    whatIDidntBuild: "Social features, job board API integrations, team collaboration, mobile app. Focused entirely on establishing the core job-search management workflow.",
    metrics: "Weekly active users, applications tracked per user, resume downloads, 7-day retention after signup.",
    techContext: "Angular · FastAPI · PostgreSQL · Docker · JWT auth with refresh token rotation",
    image: "/Ascendra logo.png",
    github: "https://github.com/lezinsaajid/ascendra",
    demo: "https://ascendra-ruby.vercel.app/"
  },
  {
    name: "CRM Sales Pipeline Analysis",
    tagline: "Sales / Product Analytics Project",
    type: "Data Analysis Project · Completed Project",
    problem: "Worked with CRM sales opportunity and sales-team datasets — checked for missing or inconsistent values and structured the data for analysis.",
    mvpScope: "Used SQL for data analysis and Tableau to build an interactive dashboard covering total opportunities, revenue, win rate, sales stages, monthly trends, agent performance, and revenue by industry and product.",
    keyTradeoff: "Compared multiple views of the data rather than relying on a single metric, so the dashboard gave real context, not just numbers.",
    whatIDidntBuild: "Complex predictive models or automated alerts. Kept focus on high-fidelity visual representations of sales cycles and agent performance tables.",
    metrics: "Revenue: $10,005,534 | Win Rate: 48.16% | Opportunities: 8,800",
    techContext: "SQL · Tableau · Data Preprocessing & Cleaning",
    image: "/crm_logo.png",
    github: "https://github.com/lezinsaajid/CRM-Sales-Pipeline-Analysis",
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
