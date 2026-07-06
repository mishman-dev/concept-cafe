import { motion } from "motion/react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import React, { useState } from "react";
import { api } from "../lib/api";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+94 (77) 006-4141",
    subtitle: "Mon-Fri 9AM-6PM",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@conceptcafe.com",
    subtitle: "We'll respond within 24h",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "No.859, Athurugiriya Road",
    subtitle: "Homagama, Sri Lanka",
    color: "from-orange-500 to-red-500",
    isLocation: true
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon-Fri: 9AM-6PM",
    subtitle: "Weekend: By appointment",
    color: "from-green-500 to-emerald-500",
  },
];

export function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const updateField = (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((current) => ({ ...current, [field]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      await api.submitContact({
        fullName: `${form.firstName} ${form.lastName}`.trim(),
        email: form.email,
        phone: form.phone || undefined,
        subject: form.company ? `Website inquiry from ${form.company}` : "Website inquiry",
        message: form.message,
      });

      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
      setStatus("success");
    } catch (error) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-50 to-white">
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
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4">
            Ready to Start Your Next{" "}
            <span className="bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent">
              Project?
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Let's discuss how we can bring your vision to life through precision
            manufacturing and quality craftsmanship.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Send us a message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="John"
                      value={form.firstName}
                      onChange={updateField("firstName")}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
                    />
                  </motion.div>
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      value={form.lastName}
                      onChange={updateField("lastName")}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
                    />
                  </motion.div>
                </div>

                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    value={form.email}
                    onChange={updateField("email")}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
                  />
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+94 77 006 4141"
                    value={form.phone}
                    onChange={updateField("phone")}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
                  />
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    placeholder="Your Company Name"
                    value={form.company}
                    onChange={updateField("company")}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
                  />
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project requirements and specifications..."
                    value={form.message}
                    onChange={updateField("message")}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all resize-none"
                  />
                </motion.div>

                {status === "success" && (
                  <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                    Message sent successfully. We’ll get back to you soon.
                  </div>
                )}

                {status === "error" && (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    Could not send the message. Please check that the backend is running.
                  </div>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-red-500 text-white rounded-xl font-medium shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-shadow flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="space-y-6"
>
  {contactInfo.map((info, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, x: 10 }}
      className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 flex items-start gap-4"
    >
      {/* ICON */}
      <div
        className={`p-3 rounded-xl bg-gradient-to-br ${info.color} flex-shrink-0`}
      >
        <info.icon className="w-6 h-6 text-white" />
      </div>

      {/* CONTENT */}
      <div className="flex-1">
        <h4 className="font-semibold text-slate-900 mb-1">
          {info.title}
        </h4>

        <p className="text-slate-900">{info.value}</p>
        <p className="text-slate-500 text-sm">{info.subtitle}</p>
      </div>

      {/* LOCATION ACTION ICON */}
      {info.isLocation && (
        <a
          href="https://maps.app.goo.gl/qP7Rmimj7MNZASCz6"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg hover:bg-slate-100 transition"
          title="View on Google Maps"
        >
          <svg
            className="w-5 h-5 text-slate-600 hover:text-slate-900"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </a>
      )}
    </motion.div>
  ))}


            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-blue-600 to-red-500 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-2">Need Immediate Help?</h3>
              <p className="text-white/90 mb-6">
                Schedule a free consultation call with our manufacturing experts.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open("tel:+94770064141")}
                className="px-6 py-3 bg-white text-blue-600 rounded-xl font-medium hover:bg-white/90 transition-colors"
              >
                Schedule Call
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
