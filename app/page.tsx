import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "Revive Medical Group | Hormone Therapy & Regenerative Medicine in North Myrtle Beach",
  description:
    "Personalized hormone therapy, TRT, semaglutide weight loss, BHRT, IV nutrient therapy, and regenerative medicine led by Chad Watts, DMSc, PA-C. Serving North Myrtle Beach, SC and surrounding areas.",
};

export default function HomePage() {
  return <HomeContent />;
}
