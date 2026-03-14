"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "Schools", "Institutions", "Brands"] as const;
type Category = typeof categories[number];

const projects = [
  {
    id: 1,
    title: "Sunrise Public School",
    type: "Schools",
    tag: "School Website",
    desc: "A full-featured school website with admissions flow, gallery, and WhatsApp integration. Delivered in 10 days.",
    gradient: "from-[#00D4FF]/30 to-[#0050aa]/20",
    accent: "#00D4FF",
    year: "2024",
  },
  {
    id: 2,
    title: "Bright Future Academy",
    type: "Institutions",
    tag: "Institution Portal",
    desc: "Complete student portal with fee management, notice board, and admin dashboard for a 1200-student institution.",
    gradient: "from-[#C9A84C]/30 to-[#805a00]/20",
    accent: "#C9A84C",
    year: "2024",
  },
  {
    id: 3,
    title: "Jaipur IIT Coaching",
    type: "Brands",
    tag: "Landing Page",
    desc: "High-converting admissions landing page running Google Ads. 3× increase in enquiry rate within 2 weeks.",
    gradient: "from-[#ff6b6b]/20 to-[#aa0000]/10",
    accent: "#ff6b6b",
    year: "2024",
  },
  {
    id: 4,
    title: "Modern Learning Institute",
    type: "Institutions",
    tag: "Institution Portal",
    desc: "Online learning portal with course management, video hosting, and certificate generation.",
    gradient: "from-[#00D4FF]/20 to-[#7b00ff]/10",
    accent: "#a78bfa",
    year: "2023",
  },
  {
    id: 5,
    title: "Rajasthan Public School",
    type: "Schools",
    tag: "School Website",
    desc: "Bilingual (Hindi + English) school website with online admission form and parent portal.",
    gradient: "from-[#C9A84C]/20 to-[#00D4FF]/20",
    accent: "#C9A84C",
    year: "2023",
  },
  {
    id: 6,
    title: "EdTech Startup",
    type: "Brands",
    tag: "Brand Website",
    desc: "Modern SaaS-style website for an EdTech startup targeting B2B school sales. Includes pricing, blog, and demo booking.",
    gradient: "from-[#7b00ff]/20 to-[#00D4FF]/10",
    accent: "#a78bfa",
    year: "2024",
  },
];

export default function PortfolioPage() {
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.type === active);

  return (
    <main className="pt-24">
      {/* Header */}
      <section className="py-20 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#00D4FF] text-xs font-medium tracking-widest uppercase mb-4">Our Work</p>
          <h1 className="font-syne font-bold text-5xl md:text-6xl text-white mb-6">
            Projects That{" "}
            <span className="gradient-text">Define Us</span>
          </h1>
          <p className="text-white/40 text-xl max-w-xl mx-auto font-dm">
            A selection of schools, institutions, and brands we've built digital homes for.
          </p>
        </motion.div>
      </section>

      {/* Filter tabs */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex items-center gap-2 justify-center flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? "bg-[#00D4FF] text-black"
                  : "border border-white/10 text-white/50 hover:border-white/20 hover:text-white/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group rounded-2xl border border-white/5 bg-[#0e0e0e] overflow-hidden hover:border-white/10 transition-all duration-300"
              >
                {/* Gradient thumbnail */}
                <div className={`relative h-48 bg-gradient-to-br ${p.gradient} overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-20 h-20 rounded-2xl opacity-20 rotate-12"
                      style={{ background: p.accent }}
                    />
                    <div
                      className="absolute w-32 h-32 rounded-full opacity-10 blur-2xl"
                      style={{ background: p.accent }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] to-transparent" />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link
                      href="/contact"
                      className="flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-medium border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
                    >
                      View Project <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="text-xs font-medium px-2 py-0.5 rounded-full"
                      style={{ background: `${p.accent}15`, color: p.accent }}
                    >
                      {p.tag}
                    </span>
                    <span className="text-white/20 text-xs">{p.year}</span>
                  </div>
                  <h3 className="font-syne font-bold text-white text-lg mb-2">{p.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-syne font-bold text-3xl text-white mb-4">Want to Be Our Next Success Story?</h2>
            <p className="text-white/40 mb-8 font-dm">Let's build something remarkable together.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#00D4FF] text-black font-semibold hover:bg-[#00D4FF]/90 transition-all glow-accent"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
