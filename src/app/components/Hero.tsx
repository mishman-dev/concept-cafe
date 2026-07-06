import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import { useEffect, useState } from "react";
import showroom1 from "../../assets/images/image_1.jpg";
import showroom2 from "../../assets/images/image_2.jpg";
import showroom3 from "../../assets/images/image_3.jpg";
import showroom4 from "../../assets/images/image_4.jpg";
import showroom5 from "../../assets/images/image_5.jpg";
import { useHeroCarousel } from "../hooks/useHeroCarousel";
import { toMediaUrl, type HeroSlide } from "../lib/api";

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const fallbackSlides: HeroSlide[] = [
    { imageUrl: showroom1, title: "Our Recent Work", description: "Premium interiors & branding solutions" },
    { imageUrl: showroom2, title: "Showroom Design", description: "Brand spaces built with precision" },
    { imageUrl: showroom3, title: "Physical Branding", description: "Retail visibility that stands out" },
    { imageUrl: showroom4, title: "Manufacturing Quality", description: "End-to-end execution under one roof" },
    { imageUrl: showroom5, title: "Installed Results", description: "From concept to completed site" },
  ];

  const { slides } = useHeroCarousel(fallbackSlides);
  const [currentSlide, setCurrentSlide] = useState(0);
  const activeSlide = slides[currentSlide] ?? slides[0] ?? fallbackSlides[0];

  useEffect(() => {
    if (!slides.length) return;

    const interval = setInterval(() => {
      setCurrentSlide((prevState: number) =>
        prevState === slides.length - 1 ? 0 : prevState + 1,
      );
    }, 3500);

    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    if (currentSlide > slides.length - 1) setCurrentSlide(0);
  }, [slides.length, currentSlide]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-200/40 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4 px-4 py-2 bg-blue-100 rounded-full border border-blue-200"
            >
              <span className="text-blue-700 text-sm font-medium">
                12+ Years of Excellence
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight"
            >
              Crafting Your Brand with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent">
                Physical Excellence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-slate-700 mb-8 max-w-xl"
            >
              We bring your brand to life through expert showroom design,
              precision manufacturing, and high-quality physical branding
              solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("#contact")}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-red-500 text-white rounded-full font-medium flex items-center gap-2 shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60 transition-shadow"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("#portfolio")}
                className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-900 rounded-full font-medium flex items-center gap-2 hover:bg-slate-50 transition-colors"
              >
                <Play className="w-5 h-5" />
                View Our Work
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 grid grid-cols-3 gap-8"
            >
              {[
                { value: "300+", label: "Projects" },
                { value: "150+", label: "Clients" },
                { value: "98%", label: "Satisfaction" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-slate-900">
                    {stat.value}
                  </div>
                  <div className="text-slate-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20"
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/20 to-red-100/20 z-10 pointer-events-none" />

                {/* Carousel */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  {slides.map((slide, index) => (
                    <img
                      key={slide.id ?? index}
                      src={toMediaUrl(slide.imageUrl)}
                      alt={slide.title || `Showcase ${index + 1}`}
                      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                        currentSlide === index ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  ))}

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/10 z-10" />

                  {/* Content */}
                  <div className="absolute top-6 left-6 z-20 max-w-sm">
                    {activeSlide.eyebrow && (
                      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/80">
                        {activeSlide.eyebrow}
                      </p>
                    )}
                    {activeSlide.title && (
                      <h3 className="text-white text-2xl font-bold">
                        {activeSlide.title}
                      </h3>
                    )}

                    {activeSlide.description && (
                      <p className="text-white/80 mt-1">
                        {activeSlide.description}
                      </p>
                    )}
                    {activeSlide.ctaLabel && activeSlide.ctaUrl && (
                      <button
                        onClick={() => scrollToSection(activeSlide.ctaUrl || "#contact")}
                        className="mt-4 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 shadow hover:bg-white"
                      >
                        {activeSlide.ctaLabel}
                      </button>
                    )}
                  </div>

                  {/* Indicators */}
                  <div className="absolute bottom-6 right-6 flex gap-2 z-20">
                    {slides.map((slide, index) => (
                      <button
                        key={slide.id ?? index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 rounded-full transition-all ${
                          currentSlide === index
                            ? "w-8 bg-white"
                            : "w-2 bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white backdrop-blur-md p-6 rounded-2xl border border-slate-200 shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <div className="text-slate-900 font-semibold">
                    Quality Assured
                  </div>
                  <div className="text-slate-600 text-sm">
                    100% Satisfaction
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-slate-400 flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-slate-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
