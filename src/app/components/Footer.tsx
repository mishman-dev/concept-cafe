import { motion } from "motion/react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube,  } from "lucide-react";
import { CIcon } from '@coreui/icons-react';
import { cibTiktok, } from '@coreui/icons';

const services = [
  "Showroom Design & Build",
  "Light Boards & LED Solutions",
  "Branding & Printing",
  "Laser Cutting Services",
  "CNC Cutting & Fabrication",
  "Embossed Letters & Signage",
];

const company = ["About Us", "Our Team", "Careers", "News & Insights", "Contact"];

const legal = ["Privacy Policy", "Terms of Service"];

const socials = [
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/concept-cafe/ " },
  // { icon: Youtube, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-slate-800 text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
              Concept Cafe
            </h3>
            <p className="text-white/60 mb-6 max-w-xs">
              Leading BTL manufacturing company creating exceptional brand
              experiences through precision craftsmanship, innovative design, and
              quality manufacturing.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-white/80">+94 (77) 006-4141</p>
              <p className="text-white/80">info@conceptcafe.com</p>
              <p className="text-white/60 text-sm">
                No.859, Athurugiriya Road, Homagama.
              </p>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href="#"
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {service}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href="#"
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <p className="text-white/60 text-sm mb-4">
              Subscribe to our newsletter for the latest projects and updates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/40"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-red-500 rounded-lg font-medium hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-white/60 text-sm">
              © 2025 Concept Cafe. All rights reserved.
            </p>

            {/* Legal links */}
            <div className="flex items-center gap-6">
              {legal.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Social media */}
            <div className="flex items-center gap-4">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors"
                >
                  <social.icon className="w-5 h-5 text-white/80" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
