// src/app/[slug]/page.tsx

import { notFound } from 'next/navigation';
import { pages } from '@/config/pages.config';
import { OptimizePage } from '@/components/OptimizePage';
import { Metadata } from 'next';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { slug } = params;
  const page = pages.find(p => p.slug === slug);
  if (!page) return notFound();

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: `https://imageninja.ru/${slug}`,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `https://imageninja.ru/${slug}`,
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
      title: page.title,
      description: page.description,
      images: ["https://imageninja.ru/assets/images/seo-cover.webp"],
    },
  };
}

export async function generateViewport() {
  return {
    themeColor: "#312e81"
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function DynamicPage({ params }: any) {
  const { slug } = params;
  const page = pages.find(p => p.slug === slug);
  if (!page) return notFound();
  return <OptimizePage {...page} />;
}

export async function generateStaticParams() {
  return pages.map(page => ({
    slug: page.slug,
  }));
}
