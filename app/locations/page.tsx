import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Locations | Revive Medical Group",
  description:
    "Visit Revive Medical Group at our locations in North Myrtle Beach SC, Tabor City NC, Longs SC, and Tampa FL. Telehealth available nationwide.",
};

const locations = [
  {
    name: "North Myrtle Beach, SC",
    badge: "Main Office",
    address: "1016 Second Avenue N, Suite 203-F, Executive Center",
    city: "North Myrtle Beach, SC 29582",
    phone: "(843) 299-9000",
    hours: ["Monday - Thursday: 10:00 AM - 5:00 PM", "Friday: 9:00 AM - 5:00 PM"],
    services: [
      "Testosterone Replacement Therapy",
      "Semaglutide Weight Loss",
      "Bioidentical Hormone Therapy",
      "IV Nutrient Therapy",
      "Peptide Therapy",
      "Botox and Dermal Fillers",
      "Sexual Dysfunction Therapy",
      "Hair Restoration",
      "Full Lab Services",
    ],
  },
  {
    name: "Tabor City, NC",
    badge: null,
    address: "Tabor City",
    city: "Tabor City, NC",
    phone: "(843) 299-9000",
    hours: ["By appointment"],
    services: [
      "Consultations",
      "Lab Work",
      "Select Hormone Treatments",
      "Follow-up Visits",
    ],
  },
  {
    name: "Longs, SC",
    badge: null,
    address: "Longs",
    city: "Longs, SC",
    phone: "(843) 299-9000",
    hours: ["By appointment"],
    services: ["Consultations", "Lab Work"],
  },
  {
    name: "Tampa, FL",
    badge: null,
    address: "Tampa",
    city: "Tampa, FL",
    phone: "(843) 299-9000",
    hours: ["By appointment"],
    services: [
      "In-person Consultations",
      "Select Hormone Treatments",
      "Follow-up Visits",
    ],
  },
];

export default function LocationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark-slate text-white py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Visit Revive Medical Group
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/80 leading-relaxed">
            Multiple locations across the Carolinas and Florida. Plus nationwide telehealth for patients who prefer
            remote consultations.
          </p>
        </div>
      </section>

      {/* Location Cards */}
      <section className="py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locations.map((location) => (
              <div
                key={location.name}
                className={`rounded-2xl border p-8 bg-white ${
                  location.badge ? "border-primary ring-2 ring-primary/20" : "border-warm-border"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-heading text-xl md:text-2xl font-semibold text-dark-slate">
                    {location.name}
                  </h3>
                  {location.badge && (
                    <span className="bg-primary text-white text-xs font-medium px-3 py-1 rounded-full flex-shrink-0 ml-4">
                      {location.badge}
                    </span>
                  )}
                </div>

                {/* Address */}
                <div className="flex items-start gap-3 mb-3">
                  <svg
                    className="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-sm text-primary/70">
                    {location.address}<br />
                    {location.city}
                  </p>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3 mb-3">
                  <svg
                    className="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:8432999000" className="text-sm text-primary/70 hover:text-primary transition-colors">
                    {location.phone}
                  </a>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3 mb-6">
                  <svg
                    className="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="text-sm text-primary/70">
                    {location.hours.map((h) => (
                      <p key={h}>{h}</p>
                    ))}
                  </div>
                </div>

                {/* Services */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-primary/50 mb-3">
                    Available Services
                  </h4>
                  <ul className="space-y-1.5">
                    {location.services.map((service) => (
                      <li key={service} className="flex items-start gap-2 text-sm text-dark-slate">
                        <svg
                          className="w-3.5 h-3.5 text-primary/50 mt-0.5 flex-shrink-0"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Telehealth Section */}
      <section className="py-14 md:py-24 bg-light-warm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-dark-slate mb-4">
              Telehealth Available Nationwide
            </h2>
            <p className="text-primary/70 leading-relaxed mb-8">
              Can not make it to one of our offices? No problem. We offer telehealth consultations and follow-ups for
              patients across the country. Get the same personalized care from the comfort of your home. Lab work can be
              completed at a local facility, and medications ship directly to your door.
            </p>
            <a
              href="https://www.revivemedgroup.com/appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-linear-to-r from-primary to-dark-slate rounded-full hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Schedule a Telehealth Visit
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
