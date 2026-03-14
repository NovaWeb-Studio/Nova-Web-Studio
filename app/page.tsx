"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import ServicesStrip from "@/components/sections/ServicesStrip";
import StatsRow from "@/components/sections/StatsRow";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import AIChatWidget from "@/components/AIChatWidget";

const IntroScreen = dynamic(() => import("@/components/IntroScreen"), { ssr: false });
const HeroMesh = dynamic(() => import("@/components/3d/HeroMesh"), { ssr: false, loading: () => null });

export default function HomePage() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      <IntroScreen onDone={() => setIntroDone(true)} />

      <AnimatePresence>
        {introDone && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Hero */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
              {/* 3D background mesh */}
              <div className="absolute inset-0 opacity-60">
                <HeroMesh />
              </div>

              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/60 via-transparent to-[#080808]" />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080808] to-transparent" />

              {/* Accent circle */}
              <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#00D4FF]/5 blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00D4FF]/20 bg-[#00D4FF]/5 mb-8">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
                    <span className="text-[#00D4FF] text-xs font-medium tracking-wide">Jaipur's Premium Web Agency</span>
                  </div>

                  <h1 className="font-syne font-bold text-5xl md:text-7xl text-white leading-[1.05] mb-6 max-w-3xl">
                    The Web Agency{" "}
                    <span className="gradient-text">Schools Trust</span>
                  </h1>

                  <p className="text-white/50 text-lg md:text-xl leading-relaxed max-w-2xl mb-10 font-dm">
                    We build fast, beautiful, and functional websites for schools, institutions, and ambitious brands across India.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/portfolio"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 transition-all duration-200 group"
                    >
                      See Our Work
                      <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#00D4FF]/30 text-[#00D4FF] font-semibold text-sm hover:bg-[#00D4FF]/10 transition-all duration-200 glow-accent"
                    >
                      Get a Quote
                    </Link>
                  </div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
                >
                  <span className="text-white/20 text-xs tracking-widest uppercase font-dm">Scroll</span>
                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ChevronDown className="text-white/20" size={18} />
                  </motion.div>
                </motion.div>
              </div>
            </section>

            <ServicesStrip />
            <StatsRow />
            <TestimonialsSection />

            {/* CTA Section */}
            <section className="py-24 max-w-7xl mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative rounded-3xl overflow-hidden border border-white/5 bg-[#0e0e0e] p-12 md:p-20 text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/5 via-transparent to-[#C9A84C]/5 pointer-events-none" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent" />

                <p className="text-[#00D4FF] text-xs font-medium tracking-widest uppercase mb-4">Ready to Start?</p>
                <h2 className="font-syne font-bold text-3xl md:text-5xl text-white mb-6 max-w-2xl mx-auto">
                  Let's Build Something{" "}
                  <span className="gold-text">Remarkable</span>
                </h2>
                <p className="text-white/40 text-lg mb-10 max-w-lg mx-auto font-dm">
                  Join schools and institutions across Rajasthan who trust Nova Web Studio.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="px-8 py-3.5 rounded-full bg-[#00D4FF] text-black font-semibold hover:bg-[#00D4FF]/90 transition-all duration-200 glow-accent"
                  >
                    Get a Free Quote
                  </Link>
                  <Link
                    href="/plans"
                    className="px-8 py-3.5 rounded-full border border-white/10 text-white font-medium hover:border-white/20 transition-all duration-200"
                  >
                    View Plans
                  </Link>
                </div>
              </motion.div>
            </section>
          </motion.main>
        )}
      </AnimatePresence>

      <AIChatWidget />
    </>
  );
}
