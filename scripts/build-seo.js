/**
 * React SPA SEO & GitHub Pages Deployment Automation Script
 * File: scripts/build-seo.js
 * 
 * This script runs automatically before/after your production build step.
 * It does two crucial things for your specific React setup on GitHub Pages:
 * 1. Generates a valid sitemap.xml excluding anchor links but including dynamic blog posts.
 * 2. Generates a custom 404.html fallback to keep react-router-dom from breaking on page refreshes.
 */

import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream, writeFileSync, existsSync, mkdirSync, readdirSync, statSync } from 'fs';
import path from 'path';
import { Readable } from 'stream';

// --- CONFIGURATION ---
const HOSTNAME = 'https://arifikri.com'; // Change to your custom domain or GitHub Pages URL

// 1. Define your static routes
// Notice we ONLY include '/' for your landing page. Do not include '/#about', '/#services', etc.
const staticRoutes = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/blog', changefreq: 'daily', priority: 0.8 }
];

/**
 * Helper function to scan local TinaCMS file collections recursively.
 * Since TinaCMS is entirely Git-backed, your Markdown/MDX/JSON files represent your actual database records.
 */
function getFilesRecursively(dir, relativeTo) {
  let results = [];
  if (!existsSync(dir)) return results;
  
  const list = readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = statSync(fullPath);
    
    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesRecursively(fullPath, relativeTo));
    } else {
      // Match markdown, mdx, or json files that TinaCMS saves
      if (file.endsWith('.md') || file.endsWith('.mdx') || file.endsWith('.json')) {
        const relativePath = path.relative(relativeTo, fullPath);
        // Normalize paths to forward slashes for URLs and remove extension
        const slug = relativePath.replace(/\\/g, '/').replace(/\.(md|mdx|json)$/, '');
        results.push(slug);
      }
    }
  });
  return results;
}

// 2. Fetch blog content directly from your local TinaCMS file collection directory
async function fetchBlogContentRoutes() {
  // Adjust this string to point directly to your TinaCMS collection folder 
  // e.g., './content/posts' or './content/blog'
  const contentDir = './blog'; 
  const routes = [];

  if (!existsSync(contentDir)) {
    console.warn(`⚠️ TinaCMS content folder not found at "${contentDir}". Be sure to verify your path configuration.`);
    return routes;
  }

  // Scan files recursively to catch subfolders/subsections automatically
  const slugs = getFilesRecursively(contentDir, contentDir);
  
  slugs.forEach(slug => {
    // If slug is nested (e.g., 'web-development/react-seo-guide'), extract the subsection category
    const segments = slug.split('/');
    if (segments.length > 1) {
      const category = segments[0];
      const categoryUrl = `/blog/${category}`;
      // Prevent inserting duplicate category listing paths
      if (!routes.some(r => r.url === categoryUrl)) {
        routes.push({ url: categoryUrl, changefreq: 'weekly', priority: 0.6 });
      }
    }

    // Map the deep post link matching your react-router-dom dynamic structure
    routes.push({ url: `/blog/${slug}`, changefreq: 'monthly', priority: 0.7 });
  });

  return routes;
}

// --- MAIN RUNNER FUNCTION ---
async function run() {
  console.log('🚀 Starting SEO and GitHub Pages deployment configuration...');

  // Ensure public folder exists just in case
  if (!existsSync('./public')) {
    mkdirSync('./public');
  }

  // Task 1: Generate the Sitemap
  try {
    const dynamicBlogRoutes = await fetchBlogContentRoutes();
    const allRoutes = [...staticRoutes, ...dynamicBlogRoutes];

    const stream = new SitemapStream({ hostname: HOSTNAME });
    const writeStream = createWriteStream('./public/sitemap.xml');
    
    stream.pipe(writeStream);
    Readable.from(allRoutes).pipe(stream);
    
    await streamToPromise(stream);
    console.log('✅ sitemap.xml successfully generated inside the /public folder.');
  } catch (error) {
    console.error('❌ Error creating sitemap.xml:', error);
  }

  // Task 2: Create the GitHub Pages 404 Routing Bypass
  try {
    const fallbackHtmlContent = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Redirecting...</title>
    <script type="text/javascript">
      // Single Page Apps for GitHub Pages Rerouting Hack
      var pathSegmentsToKeep = 0;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?p=' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&q=' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  </head>
  <body>
    Parsing client-side navigation routing...
  </body>
</html>`;

    writeFileSync('./public/404.html', fallbackHtmlContent);
    console.log('✅ 404.html router fix successfully written inside the /public folder.');

    console.log('\n💡 INSTRUCTION: Paste the following code snippet right inside the <head> tag of your main public/index.html file so it can catch and unpack this redirect:\n');
    console.log(`
    <!-- Place this right at the top of your public/index.html <head> -->
    <script type="text/javascript">
      (function(l) {
        if (l.search[1] === 'p') {
          var decoded = l.search.slice(1).split('&').reduce(function(q, v) {
            var a = v.split('=');
            q[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&');
            return q;
          }, {});
          if (decoded.p !== undefined) {
            window.history.replaceState(null, null,
              l.pathname.slice(0, -1) + (decoded.p || '') +
              (decoded.q ? ('?' + decoded.q) : '') +
              l.hash
            );
          }
        }
      }(window.location));
    </script>
    `);

  } catch (error) {
    console.error('❌ Failed to configure GitHub Pages redirect script:', error);
  }
}

run();
