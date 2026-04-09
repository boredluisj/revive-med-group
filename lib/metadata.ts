import type { Metadata } from "next";

interface PageMetadataParams {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}

const SITE_URL = "https://revivemedgroup.com";
const DEFAULT_DESCRIPTION =
  "Revive Medical Group in North Myrtle Beach, SC offers hormone therapy, TRT, semaglutide weight loss, BHRT, IV nutrient therapy, Botox, and regenerative medicine. Led by Chad Watts, DMSc, PA-C.";
const DEFAULT_IMAGE = "/images/client/revive/hero-bg.jpg";

export function generateMetadata({
  title,
  description,
  path = "",
  image,
}: PageMetadataParams = {}): Metadata {
  const pageTitle = title || "Hormone Therapy & Regenerative Medicine";
  const pageDescription = description || DEFAULT_DESCRIPTION;
  const pageImage = image || DEFAULT_IMAGE;
  const url = `${SITE_URL}${path}`;

  return {
    title: {
      default: pageTitle,
      template: "%s | Revive Medical Group",
    },
    description: pageDescription,
    metadataBase: new URL(SITE_URL),
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: "Revive Medical Group",
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: "Revive Medical Group",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
    },
    alternates: {
      canonical: url,
    },
  };
}
