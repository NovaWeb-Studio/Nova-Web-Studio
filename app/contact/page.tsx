"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const CheckmarkScene = dynamic(() => import("@/components/3d/CheckmarkScene"), {
  ssr: false,
  loading: () => <div className="w-32 h-32 mx-auto" />,
});

const projectTypes = [
  "School Website",
  "Institution Portal",
  "Landing Page",
  "Maintenance Plan",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    institution: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 outline-none focus:border-[#00D4FF]/40 focus:bg-white/[0.07] transition-all duration-200";

  return (
    <main className="pt-24">
      {/* Header */}
      <section className="py-20 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#00D4FF] text-xs font-medium tracking-widest uppercase mb-4">Get In Touch</p>
          <h1 className="font-syne font-bold text-5xl md:text-6xl text-white mb-6">
            Let's Build{" "}
            <span className="gradient-text">Together</span>
          </h1>
          <p className="text-white/40 text-xl max-w-xl mx-auto font-dm">
            Tell us about your school or institution. We'll get back to you within 2 hours.
          </p>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h2 className="font-syne font-bold text-2xl text-white mb-2">Nova Web Studio</h2>
              <p className="text-white/40 text-sm font-dm leading-relaxed">
                Founded by Yash, we're a young, passionate team in Jaipur dedicated to building premium digital experiences for educational institutions.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: <MapPin size={16} />, label: "Location", value: "Jaipur, Rajasthan, India" },
                { icon: <Mail size={16} />, label: "Email", value: "hello@novawebstudio.in", href: "mailto:hello@novawebstudio.in" },
                { icon: <Phone size={16} />, label: "Phone", value: "+91 99999 99999", href: "tel:+919999999999" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#00D4FF]/10 text-[#00D4FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white/30 text-xs mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-white text-sm hover:text-[#00D4FF] transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919999999999?text=Hi%20Yash%2C%20I%27m%20interested%20in%20a%20website%20for%20my%20school."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl border border-[#25D366]/20 bg-[#25D366]/5 hover:border-[#25D366]/40 transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                <MessageCircle size={18} className="text-white" fill="white" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">Chat on WhatsApp</p>
                <p className="text-white/40 text-xs">Typically replies in &lt;1 hour</p>
              </div>
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="p-8 rounded-2xl border border-white/5 bg-[#0e0e0e]">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-white/40 text-xs mb-1.5 block font-medium">Your Name *</label>
                        <input
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Rajesh Sharma"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="text-white/40 text-xs mb-1.5 block font-medium">School / Institution *</label>
                        <input
                          name="institution"
                          required
                          value={form.institution}
                          onChange={handleChange}
                          placeholder="Sunrise Public School"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-white/40 text-xs mb-1.5 block font-medium">Email *</label>
                        <input
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="principal@school.in"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="text-white/40 text-xs mb-1.5 block font-medium">Phone</label>
                        <input
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-white/40 text-xs mb-1.5 block font-medium">Project Type *</label>
                      <select
                        name="projectType"
                        required
                        value={form.projectType}
                        onChange={handleChange}
                        className={`${inputClass} cursor-pointer`}
                      >
                        <option value="" disabled className="bg-[#0e0e0e]">Select project type</option>
                        {projectTypes.map((t) => (
                          <option key={t} value={t} className="bg-[#0e0e0e]">{t}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-white/40 text-xs mb-1.5 block font-medium">Message</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us about your school, what you need, and any specific requirements..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 rounded-xl bg-[#00D4FF] text-black font-semibold text-sm hover:bg-[#00D4FF]/90 transition-all duration-200 glow-accent disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                  >
                    <CheckmarkScene />
                    <h3 className="font-syne font-bold text-white text-2xl mt-4 mb-2">Message Sent!</h3>
                    <p className="text-white/50 text-sm font-dm max-w-xs mx-auto leading-relaxed">
                      Thank you, {form.name.split(" ")[0]}! We'll get back to you within 2 hours on{" "}
                      <span className="text-white">{form.email}</span>.
                    </p>
                    <a
                      href="https://wa.me/919999999999"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full bg-[#25D366] text-white text-sm font-medium hover:bg-[#25D366]/90 transition-all"
                    >
                      <MessageCircle size={14} />
                      Also WhatsApp Us
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
