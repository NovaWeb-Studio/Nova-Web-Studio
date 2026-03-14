"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Nova Web Studio completely transformed our school's online presence. The website they built is fast, beautiful, and our parents love it.",
    name: "Rajesh Sharma",
    role: "Principal, Sunrise Public School",
    initials: "RS",
  },
  {
    quote: "Yash and his team delivered our institution portal in just 12 days. The quality exceeded our expectations and the support has been excellent.",
    name: "Dr. Priya Mehta",
    role: "Director, Bright Future Academy",
    initials: "PM",
  },
  {
    quote: "The WhatsApp integration alone has saved us hours every week. Truly a game-changer for our school's communication.",
    name: "Ankit Joshi",
    role: "Administrator, Modern Learning Institute",
    initials: "AJ",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-[#00D4FF] text-xs font-medium tracking-widest uppercase mb-3">Testimonials</p>
        <h2 className="font-syne font-bold text-3xl md:text-4xl text-white">What Our Clients Say</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            whileHover={{ y: -6 }}
            className="p-6 rounded-2xl border border-white/5 bg-[#0e0e0e] relative group transition-all duration-300 hover:border-[#00D4FF]/20"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Quote className="text-[#00D4FF]/30 mb-4" size={24} />
            <p className="text-white/70 text-sm leading-relaxed mb-6 font-dm">{t.quote}</p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#0080ff] flex items-center justify-center text-black text-xs font-bold">
                {t.initials}
              </div>
              <div>
                <p className="text-white text-sm font-semibold">{t.name}</p>
                <p className="text-white/40 text-xs">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
