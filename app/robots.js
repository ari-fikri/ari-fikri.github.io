// Force Next.js to compile this file statically during build time
export const dynamic = 'force-static';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Optional: Add paths you want to hide from search engines
    },
    sitemap: 'https://arifikri.com',
  };
}