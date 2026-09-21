"use client";

import { motion } from "framer-motion";
import { Section, PageContainer, CenteredHeader } from "@/components/layout";
import { typography, spacing, radius, container } from "@/lib/design-tokens";
import { staggeredFadeInUp } from "@/lib/motion";

// ============================================
// EDITORIAL RESUME SECTION
// Minimal document presentation
// Edit this section to change:
// - Contact information display
// - PDF placeholder text
// - Download button styling
// ============================================

export default function Resume() {
  return (
    <Section id="resume">
      <PageContainer>
        <motion.div {...staggeredFadeInUp(0)}>
          <CenteredHeader 
            title="Resume"
            subtitle="A comprehensive overview of my journey"
          />
        </motion.div>

        <motion.div {...staggeredFadeInUp(0.2)} className={container.normal}>
          <div className="text-center mb-12 sm:mb-16">
            <h3 className={`${typography.heading.h2} text-foreground mb-3 sm:mb-4`}>
              Lezin Sajid
            </h3>
            <p className={`${typography.body.small} text-muted-foreground mb-4 sm:mb-6 ${typography.fontWeight.light}`}>
              CS Graduate · Product Builder · Product Management &amp; Operations
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
              <span>Bengaluru, India</span>
              <span>lezinsajid@gmail.com</span>
              <span>+91 95621 79012</span>
            </div>
          </div>

          <div className={`mb-12 sm:mb-16 bg-muted/30 ${radius.sm} p-8 sm:p-12 md:p-16 flex items-center justify-center min-h-[300px] sm:min-h-[400px] border border-border/50`}>
            <div className="text-center">
              <p className={`${typography.body.base} text-muted-foreground mb-3 sm:mb-4 ${typography.fontWeight.light}`}>
                Resume PDF
              </p>
              <p className={`${typography.body.xsmall} text-muted-foreground/70`}>
                Place your resume at: <code className="bg-background px-2 sm:px-3 py-1 sm:py-2 rounded text-[10px] sm:text-xs">public/resume.pdf</code>
              </p>
            </div>
          </div>

          <motion.div {...staggeredFadeInUp(0.4)} className="text-center">
            <a
              href="/resume.pdf"
              download
              className="group relative inline-flex items-center gap-4 text-foreground pb-1"
            >
              <span className={`${typography.label.base}`}>Download PDF</span>
              <span className="w-12 h-px bg-foreground group-hover:bg-accent transition-colors duration-700" />
            </a>
          </motion.div>
        </motion.div>
      </PageContainer>
    </Section>
  );
}
