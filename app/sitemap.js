import { client } from '../tina/__generated__/client';

// 1. Force Next.js to compile this sitemap statically during build time
export const dynamic = 'force-static';

const HOSTNAME = 'https://arifikri.com';

export default async function sitemap() {
  const staticRoutes = [
    { url: `${HOSTNAME}/`, lastModified: new Date() },
    { url: `${HOSTNAME}/blog`, lastModified: new Date() },
  ];

  try {
    const tinaData = await client.queries.postConnection();
    const posts = tinaData.data?.postConnection?.edges || [];

    const dynamicRoutes = posts.map((post) => {
      const postDate = post.node.date ? new Date(post.node.date) : new Date();
      
      return {
        url: `${HOSTNAME}/blog/${post.node._sys.filename}`,
        lastModified: postDate,
      };
    });

    return [...staticRoutes, ...dynamicRoutes];
  } catch (error) {
    console.error("Failed to fetch TinaCMS posts for sitemap:", error);
    return staticRoutes;
  }
}
