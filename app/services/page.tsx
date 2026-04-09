import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Our Services | Revive Medical Group",
  description:
    "Explore our comprehensive medical services including hormone therapy, TRT, semaglutide weight loss, BHRT, IV nutrient therapy, Botox, peptide therapy, and more. Personalized care in North Myrtle Beach, SC.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-dark-slate text-white py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Comprehensive Care Across Multiple Specialties
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/80 leading-relaxed">
            At Revive Medical Group, we offer a full range of hormone therapy, regenerative medicine, and aesthetic
            treatments. Every protocol is tailored to your unique physiology, goals, and lifestyle. Led by Chad Watts,
            DMSc, PA-C, our team combines clinical expertise with a patient-first approach to help you feel your best.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.description}
                image={service.image}
                slug={service.slug}
                icon={<span className="text-2xl">{service.icon}</span>}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 md:py-24 bg-light-warm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-dark-slate mb-4">
            Not Sure Which Service?
          </h2>
          <p className="max-w-2xl mx-auto text-primary/70 mb-8 leading-relaxed">
            Every patient is different. If you are not sure which treatment is right for you, book a consultation with
            Chad. He will review your symptoms, run the necessary labs, and recommend a personalized plan.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-linear-to-r from-primary to-dark-slate rounded-full hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Book a Consultation
          </a>
        </div>
      </section>
    </>
  );
}
