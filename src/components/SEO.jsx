import Head from 'next/head';

export function SEO({ seoData, fallbackTitle }) {
  const title = seoData?.metaTitle || fallbackTitle || "arifikri.com";
  const description = seoData?.metaDescription || "Ari Fikri's personal website and blog.";
  const ogImage = seoData?.shareImage || "/default-og.jpg";
  const robots = seoData?.noIndex ? "noindex, nofollow" : "index, follow";
  const canonical = window.location.href;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />
    </Head>
  );
}
