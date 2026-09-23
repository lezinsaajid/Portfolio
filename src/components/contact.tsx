"use client";

import { motion } from "framer-motion";
import { Section, PageContainer, SplitLayout, SectionHeader } from "@/components/layout";
import { typography, spacing, container } from "@/lib/design-tokens";
import { fadeInLeft, staggeredFadeInUp } from "@/lib/motion";

export default function Contact() {
  return (
    <Section id="contact" className="pt-12 sm:pt-16 md:pt-20">
      <PageContainer>
        <div className="border-t border-border pt-20 md:pt-28 lg:pt-36">
          <SplitLayout
            leftWidth="narrow"
            leftColumn={
              <motion.div {...fadeInLeft}>
                <SectionHeader number="07" title="Connect" />
              </motion.div>
            }
            rightColumn={
              <motion.div {...fadeInLeft} transition={{ delay: 0.2 }}>
                <div className={`${spacing.content.normal} max-w-2xl`}>
                  <p
                    className={`${typography.label.base} ${typography.label.tracking} text-muted-foreground`}
                  >
                    Let&apos;s Connect
                  </p>

                  <h2
                    className={`${typography.display.section} ${typography.fontFamily.serif} ${typography.lineHeight.normal} text-foreground`}
                  >
                    Let&apos;s build products
                    <br />
                    people actually enjoy using.
                  </h2>

                  <p
                    className={`${typography.body.base} text-muted-foreground ${typography.lineHeight.relaxed} ${typography.fontWeight.light} ${container.reading}`}
                  >
                    I&apos;m looking for opportunities in Product Management,
                    Product Operations, Business Analysis, and Strategy &amp; Operations
                    roles. If you&apos;re building something meaningful,
                    I&apos;d love to talk.
                  </p>

                  <a
                    href="mailto:lezinsajid@gmail.com"
                    className="group relative inline-flex items-center gap-4 text-foreground pb-1"
                  >
                    <span className={typography.label.base}>Get in touch</span>
                    <span className="w-12 h-px bg-foreground group-hover:bg-accent group-hover:translate-x-1 transition-all duration-700" />
                  </a>
                </div>
              </motion.div>
            }
          />
        </div>

        <footer className="border-t border-border py-14 md:py-20 mt-20 md:mt-28 lg:mt-32">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12">
            <div className="space-y-2">
              <p className={`${typography.body.small} text-muted-foreground`}>
                © 2026 Lezin Sajid
              </p>
              <p className={`${typography.body.xsmall} text-muted-foreground/70`}>
                Bengaluru, India
              </p>
            </div>

            <div className={`flex flex-wrap gap-6 md:gap-8 ${typography.body.small}`}>
              <a
                href="mailto:lezinsajid@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors duration-700"
              >
                Email
              </a>
              <a
                href="https://linkedin.com/in/lezinsajid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-700"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/lezinsaajid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-700"
              >
                GitHub
              </a>
              <a
                href="/Lezin_Sajid_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-700"
              >
                Resume
              </a>
            </div>
          </div>
        </footer>
      </PageContainer>
    </Section>
  );
}
