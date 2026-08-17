import { readdirSync, existsSync } from 'fs';
import path from 'path';

const HOSTNAME = 'https://arifikri.com'; // Your custom domain

function getBlogSlugs() {
  const contentDir = path.join(process.cwd(), 'blog');
  if (!existsSync(contentDir)) return [];

  return readdirSync(contentDir)
    .filter(file => file.endsWith('.md') || file.endsWith('.mdx') || file.endsWith('.json'))
    .map(file => file.replace(/\.(md|mdx|json)$/, ''));
}

export default async function sitemap() {
  const slugs = getBlogSlugs();

  const staticRoutes = [
    { url: `${HOSTNAME}/`, lastModified: new Date() },
    { url: `${HOSTNAME}/blog`, lastModified: new Date() },
  ];

  const dynamicRoutes = slugs.map(slug => ({
    url: `${HOSTNAME}/blog/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
