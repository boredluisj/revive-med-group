import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Revive Medical Group",
  description:
    "Review the terms of service for Revive Medical Group. Understand your rights and responsibilities when using our website and services.",
};

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark-slate text-white py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-semibold mb-4">
            Terms of Service
          </h1>
          <p className="text-white/60 text-sm">Last updated: April 1, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-dark-slate prose-p:text-primary/80 prose-p:leading-relaxed">
            <p>
              Welcome to the Revive Medical Group website. By accessing or using this website, you agree to be bound by
              these Terms of Service. If you do not agree with any part of these terms, please do not use our website.
            </p>

            <h2>Use of This Website</h2>
            <p>
              This website is provided by Revive Medical Group for informational purposes and to facilitate access to our
              medical services. You may use this website for lawful purposes only. You agree not to use the site in any
              way that could damage, disable, or impair the website or interfere with any other party's use of it.
            </p>
            <p>
              The content on this website, including text, images, and other materials, is for general informational
              purposes only. It is not intended as medical advice, diagnosis, or treatment. Always seek the advice of
              your physician or qualified healthcare provider with any questions regarding a medical condition. Never
              disregard professional medical advice or delay seeking it because of something you have read on this
              website.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              All content on this website, including but not limited to text, graphics, logos, images, audio, video,
              software, and the overall design and layout, is the property of Revive Medical Group or its content
              suppliers and is protected by United States and international copyright, trademark, and other intellectual
              property laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, create derivative works from, publicly display, or otherwise
              exploit any content from this website without prior written permission from Revive Medical Group.
            </p>

            <h2>User Accounts and Submissions</h2>
            <p>
              Certain features of our website may require you to provide personal information, such as when scheduling an
              appointment or submitting a contact form. You agree to provide accurate, current, and complete information.
              You are responsible for maintaining the confidentiality of any account credentials.
            </p>
            <p>
              By submitting any content through our website, including messages, reviews, or feedback, you grant Revive
              Medical Group a non-exclusive, royalty-free right to use, display, and share that content for operational
              and marketing purposes, provided it does not contain protected health information.
            </p>

            <h2>Appointment Scheduling and Cancellation</h2>
            <p>
              Appointments scheduled through our website are subject to availability and confirmation. We reserve the
              right to reschedule or cancel appointments when necessary. If you need to cancel or reschedule, please
              provide at least 24 hours notice. Repeated no-shows or late cancellations may result in a cancellation fee
              or restrictions on future scheduling.
            </p>

            <h2>Payment Terms</h2>
            <p>
              Revive Medical Group operates as a cash-pay practice. Payment is due at the time of service unless other
              arrangements have been made. We accept major credit and debit cards, HSA/FSA cards, and CareCredit. Prices
              for services are subject to change without prior notice. You will be informed of applicable charges before
              treatment begins.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Revive Medical Group and its owners, employees, and affiliates
              shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from
              your use of this website or our services. This includes, without limitation, damages for loss of profits,
              data, or other intangible losses.
            </p>
            <p>
              Our total liability to you for any claim arising from or related to these Terms or your use of the website
              shall not exceed the amount you paid to us for services during the 12 months preceding the claim.
            </p>
            <p>
              We do not guarantee that the website will be available at all times or that it will be free of errors,
              viruses, or other harmful components.
            </p>

            <h2>Disclaimer of Warranties</h2>
            <p>
              This website is provided on an "as is" and "as available" basis without warranties of any kind, either
              express or implied. Revive Medical Group disclaims all warranties, including implied warranties of
              merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the website
              will meet your requirements, be uninterrupted, timely, secure, or error-free.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites or services that are not owned or controlled by
              Revive Medical Group. We have no control over and assume no responsibility for the content, privacy
              policies, or practices of any third-party sites. Visiting those sites is at your own risk.
            </p>

            <h2>Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Revive Medical Group, its officers, directors,
              employees, agents, and affiliates from any claims, liabilities, damages, losses, and expenses, including
              reasonable attorney fees, arising from your use of the website, your violation of these Terms, or your
              violation of any rights of a third party.
            </p>

            <h2>Dispute Resolution</h2>
            <p>
              Any dispute arising from these Terms of Service or your use of this website shall be governed by and
              construed in accordance with the laws of the State of South Carolina, without regard to its conflict of law
              provisions. You agree that any legal action or proceeding shall be brought exclusively in the state or
              federal courts located in Horry County, South Carolina.
            </p>
            <p>
              Before initiating any formal legal proceedings, both parties agree to attempt to resolve disputes through
              good-faith negotiation. If negotiation is unsuccessful, either party may pursue resolution through
              mediation before a mutually agreed-upon mediator in Horry County, South Carolina.
            </p>

            <h2>Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be modified
              to the minimum extent necessary to make it enforceable, and the remaining provisions shall continue in
              full force and effect.
            </p>

            <h2>Changes to These Terms</h2>
            <p>
              We reserve the right to update or modify these Terms of Service at any time. Changes will be effective
              immediately upon posting to this page. Your continued use of the website after changes are posted
              constitutes your acceptance of the revised Terms.
            </p>

            <h2>Contact</h2>
            <p>If you have questions about these Terms of Service, please contact us:</p>
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
