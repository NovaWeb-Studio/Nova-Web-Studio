"use client";
import { useRef } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ServiceIcon = dynamic(() => import("@/components/3d/ServiceIcon"), { ssr: false, loading: () => <div className="w-16 h-16" /> });

const services = [
  {
    type: "school" as const,
    title: "School Websites",
    desc: "Professional, responsive websites built for schools. Admissions, notices, gallery, and more.",
    tag: "Most Popular",
  },
  {
    type: "portal" as const,
    title: "Institution Portals",
    desc: "Full-featured portals with login, student management, fee tracking, and announcements.",
    tag: null,
  },
  {
    type: "landing" as const,
    title: "Landing Pages",
    desc: "High-converting landing pages for admissions campaigns, events, and online courses.",
    tag: null,
  },
  {
    type: "maintenance" as const,
    title: "Maintenance Plans",
    desc: "Monthly support, security updates, backups, and feature additions — worry-free.",
    tag: null,
  },
];

export default function ServicesStrip() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <p className="text-[#00D4FF] text-xs font-medium tracking-widest uppercase mb-2">What We Build</p>
            <h2 className="font-syne font-bold text-3xl md:text-4xl text-white">Our Services</h2>
          </div>
          <Link
            href="/services"
            className="hidden md:flex items-center gap-2 text-white/40 text-sm hover:text-[#00D4FF] transition-colors"
          >
            View All <ArrowRight size={14} />
          </Link>
        </motion.div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div
          ref={scrollRef}
          className="flex md:grid md:grid-cols-4 gap-4 overflow-x-auto pb-4 md:pb-0 snap-x snap-mandatory md:snap-none scrollbar-none"
          style={{ scrollbarWidth: "none" }}
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[260px] md:min-w-0 snap-start flex-shrink-0 md:flex-shrink p-6 rounded-2xl border border-white/5 bg-[#0e0e0e] group hover:border-[#00D4FF]/20 transition-all duration-300 relative"
            >
              {s.tag && (
                <span className="absolute top-4 right-4 text-[10px] text-[#00D4FF] bg-[#00D4FF]/10 px-2 py-0.5 rounded-full font-medium">
                  {s.tag}
                </span>
              )}
              <ServiceIcon type={s.type} />
              <h3 className="font-syne font-bold text-white mt-4 mb-2">{s.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
