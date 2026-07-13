"use client";

import { motion } from "framer-motion";

// ============================================
// EDITORIAL CONTACT SECTION
// Minimal typography-focused layout
// Edit this section to change:
// - Contact links (email, LinkedIn, GitHub)
// - Location and availability text
// ============================================

export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-48 px-6 md:px-12 lg:px-20">
      {/* ============================================
          EDITORIAL CENTERED LAYOUT
          - Minimal, elegant presentation
          - No cards, just typography
          - Different from all previous sections
          ============================================ */}
      <div className="max-w-[1600px] mx-auto">
        
        {/* ===============================================
            SECTION HEADER - Large serif typography
            - Centered, editorial
            - No section number
            =============================================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-24 md:mb-32"
        >
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
            Let's Connect
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Open to conversations about products, AI, and opportunities
          </p>
        </motion.div>

        {/* ===============================================
            CONTACT LINKS - Minimal list
            - No cards, just typography
            - Centered for editorial feel
            =============================================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <div className="space-y-8 mb-16">
            <a
              href="mailto:lezinsajid@gmail.com"
              className="group block text-center"
            >
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2 group-hover:text-accent transition-colors duration-700">
                Email
              </h3>
              <p className="text-base text-muted-foreground font-light">
                lezinsajid@gmail.com
              </p>
            </a>

            <a
              href="https://linkedin.com/in/lezinsajid"
              target="_blank"
              rel="noopener noreferrer"
              className="group block text-center"
            >
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2 group-hover:text-accent transition-colors duration-700">
                LinkedIn
              </h3>
              <p className="text-base text-muted-foreground font-light">
                Connect professionally
              </p>
            </a>

            <a
              href="https://github.com/lezinsajid"
              target="_blank"
              rel="noopener noreferrer"
              className="group block text-center"
            >
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2 group-hover:text-accent transition-colors duration-700">
                GitHub
              </h3>
              <p className="text-base text-muted-foreground font-light">
                View my code
              </p>
            </a>
          </div>

          {/* ===============================================
              LOCATION AND AVAILABILITY
              - Centered text
              - Minimal presentation
              =============================================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-center space-y-4"
          >
            <p className="text-base text-muted-foreground font-light">
              Based in Bengaluru, India · Open to relocation
            </p>
            <p className="text-sm text-muted-foreground/70 font-light">
              Currently exploring opportunities at the intersection of technology, business, and AI
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
