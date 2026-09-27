"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CodeEditorAnimation } from "@/components/sections/CodeEditorAnimation";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Hero() {
  return (
    <section className="bg-white pt-16 pb-20 md:pt-24 md:pb-28">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-8">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl lg:text-6xl"
            >
              We build digital solutions that move your business forward.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-base text-slate md:text-lg"
            >
              Web Development
              <span className="mx-2 text-amber">•</span>
              AI
              <span className="mx-2 text-amber">•</span>
              Automation
            </motion.p>

            <motion.div
  initial={{ opacity: 0, y: 16 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
  className="mt-8 flex flex-wrap items-center gap-4"
>
  <MagneticButton>
    <Button href="#contact" variant="primary">
      Start a Conversation
    </Button>
  </MagneticButton>
  <Button href="#work" variant="secondary">
    View Our Work
  </Button>
</motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <CodeEditorAnimation />
            <div className="absolute -right-3 -top-3 -z-10 h-full w-full rounded-sm border border-amber/30 md:-right-4 md:-top-4" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}