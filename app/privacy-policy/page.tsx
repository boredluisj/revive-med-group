import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Revive Medical Group",
  description:
    "Read the privacy policy for Revive Medical Group. Learn how we collect, use, and protect your personal and health information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark-slate text-white py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-semibold mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/60 text-sm">Last updated: April 1, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-dark-slate prose-p:text-primary/80 prose-p:leading-relaxed">
            <p>
              Revive Medical Group ("we," "our," or "us") is committed to protecting the privacy and security of your
              personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website, use our services, or interact with us in any way.
            </p>

            <h2>Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <p>
              <strong>Personal Information:</strong> Name, email address, phone number, mailing address, date of birth,
              and other identifiers you provide when scheduling appointments, filling out forms, or contacting us.
            </p>
            <p>
              <strong>Health Information:</strong> Medical history, symptoms, lab results, treatment records, insurance
              information, and other health-related data necessary to provide medical services. This information is
              handled in accordance with HIPAA regulations.
            </p>
            <p>
              <strong>Usage Data:</strong> Information about how you interact with our website, including IP address,
              browser type, pages visited, time spent on pages, and referring URLs. This data is collected through
              cookies and similar technologies.
            </p>

            <h2>HIPAA Compliance</h2>
            <p>
              As a medical practice, we are required to comply with the Health Insurance Portability and Accountability
              Act (HIPAA). Your protected health information (PHI) is handled with the highest level of security and
              confidentiality. We maintain administrative, technical, and physical safeguards to protect your PHI from
              unauthorized access, use, or disclosure.
            </p>
            <p>
              For detailed information about how we handle your health information, please refer to our{" "}
              <a href="/hipaa-notice" className="text-primary underline hover:text-dark-slate">
                HIPAA Notice of Privacy Practices
              </a>
              .
            </p>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <p>
              Provide, maintain, and improve our medical services. Communicate with you about appointments, treatment
              plans, and follow-up care. Process payments and manage your account. Send you relevant health information
              and updates when you have opted in. Comply with legal and regulatory requirements. Improve our website and
              patient experience.
            </p>

            <h2>Cookies and Tracking Technologies</h2>
            <p>
              Our website uses cookies and similar tracking technologies to enhance your browsing experience and collect
              usage data. Cookies are small text files stored on your device that help us understand how visitors use our
              site.
            </p>
            <p>
              <strong>Essential Cookies:</strong> Required for the website to function properly. These cannot be
              disabled.
            </p>
            <p>
              <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website so we can
              improve it. These are anonymized and do not contain personal health information.
            </p>
            <p>
              You can control cookie settings through your browser preferences. Disabling certain cookies may affect
              website functionality.
            </p>

            <h2>Third-Party Services</h2>
            <p>
              We may use third-party services that collect, monitor, or analyze information on our behalf. These include
              website hosting providers, appointment scheduling platforms, payment processors, email communication tools,
              and analytics services. All third-party providers are vetted for compliance with applicable privacy
              regulations and are contractually obligated to protect your data.
            </p>
            <p>
              We do not sell your personal information to third parties. We do not share your health information with
              third parties for marketing purposes.
            </p>

            <h2>Data Retention</h2>
            <p>
              We retain personal information for as long as necessary to fulfill the purposes described in this policy,
              unless a longer retention period is required by law. Medical records are retained in accordance with state
              and federal requirements, which typically mandate retention for a minimum of 10 years after the last date
              of service.
            </p>
            <p>
              Website usage data and analytics are retained for up to 26 months, after which they are automatically
              deleted or anonymized.
            </p>

            <h2>Your Rights</h2>
            <p>Depending on your location and applicable law, you may have the right to:</p>
            <p>
              Access the personal information we hold about you. Request correction of inaccurate or incomplete
              information. Request deletion of your personal information, subject to legal retention requirements.
              Opt out of marketing communications at any time. Request a copy of your data in a portable format.
              File a complaint with a regulatory authority if you believe your privacy rights have been violated.
            </p>
            <p>
              To exercise any of these rights, contact us using the information provided below.
            </p>

            <h2>Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your information, including encrypted data
              transmission (SSL/TLS), secure server infrastructure, access controls and authentication, regular security
              audits, and staff training on data privacy and HIPAA compliance. While no method of electronic transmission
              or storage is 100% secure, we take all reasonable steps to protect your information.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal
              information from children. If you are a parent or guardian and believe your child has provided us with
              personal information, please contact us so we can take appropriate action.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we make changes, we will update the "Last
              updated" date at the top of this page. We encourage you to review this policy periodically to stay
              informed about how we protect your information.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
            </p>
            <p>
              Revive Medical Group<br />
              1016 Second Avenue N, Suite 203-F<br />
              North Myrtle Beach, SC 29582<br />
              Phone: <a href="tel:8432999000" className="text-primary underline hover:text-dark-slate">(843) 299-9000</a><br />
              Website:{" "}
              <a href="https://revivemedgroup.com" className="text-primary underline hover:text-dark-slate">
                revivemedgroup.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
