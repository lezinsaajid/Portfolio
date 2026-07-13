"use client";

import { motion } from "framer-motion";

// ============================================
// EDITORIAL ABOUT SECTION
// Split layout with large typography
// Edit this section to change:
// - Bio text and paragraphs
// - Section title
// ============================================

const bio = [
  "I don't just write code—I build products. My approach starts with understanding the problem deeply before touching a single line of implementation. I believe the best solutions emerge from the intersection of user needs, business constraints, and technical feasibility.",
  "Ambiguity doesn't paralyze me; it energizes me. In every role—from early-stage startups to student leadership—I've thrived in environments where the path isn't clearly defined. I enjoy mapping out the terrain, making decisions with incomplete information, and iterating rapidly based on feedback.",
  "What motivates me is the journey from idea to impact. There's something deeply satisfying about taking a concept, wrestling with the complexities, and shipping something that real people use. This is why I've built three production-ready applications solo—not because I had to, but because I couldn't not build them.",
  "I'm particularly drawn to AI not as a buzzword, but as a tool that amplifies human capability. My certification from Anthropic isn't just a credential—it's a framework I apply daily to solve real problems, from automating workflows to building intelligent features that make products more valuable.",
  "Ultimately, I see myself as a bridge between technology and business. I speak the language of engineers and the language of stakeholders. I can dive into the code, but I can also step back and ask: 'Is this the right problem to solve? Is this the best way to solve it? What's the ROI?'"
];

export default function About() {
  return (
    <section id="about" className="py-32 md:py-48 px-6 md:px-12 lg:px-20">
      {/* ============================================
          EDITORIAL SPLIT LAYOUT
          - Left: Large section number and title
          - Right: Bio content
          - Asymmetrical for visual interest
          ============================================ */}
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-12 gap-8 md:gap-16">
          
          {/* ===============================================
              LEFT COLUMN: SECTION NUMBER & TITLE (3 columns)
              - Large editorial numbering
              - Serif typography
              - Fixed position feel
              =============================================== */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="col-span-12 md:col-span-3 sticky top-32 h-fit"
          >
            <div className="space-y-4">
              <span className="font-serif text-6xl md:text-7xl text-muted-foreground/30">01</span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
                How I Think
              </h2>
            </div>
          </motion.div>

          {/* ===============================================
              RIGHT COLUMN: BIO CONTENT (9 columns)
              - Large editorial typography
              - Generous line height
              - Staggered paragraph reveals
              =============================================== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="col-span-12 md:col-span-9"
          >
            <div className="space-y-12 md:space-y-16">
              {bio.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: index * 0.15, ease: "easeOut" }}
                  className="text-xl md:text-2xl lg:text-3xl text-muted-foreground leading-relaxed font-light max-w-4xl"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
