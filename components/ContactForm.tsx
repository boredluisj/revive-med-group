"use client";

import { useState, FormEvent } from "react";

const serviceOptions = [
  "General Inquiry",
  "Testosterone Replacement Therapy (TRT)",
  "Semaglutide Weight Loss",
  "Bioidentical Hormone Therapy (BHRT)",
  "IV Nutrient Therapy",
  "Sexual Dysfunction",
  "Botox & Aesthetics",
  "Peptide Therapy",
  "Thyroid Optimization",
  "Regenerative Medicine",
  "Functional Lab Testing",
  "Telehealth Consultations",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    hipaa: false,
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.hipaa) newErrors.hipaa = "You must accept the Privacy Policy and HIPAA Notice";
    return newErrors;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setStatus("loading");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_SERVICE_ID,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service || "General Inquiry",
          message: formData.message,
          botcheck: "",
        }),
      });

      const data = await response.json();
      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", service: "", message: "", hipaa: false });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 text-sm border border-warm-border rounded-lg bg-white text-dark-slate placeholder:text-primary/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow";

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-heading text-2xl font-semibold text-dark-slate mb-2">Thank you!</h3>
        <p className="text-primary/70">We'll be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-dark-slate mb-1.5">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={inputClass}
          placeholder="Your full name"
        />
        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-dark-slate mb-1.5">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={inputClass}
          placeholder="your@email.com"
        />
        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="contact-phone" className="block text-sm font-medium text-dark-slate mb-1.5">
          Phone
        </label>
        <input
          id="contact-phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className={inputClass}
          placeholder="(555) 123-4567"
        />
      </div>

      <div>
        <label htmlFor="contact-service" className="block text-sm font-medium text-dark-slate mb-1.5">
          Service Interest
        </label>
        <select
          id="contact-service"
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className={inputClass}
        >
          <option value="">Select a service</option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-dark-slate mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={inputClass}
          placeholder="How can we help you?"
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>

      <div className="flex items-start gap-3">
        <input
          id="contact-hipaa"
          type="checkbox"
          checked={formData.hipaa}
          onChange={(e) => setFormData({ ...formData, hipaa: e.target.checked })}
          className="mt-1 h-4 w-4 rounded border-warm-border text-primary focus:ring-primary"
        />
        <label htmlFor="contact-hipaa" className="text-sm text-primary/70 leading-snug">
          I understand and accept the{" "}
          <a href="/privacy-policy" className="underline hover:text-dark-slate">Privacy Policy</a> and{" "}
          <a href="/hipaa-notice" className="underline hover:text-dark-slate">HIPAA Notice</a>{" "}
          <span className="text-red-500">*</span>
        </label>
      </div>
      {errors.hipaa && <p className="text-xs text-red-500 -mt-3">{errors.hipaa}</p>}

      {status === "error" && (
        <p className="text-sm text-red-500">Something went wrong. Please try again or call us at 843-299-9000.</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-3 px-6 text-sm font-medium text-white bg-linear-to-r from-primary to-dark-slate rounded-lg hover:opacity-90 transition-opacity disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 flex items-center justify-center gap-2"
      >
        {status === "loading" ? (
          <>
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
