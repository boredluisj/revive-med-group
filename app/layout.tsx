import type { Metadata } from "next";
import { playfairDisplay, cormorantGaramond, inter } from "@/lib/fonts";
import { localBusinessSchema } from "@/lib/schema";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Revive Medical Group | Hormone Therapy & Regenerative Medicine",
  description:
    "Revive Medical Group in North Myrtle Beach, SC provides hormone therapy, TRT, semaglutide weight loss, BHRT, IV nutrient therapy, Botox, and regenerative medicine. Led by Chad Watts, DMSc, PA-C.",
  metadataBase: new URL("https://revivemedgroup.com"),
  openGraph: {
    title: "Revive Medical Group | Hormone Therapy & Regenerative Medicine",
    description:
      "Expert hormone therapy and regenerative medicine in North Myrtle Beach, SC. TRT, semaglutide, BHRT, IV therapy, Botox, and more.",
    url: "https://revivemedgroup.com",
    siteName: "Revive Medical Group",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Revive Medical Group | Hormone Therapy & Regenerative Medicine",
    description:
      "Expert hormone therapy and regenerative medicine in North Myrtle Beach, SC.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${cormorantGaramond.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema()),
          }}
        />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
