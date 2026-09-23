"use client";

import { motion } from "framer-motion";
import { PageContainer } from "@/components/layout";
import { typography, spacing, container, colorOpacity } from "@/lib/design-tokens";

// ============================================
// EDITORIAL HERO SECTION
// Luxury magazine-style landing page
// ============================================

export default function Hero() {
  return (
    <section className="min-h-[90vh] lg:min-h-screen flex items-center relative overflow-hidden">
      <PageContainer className="relative z-10">
        {/* Background typography — centered on the page composition */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10"
          aria-hidden="true"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 0.06, scale: 1 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className={`${typography.fontFamily.serif} text-[clamp(7rem,22vw,18rem)] ${typography.lineHeight.tight} text-foreground whitespace-nowrap select-none`}
          >
            LEZIN
          </motion.h1>
        </div>

        <div className={`grid grid-cols-12 ${spacing.grid.normal} items-center`}>
          {/* Portrait — 5 columns on desktop for visual weight balance */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
            className="col-span-12 md:col-span-5 lg:col-span-5 order-2 md:order-1 relative"
          >
            <div className="relative aspect-[3/4] w-full max-w-[min(100%,320px)] md:max-w-none mx-auto md:mx-0">
              <div className="absolute inset-0 border border-accent/20 rounded-t-full translate-x-3 sm:translate-x-4 translate-y-3 sm:translate-y-4 pointer-events-none" />

              <div className="relative w-full h-full bg-muted/40 rounded-t-full overflow-hidden">
                <img
                  src="/portrait.jpg"
                  alt="Lezin Sajid"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Editorial content — 7 columns, fills remaining grid */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
            className="col-span-12 md:col-span-7 lg:col-span-7 order-1 md:order-2"
          >
            <div className={`${spacing.content.loose}`}>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.8 }}
                className={`${typography.label.base} ${typography.label.tracking} text-muted-foreground text-center md:text-left`}
              >
                CS Graduate · Product Builder
              </motion.p>

              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 1 }}
                className={`${typography.display.hero} ${typography.fontFamily.serif} ${typography.lineHeight.tight} text-foreground text-center md:text-left`}
              >
                Lezin
                <br />
                Sajid
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 1.15 }}
                className={`${typography.heading.h4} ${typography.fontFamily.serif} text-foreground text-center md:text-left mx-auto md:mx-0 ${typography.lineHeight.normal}`}
              >
                I like figuring out what should be built — and then building it.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 1.3 }}
                className={`${typography.body.base} text-muted-foreground ${container.reading} md:max-w-none ${typography.lineHeight.relaxed} ${typography.fontWeight.light} text-center md:text-left mx-auto md:mx-0`}
              >
                CS graduate and product builder interested in the space between users, technology, and business. I build AI-powered products, think through product decisions, and enjoy turning ideas into things people can actually use.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 1.4 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 pt-2 justify-center md:justify-start"
              >
                <a
                  href="#products"
                  className="group relative inline-flex items-center gap-4 text-foreground pb-1"
                >
                  <span className={typography.label.base}>Product Work</span>
                  <span className="w-12 h-px bg-foreground group-hover:bg-accent transition-colors duration-700" />
                </a>
                <a
                  href="/Lezin_Sajid_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-4 text-foreground pb-1"
                >
                  <span className={typography.label.base}>Resume</span>
                  <span className="w-12 h-px bg-foreground group-hover:bg-accent transition-colors duration-700" />
                </a>
                <a
                  href="https://linkedin.com/in/lezinsajid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-4 text-foreground pb-1"
                >
                  <span className={typography.label.base}>LinkedIn</span>
                  <span className="w-12 h-px bg-foreground group-hover:bg-accent transition-colors duration-700" />
                </a>
                <a
                  href="https://github.com/lezinsaajid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-4 text-foreground pb-1"
                >
                  <span className={typography.label.base}>GitHub</span>
                  <span className="w-12 h-px bg-foreground group-hover:bg-accent transition-colors duration-700" />
                </a>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 1.6 }}
                className={`${typography.body.xsmall} text-muted-foreground/60 ${typography.fontWeight.light} text-center md:text-left`}
              >
                Open to Product Management · Product Operations · Business Analysis · Strategy & Ops · Bengaluru
              </motion.p>
            </div>
          </motion.div>
        </div>


      </PageContainer>
    </section>
  );
}
