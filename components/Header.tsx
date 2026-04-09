"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const services = [
  { name: "Testosterone Replacement Therapy (TRT)", slug: "trt" },
  { name: "Semaglutide Weight Loss", slug: "semaglutide-weight-loss" },
  { name: "Bioidentical Hormone Therapy (BHRT)", slug: "bhrt" },
  { name: "IV Nutrient Therapy", slug: "iv-nutrient-therapy" },
  { name: "Sexual Dysfunction", slug: "sexual-dysfunction" },
  { name: "Botox & Aesthetics", slug: "botox-aesthetics" },
  { name: "Peptide Therapy", slug: "peptide-therapy" },
  { name: "Thyroid Optimization", slug: "thyroid-optimization" },
  { name: "Regenerative Medicine", slug: "regenerative-medicine" },
  { name: "Functional Lab Testing", slug: "functional-lab-testing" },
  { name: "Telehealth Consultations", slug: "telehealth" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "Locations", href: "/locations" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleDropdownEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 150);
  };

  return (
    <>
      {/* Top bar - hidden on mobile */}
      <div className="hidden md:block bg-primary text-white text-xs py-1.5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <span>Serving North Myrtle Beach, Tabor City, Longs, Tampa &amp; Telehealth</span>
          <a
            href="tel:843-299-9000"
            className="hover:text-secondary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
          >
            843-299-9000
          </a>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-warm-border">
        <nav
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="font-heading text-xl font-semibold text-primary tracking-wide focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          >
            REVIVE MEDICAL
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  ref={dropdownRef}
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    href={link.href}
                    className="px-3 py-2 text-sm font-medium text-dark-slate hover:text-primary transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary inline-flex items-center gap-1"
                  >
                    {link.name}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>

                  {/* Dropdown */}
                  {servicesOpen && (
                    <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-lg border border-warm-border py-2 z-50">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="block px-4 py-2 text-sm text-dark-slate hover:bg-light-warm hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-dark-slate hover:text-primary transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {link.name}
                </Link>
              )
            )}

            {/* Phone */}
            <a
              href="tel:843-299-9000"
              className="ml-2 text-xs text-primary/70 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            >
              843-299-9000
            </a>

            {/* CTA */}
            <a
              href="https://www.revivemedgroup.com/appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 inline-flex items-center px-5 py-2 text-sm font-medium text-white bg-linear-to-r from-primary to-dark-slate rounded-full hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Book Consultation
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-dark-slate hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Mobile drawer overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] bg-background shadow-xl transform transition-transform duration-300 lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-warm-border">
          <span className="font-heading text-lg font-semibold text-primary">REVIVE MEDICAL</span>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 text-dark-slate hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="overflow-y-auto h-[calc(100%-64px)] px-4 py-4">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.name}>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between py-3 text-base font-medium text-dark-slate hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                >
                  {link.name}
                  <svg
                    className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileServicesOpen && (
                  <div className="pl-4 pb-2">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        onClick={() => setMobileOpen(false)}
                        className="block py-2 text-sm text-dark-slate/80 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-base font-medium text-dark-slate hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                {link.name}
              </Link>
            )
          )}

          <div className="mt-6 pt-6 border-t border-warm-border space-y-4">
            <a
              href="tel:843-299-9000"
              className="block text-sm text-primary hover:text-dark-slate transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            >
              Call: 843-299-9000
            </a>
            <a
              href="https://www.revivemedgroup.com/appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-5 py-3 text-sm font-medium text-white bg-linear-to-r from-primary to-dark-slate rounded-full hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
