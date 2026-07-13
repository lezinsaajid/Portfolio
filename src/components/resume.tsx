"use client";

import { motion } from "framer-motion";

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
    <section id="resume" className="py-32 md:py-48 px-6 md:px-12 lg:px-20">
      {/* ============================================
          EDITORIAL CENTERED LAYOUT
          - Minimal, elegant presentation
          - No cards, just typography
          - Different from previous sections
          ============================================ */}
      <div className="max-w-[1600px] mx-auto">
        
        {/* ===============================================
            SECTION HEADER - Centered, minimal
            - No section number
            - Large serif typography
            =============================================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-24 md:mb-32"
        >
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
            Resume
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            A comprehensive overview of my journey
          </p>
        </motion.div>

        {/* ===============================================
            RESUME DOCUMENT - Editorial presentation
            - Contact info
            - PDF placeholder
            - Download link
            =============================================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          {/* Contact information */}
          <div className="text-center mb-16">
            <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Lezin Sajid
            </h3>
            <p className="text-base text-muted-foreground mb-6 font-light">
              AI-Fluent Product Builder · Business Analyst · Strategy & Operations
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <span>Bengaluru, India</span>
              <span>lezinsajid@gmail.com</span>
              <span>+91 95621 79012</span>
            </div>
          </div>

          {/* PDF placeholder - minimal */}
          <div className="mb-16 bg-muted/30 rounded-sm p-16 flex items-center justify-center min-h-[400px] border border-border/50">
            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-4 font-light">
                Resume PDF
              </p>
              <p className="text-sm text-muted-foreground/70">
                Place your resume at: <code className="bg-background px-3 py-2 rounded text-xs">public/resume.pdf</code>
              </p>
            </div>
          </div>

          {/* Download link - minimal, elegant */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-center"
          >
            <a
              href="/resume.pdf"
              download
              className="group relative inline-flex items-center gap-4 text-foreground pb-1"
            >
              <span className="text-xs tracking-[0.2em] uppercase">Download PDF</span>
              <span className="w-12 h-px bg-foreground group-hover:bg-accent transition-colors duration-700" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
