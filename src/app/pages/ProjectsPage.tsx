import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { useProjects } from "../hooks/useProjects";
import { toMediaUrl } from "../lib/api";
import { ArrowRight, Calendar, MapPin, Clock, Users } from "lucide-react";

export function ProjectsPage() {
  const navigate = useNavigate();
  const { projects, loading } = useProjects();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Our Portfolio
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mt-2 mb-4">
            All Projects
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore our complete portfolio of successful projects across various
            industries and specializations.
          </p>
        </motion.div>

        {loading && (
          <p className="mb-8 text-center text-slate-500">Loading latest projects...</p>
        )}

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => navigate(`/projects/${project.id}`)}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-slate-100">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`}
                  />
                  {project.images?.thumbnail ? (
                    <img
                      src={toMediaUrl(project.images.thumbnail)}
                      alt={project.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-white/60 text-2xl font-bold">
                      {project.title}
                    </div>
                  )}
                  <div className="absolute top-4 left-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full">
                    <span className="text-slate-900 text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Meta Info */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Calendar className="w-4 h-4" />
                      {project.completionDate}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Clock className="w-4 h-4" />
                      {project.duration}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Users className="w-4 h-4" />
                      {project.teamSize} Team Members
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.div
                    className="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all"
                  >
                    View Full Details
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/")}
            className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-900 rounded-full font-medium hover:bg-slate-50 transition-colors"
          >
            Back to Home
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
