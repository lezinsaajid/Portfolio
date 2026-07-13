"use client";

import { motion } from "framer-motion";

// ============================================
// EDITORIAL HERO SECTION
// Luxury magazine-style landing page
// Edit this section to change:
// - Name and positioning statement
// - Social links
// - Portrait image (add to public/)
// ============================================

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 relative overflow-hidden">
      {/* ============================================
          HUGE BACKGROUND TYPOGRAPHY
          - Creates editorial depth
          - Serif font for luxury feel
          - Very subtle opacity
          ============================================ */}
      <div className="absolute inset-0 flex items-center justify-start pointer-events-none pl-4 md:pl-12">
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 0.04, scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="font-serif text-[25vw] leading-none text-foreground whitespace-nowrap"
        >
          LEZIN
        </motion.h1>
      </div>

      {/* ============================================
          EDITORIAL GRID LAYOUT
          - 12-column grid system
          - Portrait on left, content on right
          - Overlapping composition
          ============================================ */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto">
        <div className="grid grid-cols-12 gap-6 md:gap-12 items-end">
          
          {/* ===============================================
              PORTRAIT COLUMN (4 columns)
              - Professional portrait overlapping typography
              - Elegant frame
              - Add your portrait: /public/portrait.jpg
              =============================================== */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
            className="col-span-12 md:col-span-5 lg:col-span-4 order-2 md:order-1"
          >
            <div className="relative aspect-[3/4] bg-muted/40 overflow-hidden">
              <img 
                src="/portrait.jpg" 
                alt="Lezin Sajid" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* ===============================================
              EDITORIAL CONTENT COLUMN (8 columns)
              - Large serif typography
              - Minimal, elegant copy
              - Strong positioning statement
              =============================================== */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
            className="col-span-12 md:col-span-7 lg:col-span-8 pb-16 md:pb-24 order-1 md:order-2"
          >
            <div className="space-y-8 md:space-y-12">
              
              {/* ===============================================
                  POSITIONING STATEMENT
                  - Small, elegant uppercase
                  - Tracking for editorial feel
                  =============================================== */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.8 }}
                className="text-xs md:text-sm tracking-[0.4em] uppercase text-muted-foreground"
              >
                AI-Fluent Product Builder
              </motion.p>

              {/* ===============================================
                  NAME - MASSIVE SERIF TYPOGRAPHY
                  - Editorial headline style
                  - Tight leading for impact
                  - Serif font for luxury
                  =============================================== */}
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 1 }}
                className="font-serif text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] leading-[0.85] text-foreground"
              >
                Lezin<br />Sajid
              </motion.h1>

              {/* ===============================================
                  EDITORIAL SUBHEAD
                  - Light weight for elegance
                  - Generous line height
                  - Max width for readability
                  =============================================== */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 1.2 }}
                className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-xl leading-relaxed font-light"
              >
                Building products at the intersection of technology, business, and AI. Anthropic certified in AI Fluency and Prompt Engineering.
              </motion.p>

              {/* ===============================================
                  MINIMAL NAVIGATION LINKS
                  - Underline style for elegance
                  - No buttons, just typography
                  - Slow hover transitions
                  =============================================== */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 1.4 }}
                className="flex flex-col md:flex-row gap-6 md:gap-12 pt-4"
              >
                <a
                  href="#products"
                  className="group relative inline-flex items-center gap-4 text-foreground pb-1"
                >
                  <span className="text-xs tracking-[0.3em] uppercase">View Work</span>
                  <span className="w-12 h-px bg-foreground group-hover:bg-accent transition-colors duration-700" />
                </a>
                <a
                  href="#contact"
                  className="group relative inline-flex items-center gap-4 text-foreground pb-1"
                >
                  <span className="text-xs tracking-[0.3em] uppercase">Contact</span>
                  <span className="w-12 h-px bg-foreground group-hover:bg-accent transition-colors duration-700" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ============================================
          SOCIAL LINKS - Minimal vertical stack
          - Fixed position on left
          - Elegant typography
          - Slow hover transitions
          ============================================ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.6 }}
        className="absolute bottom-12 left-6 md:left-12 flex flex-col gap-6"
      >
        <a
          href="https://linkedin.com/in/lezinsajid"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs tracking-[0.3em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-700"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/lezinsajid"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs tracking-[0.3em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-700"
        >
          GitHub
        </a>
      </motion.div>
    </section>
  );
}
