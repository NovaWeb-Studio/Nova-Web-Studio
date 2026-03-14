"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap, Shield, Check } from "lucide-react";
import PlansCarousel from "@/components/3d/PlansCarousel";

const faqs = [
  {
    q: "What's included in the Starter plan?",
    a: "The Starter plan includes a 5-page static website with mobile-responsive design, SEO basics, WhatsApp button, and 1 month of free support. Delivered in 7 days.",
  },
  {
    q: "Can I upgrade my plan later?",
    a: "Absolutely. You can upgrade from Starter to Growth or Premium at any time. We'll only charge the difference.",
  },
  {
    q: "Do you offer custom pricing?",
    a: "Yes! For schools with specific requirements, we offer custom quotes. Contact us and we'll assess your needs.",
  },
  {
    q: "What does the AI chatbot in Premium include?",
    a: "The AI chatbot in the Premium plan is powered by Claude (Anthropic), trained on your school's information to answer parent and student queries 24/7.",
  },
];

export default function PlansPage() {
  return (
    <main className="pt-24">
      {/* Header */}
      <section className="py-20 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#00D4FF] text-xs font-medium tracking-widest uppercase mb-4">Transparent Pricing</p>
          <h1 className="font-syne font-bold text-5xl md:text-6xl text-white mb-6">
            Simple Plans,{" "}
            <span className="gold-text">Great Value</span>
          </h1>
          <p className="text-white/40 text-xl max-w-2xl mx-auto font-dm leading-relaxed">
            No hidden costs. No surprises. Pick a plan that fits your institution and get online fast.
          </p>
        </motion.div>
      </section>

      {/* Carousel */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <PlansCarousel />
        </motion.div>
      </section>

      {/* Comparison highlights */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-syne font-bold text-3xl md:text-4xl text-white">Everything You Need</h2>
            <p className="text-white/40 mt-3 font-dm">All plans include these essentials</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Zap size={20} />,
                title: "Fast Delivery",
                desc: "We start immediately after payment and deliver on time — every time.",
              },
              {
                icon: <Shield size={20} />,
                title: "SSL & Security",
                desc: "Every site comes with SSL certificate and basic security hardening included.",
              },
              {
                icon: <Check size={20} />,
                title: "Revision Rounds",
                desc: "We iterate until you're happy. Up to 3 revision rounds on any plan.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-white/5 bg-[#0e0e0e] text-center"
              >
                <div className="w-10 h-10 rounded-full bg-[#00D4FF]/10 text-[#00D4FF] flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-syne font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/40 text-sm font-dm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-syne font-bold text-3xl text-white">Frequently Asked</h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-5 rounded-xl border border-white/5 bg-[#0e0e0e]"
            >
              <h3 className="font-syne font-semibold text-white text-sm mb-2">{faq.q}</h3>
              <p className="text-white/50 text-sm leading-relaxed font-dm">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-syne font-bold text-3xl text-white mb-4">Still Have Questions?</h2>
            <p className="text-white/40 mb-8 font-dm">Chat with us on WhatsApp or fill in the contact form — we respond within 2 hours.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#00D4FF] text-black font-semibold hover:bg-[#00D4FF]/90 transition-all glow-accent"
              >
                Get a Custom Quote <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-white/10 text-white/70 font-medium hover:border-white/20 hover:text-white transition-all"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
