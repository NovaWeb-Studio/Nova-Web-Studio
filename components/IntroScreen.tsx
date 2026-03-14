"use client";
import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import { motion, AnimatePresence } from "framer-motion";

const WireframeGlobe = dynamic(() => import("@/components/3d/WireframeGlobe"), {
  ssr: false,
  loading: () => null,
});

interface IntroScreenProps {
  onDone: () => void;
}

const LETTERS = "NOVA WEB STUDIO";

export default function IntroScreen({ onDone }: IntroScreenProps) {
  const [visible, setVisible] = useState(true);
  const [showSkip, setShowSkip] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const skipTimer = setTimeout(() => setShowSkip(true), 1500);

    const tl = gsap.timeline({ onComplete: () => { setTimeout(done, 600); } });
    tl.from(".intro-letter", {
      opacity: 0,
      y: 20,
      stagger: 0.06,
      duration: 0.4,
      ease: "power2.out",
    }).to(taglineRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
    }).to({}, { duration: 1.5 });

    return () => clearTimeout(skipTimer);
  }, []);

  const done = () => {
    setVisible(false);
    setTimeout(onDone, 600);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[999] bg-[#080808] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Globe */}
          <div className="absolute inset-0 opacity-60">
            <WireframeGlobe />
          </div>

          {/* Radial glow */}
          <div className="absolute inset-0 bg-radial-at-center from-[#00D4FF08] via-transparent to-transparent pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            <div ref={titleRef} className="flex items-center gap-[2px] mb-6">
              {LETTERS.split("").map((char, i) => (
                <span
                  key={i}
                  className="intro-letter font-syne font-bold text-white tracking-[0.2em] text-3xl md:text-5xl"
                  style={{ display: char === " " ? "inline-block" : undefined, width: char === " " ? "0.5em" : undefined }}
                >
                  {char}
                </span>
              ))}
            </div>

            <p
              ref={taglineRef}
              className="text-[#00D4FF]/70 font-dm text-base md:text-xl tracking-widest uppercase opacity-0 translate-y-4"
            >
              We build digital institutions
            </p>

            {/* Divider line */}
            <div className="mt-8 w-16 h-px bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent" />
          </div>

          {/* Skip button */}
          <AnimatePresence>
            {showSkip && (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                onClick={done}
                className="absolute bottom-10 right-10 text-white/30 text-xs font-dm tracking-widest uppercase hover:text-white/60 transition-colors"
              >
                Skip →
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
