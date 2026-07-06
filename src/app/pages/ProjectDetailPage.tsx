import { motion } from "motion/react";
import { useNavigate, useParams } from "react-router";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Clock,
  Users,
  DollarSign,
  Maximize,
  CheckCircle,
  AlertCircle,
  Lightbulb,
  Wrench,
} from "lucide-react";
import { useEffect, useState } from "react";
import { projects as fallbackProjects } from "../data/projects";
import { api, normalizeProject, toMediaUrl, type Project } from "../lib/api";

export function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showModel, setShowModel] = useState(true);
  const fallbackProject = (fallbackProjects as Project[]).find((p) => p.id === id);
  const [project, setProject] = useState<Project | null>(
    fallbackProject ? normalizeProject(fallbackProject) : null
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    let active = true;

    api
      .getProject(id)
      .then((data) => {
        if (active) setProject(normalizeProject(data));
      })
      .catch(() => {
        if (active) {
          const fallback = (fallbackProjects as Project[]).find((p) => p.id === id);
          setProject(fallback ? normalizeProject(fallback) : null);
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [id]);

  if (!project && loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-600">Loading project...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate("/projects")}
            className="px-6 py-3 bg-blue-600 text-white rounded-full"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  const modelUrl = toMediaUrl(project.images?.model3D);
  const firstActualUrl = toMediaUrl(project.images?.actual?.[0]);

  return (
    <div className="min-h-screen bg-white">
      <div className={`relative h-96 bg-gradient-to-br ${project.gradient}`}>
        {toMediaUrl(project.images?.thumbnail) && (
          <img
            src={toMediaUrl(project.images.thumbnail)}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div>
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate("/projects")}
              className="absolute top-8 left-8 flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-slate-900 font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
            >
              <span className="text-white text-sm font-medium">{project.category}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold text-white mb-4"
            >
              {project.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-white/90 max-w-2xl mx-auto"
            >
              {project.description}
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            { icon: MapPin, title: "Location", value: project.location, color: "blue" },
            { icon: Calendar, title: "Completed", value: project.completionDate, color: "green" },
            { icon: Clock, title: "Duration", value: project.duration, color: "orange" },
            { icon: Users, title: "Team Size", value: project.teamSize ? `${project.teamSize} Members` : "N/A", color: "purple" },
            { icon: Maximize, title: "Area", value: project.area, color: "red" },
            { icon: DollarSign, title: "Budget", value: project.budget, color: "cyan" },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border border-slate-200"
              >
                <Icon className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-slate-600">{item.value}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            3D Model vs Actual Result
          </h2>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <div className="flex justify-center gap-4 mb-6">
              <button
                onClick={() => setShowModel(true)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  showModel
                    ? "bg-gradient-to-r from-blue-600 to-red-500 text-white shadow-lg"
                    : "bg-white text-slate-600 hover:bg-slate-100"
                }`}
              >
                3D Model
              </button>
              <button
                onClick={() => setShowModel(false)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  !showModel
                    ? "bg-gradient-to-r from-blue-600 to-red-500 text-white shadow-lg"
                    : "bg-white text-slate-600 hover:bg-slate-100"
                }`}
              >
                Actual Result
              </button>
            </div>

            <div className="aspect-video bg-white rounded-xl flex items-center justify-center overflow-hidden text-slate-400 text-xl border border-slate-200">
              {(showModel ? modelUrl : firstActualUrl) ? (
                <img
                  src={showModel ? modelUrl : firstActualUrl}
                  alt={showModel ? `${project.title} 3D model` : `${project.title} actual result`}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span>{showModel ? "[3D Model Render]" : "[Actual Completed Photo]"}</span>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              {(project.images?.comparison ?? []).map((comp, index) => (
                <div key={index} className="bg-white rounded-xl p-4 border border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-3">Comparison {index + 1}</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {[comp.before, comp.after].map((url, imageIndex) => (
                      <div
                        key={imageIndex}
                        className="aspect-video bg-slate-100 rounded flex items-center justify-center text-sm text-slate-400 overflow-hidden"
                      >
                        {toMediaUrl(url) ? (
                          <img src={toMediaUrl(url)} alt="Project comparison" className="h-full w-full object-cover" />
                        ) : imageIndex === 0 ? (
                          "[3D Model]"
                        ) : (
                          "[Actual]"
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Project Overview</h2>
          <p className="text-lg text-slate-700 leading-relaxed">{project.fullDescription}</p>
          <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-600 rounded">
            <p className="text-slate-700">
              <strong>Client:</strong> {project.client}
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <InfoList icon={CheckCircle} title="Key Features" items={project.features ?? []} />
          <div className="bg-white p-8 rounded-2xl border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <Wrench className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-slate-900">Technologies Used</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {(project.technologies ?? []).map((tech, index) => (
                <span key={index} className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <InfoList icon={AlertCircle} title="Challenges" items={project.challenges ?? []} tone="orange" />
          <InfoList icon={Lightbulb} title="Solutions" items={project.solutions ?? []} tone="green" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center bg-gradient-to-br from-blue-600 to-red-500 rounded-2xl p-12 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Contact us to discuss your next project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/#contact")}
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-medium shadow-lg hover:bg-white/90 transition-colors"
            >
              Get in Touch
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/projects")}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-full font-medium hover:bg-white/20 transition-colors"
            >
              View More Projects
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function InfoList({
  icon: Icon,
  title,
  items,
  tone = "green",
}: {
  icon: typeof CheckCircle;
  title: string;
  items: string[];
  tone?: "green" | "orange";
}) {
  const wrapperClass = tone === "orange" ? "bg-orange-50 border-orange-200" : "bg-white border-slate-200";
  const dotClass = tone === "orange" ? "bg-orange-500" : "bg-green-500";
  const iconClass = tone === "orange" ? "text-orange-600" : "text-green-600";

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className={`${wrapperClass} p-8 rounded-2xl border`}
    >
      <div className="flex items-center gap-3 mb-6">
        <Icon className={`w-8 h-8 ${iconClass}`} />
        <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className={`w-2 h-2 rounded-full ${dotClass} mt-2`} />
            <span className="text-slate-700">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
