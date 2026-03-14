"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹8,999",
    tagline: "Perfect for small schools",
    delivery: "7-day delivery",
    features: [
      "Static website",
      "Up to 5 pages",
      "Mobile responsive",
      "SEO basics",
      "1 month support",
      "WhatsApp button",
    ],
    accent: "#00D4FF",
    popular: false,
  },
  {
    name: "Growth",
    price: "₹14,999",
    tagline: "Most popular for institutions",
    delivery: "14-day delivery",
    features: [
      "Dynamic website",
      "Up to 10 pages",
      "WhatsApp integration",
      "Notice board",
      "Online enquiry form",
      "3 months support",
      "Google Analytics",
    ],
    accent: "#C9A84C",
    popular: true,
  },
  {
    name: "Premium",
    price: "₹24,999",
    tagline: "Full-featured portal solution",
    delivery: "Custom timeline",
    features: [
      "Full portal",
      "Unlimited pages",
      "AI chatbot included",
      "Student login system",
      "Fee management",
      "Priority support",
      "6 months support",
    ],
    accent: "#00D4FF",
    popular: false,
  },
];

export default function PlansCarousel() {
  const [current, setCurrent] = useState(1); // Start at Growth (middle)
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % plans.length);
      }, 3000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused]);

  const prev = () => setCurrent((c) => (c - 1 + plans.length) % plans.length);
  const next = () => setCurrent((c) => (c + 1) % plans.length);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Desktop: show all 3 with center focus */}
      <div className="hidden md:flex items-stretch justify-center gap-6 perspective-1000">
        {plans.map((plan, i) => {
          const isCenter = i === current;
          const offset = i - current;
          const wrappedOffset = ((offset + plans.length) % plans.length);
          const adjustedOffset = wrappedOffset > plans.length / 2 ? wrappedOffset - plans.length : wrappedOffset;

          return (
            <motion.div
              key={plan.name}
              animate={{
                scale: isCenter ? 1 : 0.9,
                opacity: isCenter ? 1 : 0.6,
                zIndex: isCenter ? 10 : 5,
              }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setCurrent(i)}
              className={`relative flex-1 max-w-xs rounded-2xl border p-7 cursor-pointer transition-all duration-300 ${
                isCenter
                  ? plan.popular
                    ? "border-[#C9A84C]/40 bg-gradient-to-b from-[#C9A84C]/5 to-[#0e0e0e]"
                    : "border-[#00D4FF]/30 bg-gradient-to-b from-[#00D4FF]/5 to-[#0e0e0e]"
                  : "border-white/5 bg-[#0e0e0e]"
              }`}
            >
              {plan.popular && isCenter && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 rounded-full bg-[#C9A84C] text-black text-xs font-bold">
                  <Star size={10} fill="black" /> Most Popular
                </div>
              )}

              {isCenter && (
                <div
                  className="absolute inset-0 rounded-2xl opacity-5"
                  style={{ background: `radial-gradient(circle at top, ${plan.accent}, transparent 60%)` }}
                />
              )}

              <div className="relative z-10">
                <p className="text-white/40 text-xs font-medium mb-1">{plan.tagline}</p>
                <h3 className="font-syne font-bold text-white text-2xl mb-1">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span
                    className="font-syne font-bold text-4xl"
                    style={{ color: plan.accent }}
                  >
                    {plan.price}
                  </span>
                </div>
                <p className="text-white/30 text-xs mb-6">{plan.delivery}</p>

                <ul className="space-y-2.5 mb-8">
                  {plan.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2.5 text-sm text-white/70">
                      <span
                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: `${plan.accent}22`, color: plan.accent }}
                      >
                        <Check size={9} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="block w-full text-center py-2.5 rounded-full text-sm font-semibold transition-all duration-200"
                  style={
                    isCenter
                      ? { background: plan.accent, color: plan.popular ? "black" : "black" }
                      : { border: `1px solid ${plan.accent}30`, color: plan.accent }
                  }
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile: single card swipe */}
      <div className="md:hidden relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className={`rounded-2xl border p-7 mx-4 ${
              plans[current].popular
                ? "border-[#C9A84C]/40 bg-gradient-to-b from-[#C9A84C]/5 to-[#0e0e0e]"
                : "border-[#00D4FF]/30 bg-gradient-to-b from-[#00D4FF]/5 to-[#0e0e0e]"
            }`}
          >
            {plans[current].popular && (
              <div className="flex justify-center mb-4">
                <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#C9A84C] text-black text-xs font-bold">
                  <Star size={10} fill="black" /> Most Popular
                </span>
              </div>
            )}
            <p className="text-white/40 text-xs mb-1">{plans[current].tagline}</p>
            <h3 className="font-syne font-bold text-white text-2xl mb-1">{plans[current].name}</h3>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="font-syne font-bold text-4xl" style={{ color: plans[current].accent }}>
                {plans[current].price}
              </span>
            </div>
            <p className="text-white/30 text-xs mb-6">{plans[current].delivery}</p>
            <ul className="space-y-2.5 mb-8">
              {plans[current].features.map((f, fi) => (
                <li key={fi} className="flex items-center gap-2.5 text-sm text-white/70">
                  <span
                    className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: `${plans[current].accent}22`, color: plans[current].accent }}
                  >
                    <Check size={9} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="block w-full text-center py-2.5 rounded-full text-sm font-semibold"
              style={{ background: plans[current].accent, color: "black" }}
            >
              Get Started
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button onClick={prev} className="w-8 h-8 rounded-full border border-white/10 text-white/40 hover:text-white flex items-center justify-center">
            ←
          </button>
          <div className="flex gap-2">
            {plans.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${i === current ? "bg-[#00D4FF] w-4" : "bg-white/20"}`}
              />
            ))}
          </div>
          <button onClick={next} className="w-8 h-8 rounded-full border border-white/10 text-white/40 hover:text-white flex items-center justify-center">
            →
          </button>
        </div>
      </div>

      {/* Desktop nav dots */}
      <div className="hidden md:flex items-center justify-center gap-2 mt-8">
        {plans.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "bg-[#00D4FF] w-6" : "bg-white/20 w-1.5"}`}
          />
        ))}
      </div>
    </div>
  );
}
