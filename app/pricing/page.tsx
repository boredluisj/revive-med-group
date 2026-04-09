import type { Metadata } from "next";
import Accordion from "@/components/Accordion";

export const metadata: Metadata = {
  title: "Transparent Pricing | Revive Medical Group",
  description:
    "View transparent, personalized pricing for hormone therapy, TRT, semaglutide weight loss, BHRT, and regenerative medicine at Revive Medical Group in North Myrtle Beach, SC.",
};

const tiers = [
  {
    name: "Essential",
    price: "$149",
    priceNote: "one-time",
    description: "Start with a comprehensive evaluation to understand your health baseline.",
    services: ["Initial Consultation", "Extensive Hormone Testing", "TeleHealth Visit"],
    features: [
      "Comprehensive health assessment",
      "Full lab panel review",
      "Treatment plan outline",
      "Follow-up scheduling",
    ],
    cta: "Book Your Consultation",
    highlight: false,
  },
  {
    name: "Premium",
    price: "$249-349",
    priceNote: "per month",
    description:
      "Ongoing treatment and monitoring for your specific protocol.",
    services: [
      "TRT Protocol: $249/mo",
      "BHRT Protocol: $299/mo",
      "Semaglutide: $349/mo",
    ],
    features: [
      "Monthly medication included",
      "Ongoing lab monitoring",
      "Dosage adjustments as needed",
      "24/7 provider support",
      "Telehealth follow-ups",
    ],
    cta: "Get Started",
    highlight: true,
  },
  {
    name: "Custom",
    price: "Consult for Quote",
    priceNote: "",
    description:
      "Tailored packages for multi-service plans, peptide combos, and aesthetic treatments.",
    services: [
      "Peptide + IV combos",
      "Aesthetic packages",
      "Multi-service plans",
    ],
    features: [
      "Tailored protocol design",
      "Bundled pricing savings",
      "Priority scheduling",
      "Dedicated care coordinator",
    ],
    cta: "Request a Quote",
    highlight: false,
  },
];

const includedItems = [
  {
    title: "Medical Oversight",
    description:
      "Every treatment is prescribed and monitored by Chad Watts, DMSc, PA-C. You are never handed off to a technician for clinical decisions.",
  },
  {
    title: "Comprehensive Lab Work",
    description:
      "We run full hormone panels, metabolic markers, and any additional testing needed to get a complete picture of your health.",
  },
  {
    title: "Personalized Protocols",
    description:
      "No cookie-cutter plans. Your treatment is built around your lab results, symptoms, lifestyle, and goals.",
  },
  {
    title: "Ongoing Adjustments",
    description:
      "Your protocol is a living document. We retest, reassess, and refine until your levels and symptoms are where they should be.",
  },
  {
    title: "Telehealth Access",
    description:
      "Follow-up visits are available via telehealth for your convenience. No need to come into the office for every check-in.",
  },
  {
    title: "24/7 Support",
    description:
      "Premium and Custom plan members have around-the-clock access to our clinical team for questions and concerns.",
  },
];

const pricingFaqs = [
  {
    question: "What is included in the initial consultation fee?",
    answer:
      "The $149 consultation includes a one-on-one evaluation with Chad Watts, comprehensive blood work and hormone panel, a detailed review of your results, and a personalized treatment recommendation. This is a thorough medical assessment, not a sales pitch.",
  },
  {
    question: "Are there any hidden fees or long-term contracts?",
    answer:
      "No hidden fees. No contracts. Monthly plans are month-to-month and you can pause or cancel at any time. The prices listed include your medication, monitoring labs, and follow-up visits. If additional testing is needed outside the standard panel, we discuss costs upfront.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "We are not an insurance-based clinic, which allows us to spend more time with each patient and offer treatments that insurance often does not cover. We can provide superbills and itemized receipts for you to submit to your insurance for potential reimbursement through out-of-network benefits.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards, HSA and FSA cards, CareCredit, and cash. Payment is due at the time of service for consultations. Monthly plans are billed automatically on the same date each month.",
  },
  {
    question: "Can I switch between plans or add services later?",
    answer:
      "Yes. Your health needs may change over time, and your plan should reflect that. You can upgrade, downgrade, or add services at any point. If you start with TRT and later want to add semaglutide, we simply adjust your plan and pricing accordingly.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark-slate text-white py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Transparent, Personalized Pricing
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/80 leading-relaxed">
            Quality care should not come with surprise bills. We keep our pricing clear and straightforward so you can
            focus on what matters: getting better.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl border p-8 flex flex-col ${
                  tier.highlight
                    ? "border-primary bg-white shadow-lg ring-2 ring-primary/20 relative"
                    : "border-warm-border bg-white"
                }`}
              >
                {tier.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="font-heading text-2xl font-semibold text-dark-slate mb-2">
                  {tier.name}
                </h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-dark-slate">{tier.price}</span>
                  {tier.priceNote && (
                    <span className="text-sm text-primary/60 ml-1">/{tier.priceNote}</span>
                  )}
                </div>
                <p className="text-primary/70 text-sm mb-6 leading-relaxed">
                  {tier.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-primary/50 mb-3">
                    Services
                  </h4>
                  <ul className="space-y-2">
                    {tier.services.map((service) => (
                      <li key={service} className="flex items-start gap-2 text-sm text-dark-slate">
                        <svg
                          className="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-primary/50 mb-3">
                    Features
                  </h4>
                  <ul className="space-y-2">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-primary/70">
                        <svg
                          className="w-4 h-4 text-primary/40 mt-0.5 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <a
                    href="https://www.revivemedgroup.com/appointment"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-3 px-6 text-sm font-medium rounded-full transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                      tier.highlight
                        ? "text-white bg-linear-to-r from-primary to-dark-slate hover:opacity-90"
                        : "text-primary border border-primary hover:bg-primary/5"
                    }`}
                  >
                    {tier.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-14 md:py-24 bg-light-warm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-dark-slate mb-4">
              What Is Included in Your Care
            </h2>
            <p className="max-w-2xl mx-auto text-primary/70 leading-relaxed">
              Every plan at Revive Medical Group comes with comprehensive medical oversight and personalized attention.
              Here is what that looks like in practice.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {includedItems.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-warm-border">
                <h3 className="font-heading text-lg font-semibold text-dark-slate mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-primary/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance & Payment */}
      <section className="py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-dark-slate mb-4">
              Insurance and Payment
            </h2>
            <p className="text-primary/70 leading-relaxed mb-6">
              Revive Medical Group operates as a cash-pay practice. This model allows us to spend more time with each
              patient, avoid the limitations of insurance formularies, and offer treatments that many insurance plans do
              not cover. We accept all major credit and debit cards, HSA/FSA cards, and CareCredit financing.
            </p>
            <p className="text-primary/70 leading-relaxed">
              If you have out-of-network benefits, we provide superbills and itemized receipts that you can submit to
              your insurance company for potential reimbursement. Our front desk team can help you understand this
              process.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-24 bg-light-warm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-dark-slate mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <Accordion items={pricingFaqs} />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-dark-slate mb-4">
            Ready to Get Started?
          </h2>
          <p className="max-w-2xl mx-auto text-primary/70 mb-8 leading-relaxed">
            Book your initial consultation today and take the first step toward feeling like yourself again.
          </p>
          <a
            href="https://www.revivemedgroup.com/appointment"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-linear-to-r from-primary to-dark-slate rounded-full hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Book a Consultation
          </a>
        </div>
      </section>
    </>
  );
}
