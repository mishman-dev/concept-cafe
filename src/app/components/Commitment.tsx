import { motion } from "motion/react";
import { Award, Shield, Zap, HeadphonesIcon } from "lucide-react";
import { BrandLogoMarquee } from "./BrandLogoMarquee";

const commitments = [
  {
    icon: Award,
    title: "Quality Excellence",
    description: "Every project meets our rigorous quality standards with 98% client satisfaction.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "On-Time Delivery",
    description: "We guarantee project completion within agreed timelines, every single time.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Comprehensive testing and verification ensures perfect results.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Dedicated after-sales support to ensure your complete satisfaction.",
    color: "from-purple-500 to-pink-500",
  },
];

export function Commitment() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Our Commitment
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4">
            Why Choose Concept Cafe
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We stand behind every project with our unwavering commitment to quality,
            reliability, and customer satisfaction.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {commitments.map((commitment, index) => (
            <motion.div
              key={commitment.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-slate-100 text-center"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${commitment.color} flex items-center justify-center mx-auto mb-6 shadow-lg`}
              >
                <commitment.icon className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {commitment.title}
              </h3>
              <p className="text-slate-600">{commitment.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <BrandLogoMarquee />
    </section>
  );
}
