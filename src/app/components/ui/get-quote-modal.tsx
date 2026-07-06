import { useState } from "react";
import { X, Upload, ArrowRight, ShieldCheck } from "lucide-react";
import { api } from "../../lib/api";

interface GetQuoteModalProps {
  onClose: () => void;
}

export default function GetQuoteModal({ onClose }: GetQuoteModalProps) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    projectType: "",
    details: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const updateField =
    (field: keyof typeof form) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((current) => ({ ...current, [field]: event.target.value }));
    };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      let attachmentUrl: string | undefined;

      if (file) {
        const uploaded = await api.uploadQuoteAttachment(file);
        attachmentUrl = uploaded.url;
      }

      await api.submitQuote({
        ...form,
        attachmentUrl,
      });

      setForm({
        fullName: "",
        email: "",
        phone: "",
        projectType: "",
        details: "",
      });
      setFile(null);
      setStatus("success");
    } catch (error) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl animate-[fadeIn_.3s_ease]">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition"
        >
          <X className="h-5 w-5 text-gray-600" />
        </button>

        <div className="mb-8">
          <h2 className="text-4xl font-bold text-slate-900">Get a Quote</h2>
          <p className="mt-2 text-gray-500 text-sm leading-relaxed">
            Tell us about your project and we’ll get back to you with a customized quotation.
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Full Name *
              </label>
              <input
                type="text"
                value={form.fullName}
                onChange={updateField("fullName")}
                required
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Email Address *
              </label>
              <input
                type="email"
                value={form.email}
                onChange={updateField("email")}
                required
                placeholder="Enter your email"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Phone Number *
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={updateField("phone")}
                required
                placeholder="Enter your phone number"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Project Type *
              </label>
              <select
                value={form.projectType}
                onChange={updateField("projectType")}
                required
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              >
                <option value="">Select project type</option>
                <option>Showroom Design</option>
                <option>Branding & Printing</option>
                <option>LED Solutions</option>
                <option>Custom Manufacturing</option>
              </select>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Project Details *
            </label>
            <textarea
              rows={5}
              value={form.details}
              onChange={updateField("details")}
              required
              placeholder="Tell us about your project requirements, timeline, and any specific details..."
              className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 resize-none"
            />
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                  <Upload className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">
                    Upload Reference (Optional)
                  </h4>
                  <p className="text-sm text-gray-500">
                    {file ? file.name : "JPG, PNG or PDF up to 5MB"}
                  </p>
                </div>
              </div>

              <label className="cursor-pointer rounded-xl bg-gradient-to-r from-blue-600 to-red-500 px-5 py-3 text-sm font-semibold text-white shadow-md hover:opacity-90 transition">
                Choose File
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png,.pdf"
                  className="hidden"
                  onChange={(event) => setFile(event.target.files?.[0] ?? null)}
                />
              </label>
            </div>
          </div>

          {status === "success" && (
            <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
              Quote request sent successfully.
            </div>
          )}

          {status === "error" && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              Could not send the quote request. Please check that the backend is running.
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-red-500 py-4 text-lg font-semibold text-white shadow-lg transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Sending..." : "Send Quote Request"}
            <ArrowRight className="h-5 w-5" />
          </button>

          <div className="flex items-center justify-center gap-2 pt-2 text-sm text-gray-500">
            <ShieldCheck className="h-4 w-4" />
            Your information is safe with us.
          </div>
        </form>
      </div>
    </div>
  );
}
