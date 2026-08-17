import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import client from '../../../tina/__generated__/client';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'content/posts');
  
  if (!fs.existsSync(postsDirectory)) {
    console.warn(`Warning: Posts directory not found at ${postsDirectory}`);
    return [];
  }

  const filenames = fs.readdirSync(postsDirectory);

  return filenames
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => ({
      slug: filename.replace(/\.md$/, ''),
    }));
}

export default async function PostPage({ params }) {
  const { slug } = await params;

  try {
    // 1. Fetch content from the separate repo via TinaCloud API
    const response = await client.queries.post({
      relativePath: `${slug}.md`,
    });

    const post = response.data.post;

    return (
      <article className="post-detail-container">
        <Link href="/blog" className="back-link">
          ← Back to Blog
        </Link>
        
        {/* 2. Changed from data.heroImage to post.heroImage */}
        {post.heroImage && (
          <div className="post-hero-image-container">
            <img 
              src={post.heroImage.startsWith('/') ? `/cms-posts${post.heroImage}` : post.heroImage} 
              alt={post.title} 
              className="post-hero-image"
            />
          </div>
        )}

        {/* 3. Changed from data.title to post.title */}
        <h1 className="post-title post-title-detail">{post.title}</h1>
        
        {/* 4. Replaced dangerouslySetInnerHTML with TinaMarkdown */}
        <div className="post-content">
          <TinaMarkdown content={post.body} />
        </div>
      </article>
    );
  } catch (error) {
    // Fallback if the file doesn't exist in the separate content repo
    console.error("Error fetching post from TinaCloud:", error);
    return <div>Post not found</div>;
  }
}
