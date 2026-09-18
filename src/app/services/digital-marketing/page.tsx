import SeoService, { metadata as seoMetadata } from "../seo/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...seoMetadata,
  title: "Top Results Digital Marketing Agency | WTechVerce",
  description:
    "WTechVerce is a top results digital marketing agency providing corporate performance marketing solutions, search engine marketing traffic growth, and data-driven campaigns.",
  alternates: {
    canonical: "https://wtechverce.com/services/digital-marketing",
  },
};

export default function DigitalMarketingPage() {
  return <SeoService />;
}
