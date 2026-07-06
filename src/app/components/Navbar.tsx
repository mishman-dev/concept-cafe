import { motion } from "motion/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/images/logo.jpg";
import GetQuoteModal from "./ui/get-quote-modal";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setIsOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3"
            >
              <img
                src={logo}
                alt="Concept Cafe Logo"
                className="h-14"
              />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -2 }}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-slate-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
                >
                  {link.name}
                </motion.a>
              ))}

              {/* Desktop Get Quote Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsQuoteOpen(true)}
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-red-500 text-white rounded-full font-medium shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-shadow"
              >
                Get Quote
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-slate-700" />
              ) : (
                <Menu className="w-6 h-6 text-slate-700" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 border-t border-slate-200"
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="block py-3 text-slate-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
                >
                  {link.name}
                </motion.a>
              ))}

              {/* Mobile Get Quote Button */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                onClick={() => {
                  setIsQuoteOpen(true);
                  setIsOpen(false);
                }}
                className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-red-500 text-white rounded-full font-medium shadow-lg shadow-blue-500/30"
              >
                Get Quote
              </motion.button>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Quote Modal */}
      {isQuoteOpen && (
        <GetQuoteModal
          onClose={() => setIsQuoteOpen(false)}
        />
      )}
    </>
  );
}