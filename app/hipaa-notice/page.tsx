import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HIPAA Notice of Privacy Practices | Revive Medical Group",
  description:
    "HIPAA Notice of Privacy Practices for Revive Medical Group. Learn about your rights regarding protected health information and how we safeguard your medical data.",
};

export default function HipaaNoticePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark-slate text-white py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-semibold mb-4">
            HIPAA Notice of Privacy Practices
          </h1>
          <p className="text-white/60 text-sm">Effective Date: April 1, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-dark-slate prose-p:text-primary/80 prose-p:leading-relaxed">
            <p>
              This notice describes how medical information about you may be used and disclosed, and how you can access
              this information. Please review it carefully.
            </p>

            <h2>Your Privacy Is Our Priority</h2>
            <p>
              At Revive Medical Group, we understand that your health information is personal and private. We are
              committed to protecting your protected health information (PHI) in compliance with the Health Insurance
              Portability and Accountability Act of 1996 (HIPAA) and all applicable state and federal privacy laws. This
              notice explains your rights and our obligations regarding the privacy of your medical records and other
              health information.
            </p>

            <h2>What We Collect</h2>
            <p>
              In the course of providing you with medical care, we collect and maintain various types of health
              information, including:
            </p>
            <p>
              <strong>Medical History:</strong> Information about your past and present health conditions, symptoms,
              medications, allergies, and family health history that you provide during consultations and intake forms.
            </p>
            <p>
              <strong>Lab Results and Diagnostics:</strong> Blood work, hormone panels, metabolic panels, and other
              diagnostic test results ordered as part of your treatment.
            </p>
            <p>
              <strong>Treatment Records:</strong> Details of treatments provided, including prescriptions, treatment
              protocols, dosage adjustments, progress notes, and follow-up plans.
            </p>
            <p>
              <strong>Billing and Insurance Information:</strong> Payment records, insurance details (if applicable),
              and financial information related to your care.
            </p>
            <p>
              <strong>Contact Information:</strong> Name, address, phone number, email, date of birth, and emergency
              contact details.
            </p>

            <h2>How We Use Your Information</h2>
            <p>
              Your health information may be used and disclosed for the following purposes:
            </p>
            <p>
              <strong>Treatment:</strong> We use your health information to provide, coordinate, and manage your medical
              care. This includes sharing relevant information with other healthcare providers involved in your
              treatment, pharmacies filling your prescriptions, and laboratories performing your tests.
            </p>
            <p>
              <strong>Payment:</strong> We may use and disclose your health information to process payments for services
              rendered, including billing, collections, and providing documentation for insurance claims or
              reimbursement requests.
            </p>
            <p>
              <strong>Healthcare Operations:</strong> We may use your information for internal activities that support
              the quality and efficiency of our practice, such as quality improvement initiatives, staff training,
              compliance auditing, and administrative planning.
            </p>
            <p>
              <strong>As Required by Law:</strong> We are required to disclose your health information when mandated by
              federal, state, or local law, including reporting certain communicable diseases, responding to court orders,
              or complying with law enforcement requests.
            </p>
            <p>
              <strong>Public Health and Safety:</strong> We may disclose your information to prevent a serious threat to
              your health or safety or that of another person or the public.
            </p>

            <h2>Your Rights</h2>
            <p>
              Under HIPAA, you have the following rights regarding your health information:
            </p>
            <p>
              <strong>Right to Access:</strong> You have the right to inspect and obtain a copy of your health records.
              Requests must be made in writing. We may charge a reasonable fee for copies.
            </p>
            <p>
              <strong>Right to Amend:</strong> If you believe your health information is incorrect or incomplete, you
              may request an amendment. We will respond to your request within 60 days.
            </p>
            <p>
              <strong>Right to an Accounting of Disclosures:</strong> You may request a list of instances where we have
              disclosed your health information for purposes other than treatment, payment, or healthcare operations.
            </p>
            <p>
              <strong>Right to Request Restrictions:</strong> You may ask us to limit how we use or disclose your health
              information. While we will consider your request, we are not required to agree to all restrictions.
              However, if you pay for a service out of pocket in full and request that we not disclose information about
              that service to a health plan, we are required to honor that request.
            </p>
            <p>
              <strong>Right to Confidential Communications:</strong> You may request that we communicate with you about
              your health information in a specific way or at a specific location. For example, you may ask that we call
              only your cell phone or send correspondence to a particular address.
            </p>
            <p>
              <strong>Right to a Paper Copy:</strong> You have the right to receive a paper copy of this notice at any
              time, even if you have previously agreed to receive it electronically.
            </p>
            <p>
              <strong>Right to File a Complaint:</strong> If you believe your privacy rights have been violated, you may
              file a complaint with our office or with the U.S. Department of Health and Human Services Office for Civil
              Rights. We will not retaliate against you for filing a complaint.
            </p>

            <h2>Our Responsibilities</h2>
            <p>
              Revive Medical Group is required by law to maintain the privacy of your protected health information,
              provide you with this notice of our legal duties and privacy practices, notify you in the event of a
              breach of your unsecured health information, and follow the terms of this notice currently in effect.
            </p>
            <p>
              We will not use or disclose your health information without your written authorization except as described
              in this notice. If you provide us with authorization to use or disclose your information, you may revoke
              that authorization in writing at any time. Revocation will not affect any actions we took before receiving
              your revocation.
            </p>
            <p>
              We reserve the right to change the terms of this notice and to apply the revised notice to all health
              information we maintain. If we make a significant change, we will post the updated notice on our website
              and make copies available in our office.
            </p>

            <h2>Minimum Necessary Standard</h2>
            <p>
              When using or disclosing your health information, or when requesting health information from another
              provider, we make reasonable efforts to limit the information to the minimum necessary to accomplish the
              intended purpose. This standard does not apply to disclosures made for treatment purposes, disclosures
              made to you, or disclosures authorized by you in writing.
            </p>

            <h2>Contact for Privacy Concerns</h2>
            <p>
              If you have questions about this notice, wish to exercise any of your rights, or want to file a privacy
              complaint, please contact:
            </p>
            <p>
              <strong>Privacy Officer</strong><br />
              Revive Medical Group<br />
              1016 Second Avenue N, Suite 203-F<br />
              North Myrtle Beach, SC 29582<br />
              Phone: <a href="tel:8432999000" className="text-primary underline hover:text-dark-slate">(843) 299-9000</a>
            </p>
            <p>
              You may also file a complaint with the U.S. Department of Health and Human Services:
            </p>
            <p>
              Office for Civil Rights<br />
              U.S. Department of Health and Human Services<br />
              200 Independence Avenue, S.W.<br />
              Washington, D.C. 20201<br />
              Phone: (877) 696-6775<br />
              Website:{" "}
              <a
                href="https://www.hhs.gov/ocr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline hover:text-dark-slate"
              >
                hhs.gov/ocr
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
