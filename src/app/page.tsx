import { OptimizePage } from "@/components/OptimizePage";
import { pages } from "@/config/pages.config";

export const metadata = {
  title: pages[0].title,
  description: pages[0].description,
  alternates: {
    canonical: "https://imageninja.ru/",
  },
  openGraph: {
    title: pages[0].title,
    description: pages[0].description,
    url: "https://imageninja.ru/",
    images: [
      {
        url: "https://imageninja.ru/assets/images/seo-cover.webp",
        width: 1200,
        height: 630,
        alt: "ImageNinja SEO Cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pages[0].title,
    description: pages[0].description,
    images: ["https://imageninja.ru/assets/images/seo-cover.webp"],
  },
};

export const viewport = {
  themeColor: "#312e81",
};

export default function HomePage() {
  return <OptimizePage {...pages[0]} />;
}
