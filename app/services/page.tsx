"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const ServiceScene = dynamic(() => import("@/components/3d/ServiceScene"), {
  ssr: false,
  loading: () => <div className="w-40 h-40" />,
});

const services = [
  {
    type: "website" as const,
    title: "School Websites",
    tagline: "Your school's first impression",
    desc: "We craft beautiful, fast, and feature-rich websites specifically designed for schools. Every site is mobile-first, SEO-optimised, and easy for staff to manage.",
    features: [
      "Home, About, Admissions, Gallery, Contact pages",
      "News & events management",
      "Mobile-responsive & SEO-ready",
      "Google Maps integration",
      "WhatsApp enquiry button",
      "SSL certificate & fast hosting",
    ],
    accent: "#00D4FF",
  },
  {
    type: "portal" as const,
    title: "Institution Portals",
    tagline: "Full-featured digital infrastructure",
    desc: "For colleges, coaching institutes, and larger institutions that need more than a website. Portals with student/staff logins, notice boards, fee tracking, and admin dashboards.",
    features: [
      "Student & staff login system",
      "Notice board & circulars",
      "Fee management module",
      "Attendance tracking",
      "Online enquiry CRM",
      "Custom admin dashboard",
    ],
    accent: "#C9A84C",
  },
  {
    type: "landing" as const,
    title: "Landing Pages",
    tagline: "Built to convert",
    desc: "High-converting single-page designs for admissions campaigns, online courses, events, or product launches. Designed to turn visitors into enquiries.",
    features: [
      "Conversion-optimised layout",
      "Lead capture forms",
      "WhatsApp & call-to-action buttons",
      "Google Ads & Meta Ads compatible",
      "Fast load time (<2s)",
      "A/B testing friendly",
    ],
    accent: "#00D4FF",
  },
  {
    type: "maintenance" as const,
    title: "Maintenance Plans",
    tagline: "We keep your site running perfectly",
    desc: "Monthly maintenance packages so you never have to worry about your website again. Updates, backups, security monitoring, and small feature additions — all included.",
    features: [
      "Monthly security updates",
      "Daily automated backups",
      "Uptime monitoring",
      "Content update requests (up to 5/month)",
      "Performance optimisation",
      "Priority WhatsApp support",
    ],
    accent: "#C9A84C",
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-24">
      {/* Header */}
      <section className="py-20 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#00D4FF] text-xs font-medium tracking-widest uppercase mb-4">What We Do</p>
          <h1 className="font-syne font-bold text-5xl md:text-6xl text-white mb-6">
            Services Built for{" "}
            <span className="gradient-text">Institutions</span>
          </h1>
          <p className="text-white/40 text-xl max-w-2xl mx-auto font-dm leading-relaxed">
            From a simple school website to a full institution portal — we build exactly what you need.
          </p>
        </motion.div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-6 pb-24 space-y-32">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? "md:grid-flow-dense" : ""}`}
          >
            {/* 3D Illustration */}
            <div className={`flex items-center justify-center ${i % 2 !== 0 ? "md:col-start-2" : ""}`}>
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-3xl blur-3xl opacity-20"
                  style={{ background: `radial-gradient(circle, ${s.accent}, transparent)` }}
                />
                <div className="relative w-72 h-72 rounded-3xl border border-white/5 bg-[#0e0e0e] flex items-center justify-center">
                  <ServiceScene type={s.type} />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className={i % 2 !== 0 ? "md:col-start-1 md:row-start-1" : ""}>
              <p
                className="text-xs font-medium tracking-widest uppercase mb-3"
                style={{ color: s.accent }}
              >
                {s.tagline}
              </p>
              <h2 className="font-syne font-bold text-3xl md:text-4xl text-white mb-4">{s.title}</h2>
              <p className="text-white/50 text-lg leading-relaxed mb-8 font-dm">{s.desc}</p>

              <ul className="space-y-3 mb-8">
                {s.features.map((f, fi) => (
                  <li key={fi} className="flex items-center gap-3 text-white/70 text-sm">
                    <span
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: `${s.accent}22`, color: s.accent }}
                    >
                      <Check size={10} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 group"
                style={{
                  background: `${s.accent}15`,
                  color: s.accent,
                  border: `1px solid ${s.accent}30`,
                }}
              >
                Get Started
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-syne font-bold text-3xl md:text-4xl text-white mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-white/40 text-lg mb-8 font-dm">
              Tell us about your school or institution and we'll recommend the right solution.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#00D4FF] text-black font-semibold hover:bg-[#00D4FF]/90 transition-all glow-accent"
            >
              Talk to Us <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
