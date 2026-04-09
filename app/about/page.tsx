import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Chad Watts, DMSc, PA-C | Revive Medical Group",
  description:
    "Learn about Chad Watts, DMSc, PA-C, founder of Revive Medical Group. Army veteran, Doctor of Medical Science, and expert in hormone therapy and regenerative medicine in North Myrtle Beach, SC.",
};

const credentials = [
  {
    title: "DMSc",
    subtitle: "Doctor of Medical Science",
    description: "The highest clinical credential available to physician assistants, earned at Shenandoah University.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: "PA-C",
    subtitle: "Physician Assistant, Certified",
    description: "MSPAS from the Medical University of South Carolina. Nationally certified and state licensed.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    title: "AABRM & ABRM",
    subtitle: "Board Certified",
    description: "Dual board certification in regenerative medicine, demonstrating advanced expertise in the field.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    ),
  },
  {
    title: "US Army Veteran",
    subtitle: "SC National Guard Captain",
    description: "Served as Radiology Specialist and NCO in Charge. Currently a Captain in the SC National Guard Medical Command.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
      </svg>
    ),
  },
];

const approachItems = [
  {
    title: "Comprehensive Assessment",
    description:
      "Every patient starts with thorough lab work and a detailed health history review. No assumptions, no shortcuts.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: "Personalized Protocols",
    description:
      "Your treatment plan is built from scratch based on your labs, symptoms, and goals. No generic dosing charts.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
  },
  {
    title: "Ongoing Monitoring",
    description:
      "Regular lab work and check-ins ensure your protocol stays effective. Adjustments are made based on data, not guesswork.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
  {
    title: "Transparent Communication",
    description:
      "You will always understand the why behind every decision. No medical jargon, no upselling, just honest guidance.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
];

const locations = [
  {
    name: "North Myrtle Beach, SC",
    address: "1016 Second Avenue N, Suite 203-F",
    note: "Primary Location",
  },
  {
    name: "Tabor City, NC",
    address: "Satellite office",
    note: "By Appointment",
  },
  {
    name: "Longs, SC",
    address: "Satellite office",
    note: "By Appointment",
  },
  {
    name: "Tampa, FL",
    address: "Satellite office",
    note: "By Appointment",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-14 md:py-24 bg-dark-slate overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/about/about-bg.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4">
            Meet Chad Watts, DMSc, PA-C
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white/80">
            Army veteran, Doctor of Medical Science, and founder of Revive Medical Group. Dedicated to personalized,
            evidence-based hormone therapy and regenerative medicine.
          </p>
        </div>
      </section>

      {/* Chad's Story */}
      <section className="py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-5 lg:gap-12 items-start">
            {/* Headshot */}
            <div className="lg:col-span-2 mb-8 lg:mb-0">
              <div className="relative aspect-[5/7] rounded-2xl overflow-hidden shadow-lg max-w-sm mx-auto lg:max-w-none">
                <Image
                  src="/images/client/revive/chad-headshot.jpg"
                  alt="Chad Watts, DMSc, PA-C, founder of Revive Medical Group"
                  fill
                  sizes="(max-width: 1024px) 384px, 40vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Story Content */}
            <div className="lg:col-span-3">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-dark-slate mb-6">
                Chad&apos;s Story
              </h2>
              <div className="space-y-4 text-primary/80 leading-relaxed">
                <p>
                  Chad Watts did not take a straight path into regenerative medicine. His journey started in the United
                  States Army, where he served as a Radiology Specialist and rose to the position of Radiology NCO in
                  Charge at the 320th Combat Support Hospital. That military experience taught him discipline,
                  precision, and the ability to perform under pressure, qualities that define his medical practice
                  today.
                </p>
                <p>
                  After his active duty service, Chad earned his MSPAS (Master of Science in Physician Assistant
                  Studies) from the Medical University of South Carolina, one of the top PA programs in the country.
                  He launched his clinical career in emergency medicine, spending years treating acute conditions in
                  fast-paced hospital settings. That work gave him a broad clinical foundation, but it also showed him
                  the limitations of reactive medicine. He saw patients returning again and again with the same
                  chronic issues that never got addressed at the root level.
                </p>
                <p>
                  That frustration led Chad to regenerative and functional medicine. He earned his DMSc (Doctor of
                  Medical Science) from Shenandoah University, the highest clinical credential available to physician
                  assistants. He also pursued board certifications through the AABRM and ABRM, deepening his
                  expertise in hormone optimization, peptide therapy, and evidence-based regenerative protocols.
                </p>
                <p>
                  Chad continues to serve in the South Carolina National Guard as a Captain in the Medical Command.
                  His military background is not just a line on his resume. It shapes how he runs his practice:
                  structured, disciplined, mission-focused, and deeply respectful of the people he serves. He was
                  also named Fort Sam Houston&apos;s Strongest Soldier in 2005, a distinction that reflects the same
                  commitment to physical excellence he brings to his patients.
                </p>
                <p>
                  His philosophy is straightforward: &quot;I don&apos;t push products. I listen. I diagnose. I
                  customize. I monitor. I adapt.&quot; Every patient gets a protocol built specifically for them, not
                  a template pulled off a shelf. Chad reviews every lab result personally, explains every decision in
                  plain language, and adjusts every plan based on how your body actually responds.
                </p>
                <p>
                  Outside the clinic, Chad lives in the North Myrtle Beach area with his wife Alison, who is a
                  registered nurse, and their three children: Kennedy, John Reuben, and Annabelle. The family is
                  active at Iron Hill Baptist Church and spends their free time boating, fishing, and enjoying life
                  on the coast. That connection to community is part of why Chad chose to build Revive Medical Group
                  here. He is not just a provider in this area. He is a neighbor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials & Certifications */}
      <section className="py-14 md:py-24 bg-light-warm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-dark-slate text-center mb-12">
            Credentials &amp; Certifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((cred) => (
              <div
                key={cred.title}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                  {cred.icon}
                </div>
                <h3 className="font-heading text-xl font-semibold text-dark-slate mb-1">{cred.title}</h3>
                <p className="text-sm font-medium text-primary mb-2">{cred.subtitle}</p>
                <p className="text-sm text-primary/60 leading-relaxed">{cred.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach to Care */}
      <section className="py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-dark-slate text-center mb-4">
            Approach to Care
          </h2>
          <p className="max-w-2xl mx-auto text-center text-primary/70 mb-12">
            Every patient interaction follows the same four principles. No exceptions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {approachItems.map((item) => (
              <div
                key={item.title}
                className="border border-warm-border rounded-2xl p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-dark-slate/5 text-primary mb-4">
                  {item.icon}
                </div>
                <h3 className="font-heading text-lg font-semibold text-dark-slate mb-2">{item.title}</h3>
                <p className="text-sm text-primary/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-14 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-dark-slate text-center mb-4">
            Meet the Team
          </h2>
          <p className="max-w-2xl mx-auto text-center text-primary/70 mb-12">
            Multiple patients mention Alison by name in their reviews. She is an integral part of the Revive Medical Group experience.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-4">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-dark-slate mb-1">Chad Watts</h3>
              <p className="text-sm font-medium text-primary mb-2">DMSc, PA-C, Owner/Medical Director</p>
              <p className="text-sm text-primary/60 leading-relaxed">
                Doctor of Medical Science, Army veteran, board-certified in regenerative medicine. 15+ years of clinical experience.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-4">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-dark-slate mb-1">Alison Watts</h3>
              <p className="text-sm font-medium text-primary mb-2">RN, Clinical Support</p>
              <p className="text-sm text-primary/60 leading-relaxed">
                Registered nurse and integral part of the Revive team. Patients consistently praise Alison for her warmth, attentiveness, and ensuring every patient receives the right treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Locations */}
      <section className="py-14 md:py-24 bg-light-warm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-dark-slate text-center mb-12">
            Our Locations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((loc) => (
              <div
                key={loc.name}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mb-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <h3 className="font-heading text-lg font-semibold text-dark-slate mb-1">{loc.name}</h3>
                <p className="text-sm text-primary/70 mb-1">{loc.address}</p>
                <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                  {loc.note}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-24 bg-dark-slate text-white text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
            Book a Consultation with Chad
          </h2>
          <p className="max-w-2xl mx-auto text-white/70 mb-8">
            Whether you are dealing with hormonal issues, looking to optimize your health, or exploring aesthetic
            treatments, Chad will work with you to build a plan that fits your life.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 text-base font-medium text-dark-slate bg-secondary rounded-full hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-dark-slate"
          >
            Book a Consultation
          </a>
        </div>
      </section>
    </>
  );
}
