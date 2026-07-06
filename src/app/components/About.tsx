import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import {
  Award,
  Clock,
  Settings,
  CheckCircle,
  Palette,
  HeadphonesIcon,
} from "lucide-react";
import DirectorDetailsCard from "./ui/director-details-card";
import { useTeam } from "../hooks/useTeam";
import { toMediaUrl, type TeamMember } from "../lib/api";

const features = [
  {
    icon: Award,
    title: "Precision Manufacturing & Quality Control",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Clock,
    title: "End-to-End Project Management",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Settings,
    title: "Advanced Technology & Equipment",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: CheckCircle,
    title: "On-Time Delivery Guarantee",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Palette,
    title: "Custom Design & Fabrication",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: HeadphonesIcon,
    title: "Comprehensive After-Sales Support",
    color: "from-pink-500 to-rose-500",
  },
];

const stats = [
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 25, suffix: "+", label: "Skilled Craftsmen" },
  { value: 300, suffix: "+", label: "Projects Completed" },
  { value: 98, suffix: "%", label: "Quality Assurance" },
];
const fallbackTeam: TeamMember[] = [
  {
    name: "Darshana Manatunga",
    role: "Managing Director",
    description: "Provides strategic oversight and long-term direction for company growth and governance.",
    email: "darshana@conceptcafe.lk",
    linkedin: "https://linkedin.com/in/darshana",
    imageUrl: "",
  },
];

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function About() {
  const { team } = useTeam(fallbackTeam);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-red-50 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              About Concept Cafe
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-6">
              Leading BTL Manufacturing Company with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent">
                Precision & Quality
              </span>
            </h2>
            <p className="text-lg text-slate-700 mb-8">
              For over 12 years, we've been transforming brands through
              exceptional physical branding solutions. From showroom design to
              precision manufacturing, we combine craftsmanship, innovation, and
              attention to detail to deliver projects that exceed expectations.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div
                    className={`p-2 rounded-lg bg-gradient-to-br ${feature.color}`}
                  >
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-slate-800 text-sm">
                    {feature.title}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("#contact")}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-red-500 text-white rounded-full font-medium shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60 transition-shadow"
            >
              Learn More About Us
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-slate-200 text-center shadow-lg"
              >
                <div className="text-5xl font-bold text-slate-900 mb-2">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

        </div>
        <section>
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 mt-20"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-6 mb-4">
            People Who Drive the Journey
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Meet the team behind Concept Cafe’s design, manufacturing, and project delivery excellence.
          </p>

        </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {team.map((member, i) => (
            <DirectorDetailsCard
              key={member.id ?? i}
              name={member.name}
              role={member.department ? `${member.role} • ${member.department}` : member.role}
              description={member.bio || member.description || ""}
              email={member.email || ""}
              linkedin={member.linkedin || ""}
              image={toMediaUrl(member.imageUrl || member.image)}
            />
          ))}
      </div>
        </section>
      </div>
    </section>
  );
}
