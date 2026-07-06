import { motion } from "motion/react";
import { ArrowRight, Clock, Ruler, CheckCircle, Download, LucideIcon } from "lucide-react";
import { useNavigate } from "react-router";
import { useProjects } from "../hooks/useProjects";
import { toMediaUrl } from "../lib/api";
import showroom1 from "../../assets/images/image_1.jpg";
import showroom2 from "../../assets/images/image_2.jpg";
import showroom3 from "../../assets/images/image_3.jpg";
import showroom4 from "../../assets/images/image_4.jpg";
import showroom5 from "../../assets/images/image_5.jpg";


const statIcons: Record<string, LucideIcon> = { Clock, Ruler, CheckCircle };

export function Projects() {
  const navigate = useNavigate();
  const { projects } = useProjects();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const showcaseImages = [
    showroom1,
    showroom2,
    showroom3,
    showroom4,
    showroom5,
  ];

  

  const handleDownloadPortfolio = () => {
    alert("Portfolio PDF download will start shortly. This feature requires backend integration.");
  };

  return (
    <section id="portfolio" className="py-24 bg-white">
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
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4">
            Project Success Stories
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover how we've helped brands achieve exceptional results through
            precision manufacturing, innovative design, and quality craftsmanship.
          </p>

          {/* Download Portfolio Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownloadPortfolio}
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-colors"
          >
            <Download className="w-5 h-5" />
            Download Our Portfolio
          </motion.button>
        </motion.div>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                onClick={() => navigate(`/projects/${project.id}`)}
                className="group bg-gradient-to-br from-slate-50 to-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-slate-100 cursor-pointer"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-80 lg:h-auto overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`}
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white/40 text-2xl font-bold">
                      <img src={toMediaUrl(project.images?.thumbnail) || showcaseImages[index % showcaseImages.length]} alt={project.title} className="h-full w-full object-cover" />
                    </div>
                    <div className="absolute top-6 left-6 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                      <span className="text-white text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 mb-8">
                      {project.description}
                    </p>

                    {/* Stats */}
                    <section className="mb-12">
  {/* Section header */}
  <div className="mb-8">
    <h2 className="text-xl font-semibold text-slate-900">
      Impact & Outcomes
    </h2>
    <p className="text-sm text-slate-600 mt-1">
      Key results and design outcomes achieved through this implementation.
    </p>
  </div>

  {/* Main layout */}
  <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
    
    {/* Primary narrative card */}
    <div className="lg:col-span-2 rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient}`} />
        <h3 className="text-base font-semibold text-slate-900">
          Case Study Overview
        </h3>
      </div>

      <p className="text-sm text-slate-600 leading-relaxed">
        {project.description ||
          "This project focuses on improving usability, performance, and clarity through a modern UI system. The goal was to streamline workflows and deliver a more intuitive experience."}
      </p>

      {/* optional highlight strip */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        {project.stats.slice(0, 2).map((stat, i) => {
          const StatIcon = statIcons[stat.icon] ?? CheckCircle;
          return (
            <div
              key={i}
              className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/60"
            >
              <div
                className={`p-2 rounded-lg bg-gradient-to-br ${project.gradient}`}
              >
                <StatIcon className="w-4 h-4 text-white" />
              </div>

              <div>
                <div className="text-lg font-semibold text-slate-900">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500">
                  {stat.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>

    {/* Right-side evidence stack */}
    

  </div>
</section>

                    {/* CTA */}
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all cursor-pointer"
                    >
                      View Project Details
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/projects")}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-red-500 text-white rounded-full font-medium shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-shadow"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
      
    </section>
  );
}
