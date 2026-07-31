import React from 'react';
import { Helmet } from 'react-helmet-async';

export function SEO({ seoData, fallbackTitle }) {
  const title = seoData?.metaTitle || fallbackTitle || "arifikri.com";
  const description = seoData?.metaDescription || "Ari Fikri's personal website and blog.";
  const ogImage = seoData?.shareImage || "/default-og.jpg";
  const robots = seoData?.noIndex ? "noindex, nofollow" : "index, follow";
  const canonical = window.location.href;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}

export default SEO;
