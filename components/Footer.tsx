import Link from "next/link";
import { Github, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#080808] mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#0080ff] flex items-center justify-center text-sm font-bold text-black">N</span>
              <span className="font-syne font-bold text-white tracking-wider uppercase">Nova Web Studio</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Building digital institutions for schools, colleges, and ambitious brands. Jaipur, India.
            </p>
            <p className="mt-4 text-[#00D4FF]/60 text-xs font-medium">
              Founded by Yash — a young entrepreneur on a mission.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#00D4FF] hover:border-[#00D4FF]/30 transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-syne font-semibold text-white text-sm mb-4 tracking-wider uppercase">Pages</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/plans", label: "Plans" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-white/40 text-sm hover:text-white transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-syne font-semibold text-white text-sm mb-4 tracking-wider uppercase">Contact</h4>
            <ul className="space-y-2">
              <li className="text-white/40 text-sm">Jaipur, Rajasthan</li>
              <li>
                <a href="mailto:hello@novawebstudio.in" className="text-white/40 text-sm hover:text-[#00D4FF] transition-colors">
                  hello@novawebstudio.in
                </a>
              </li>
              <li>
                <a href="https://wa.me/919999999999" className="text-white/40 text-sm hover:text-[#00D4FF] transition-colors">
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} Nova Web Studio. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Made with <span className="text-[#00D4FF]">Nova Web Studio</span> — Jaipur, India
          </p>
        </div>
      </div>
    </footer>
  );
}
