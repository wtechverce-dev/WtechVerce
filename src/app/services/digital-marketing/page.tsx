import SeoService, { metadata as seoMetadata } from "../seo/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...seoMetadata,
  title: "Top-Tier Digital Marketing Agency & Performance Marketing | WTechVerce",
  description:
    "Scale your organic revenue with advanced data-driven SEO campaigns and full-service performance marketing solutions. Dominate your industry search rankings today.",
  alternates: {
    canonical: "https://wtechverce.com/services/digital-marketing",
  },
};

export default function DigitalMarketingPage() {
  return <SeoService />;
}
