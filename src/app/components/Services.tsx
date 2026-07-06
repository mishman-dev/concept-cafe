import { motion } from "motion/react";
import { useNavigate } from "react-router";
import {
  Store,
  Lightbulb,
  Printer,
  Scissors,
  Cog,
  Type,
  LucideIcon,
} from "lucide-react";
import { useServices } from "../hooks/useServices";

const fallbackServices = [
  {
    icon: Store,
    title: "Showroom Design & Build",
    description: "Complete showroom solutions from concept to construction, creating immersive brand experiences.",
    features: ["Space Planning", "Construction", "Brand Integration"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Lightbulb,
    title: "Light Boards & LED Solutions",
    description: "Eye-catching illuminated signage and display boards that make your brand shine.",
    features: ["LED Sign Boards", "Backlit Displays", "Smart Lighting"],
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Printer,
    title: "Branding & Printing",
    description: "High-quality printing solutions for all your branding and promotional materials.",
    features: ["Large Format", "Vinyl Graphics", "Brand Collaterals"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Scissors,
    title: "Laser Cutting Services",
    description: "Precision laser cutting for intricate designs and custom fabrications.",
    features: ["Acrylic Cutting", "Metal Cutting", "Custom Patterns"],
    color: "from-red-500 to-rose-500",
  },
  {
    icon: Cog,
    title: "CNC Cutting & Fabrication",
    description: "Advanced CNC machining for precise manufacturing and custom components.",
    features: ["CNC Routing", "Metal Fabrication", "3D Carving"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Type,
    title: "Embossed Letters & Signage",
    description: "Professional dimensional lettering and signage solutions for impactful branding.",
    features: ["3D Letters", "Channel Letters", "Metal Signage"],
    color: "from-indigo-500 to-purple-500",
  },
];

const serviceIcons: Record<string, LucideIcon> = {
  Store,
  Lightbulb,
  Printer,
  Scissors,
  Cog,
  Type,
};

export function Services() {
  const navigate = useNavigate();
  const { services } = useServices(fallbackServices);

  const handleServiceClick = (serviceTitle: string) => {
    navigate("/projects");
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4">
            Complete BTL Manufacturing Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From showroom design to precision manufacturing, we deliver comprehensive
            physical branding solutions that bring your vision to life.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const ServiceIcon = serviceIcons[service.icon] ?? Store;
            return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleServiceClick(service.title)}
                className="group h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow border border-slate-100 cursor-pointer"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <ServiceIcon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn more link */}
                <motion.div
                  className="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all cursor-pointer"
                >
                  Learn More
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    →
                  </motion.span>
                </motion.div>
              </motion.div>
            </motion.div>
          );
          })}
        </div>
      </div>
    </section>
  );
}
