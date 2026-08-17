import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';

export default async function BlogPage() {
  const postsDirectory = path.join(process.cwd(), 'content/posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);
    const slug = filename.replace(/\.md$/, '');

    return {
      ...data,
      slug,
    };
  });

  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="hero-container centered">
          <h1 className="hero-title">Blog & Insights</h1>
        </div>
      </section>
      
      <div className="blog-container">
        <div className="posts-grid">
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="post-card">
              <div className="post-card-image">
                {post.heroImage ? (
                  <img src={post.heroImage} alt={post.title} />
                ) : (
                  <div className="post-card-placeholder">
                    <div className="placeholder-logo">AF</div>
                  </div>
                )}
              </div>
              <div className="post-card-content">
                <h3 className="post-title">{post.title}</h3>
                <p className="post-excerpt">{post.excerpt}</p>
              </div>
              <div className="read-more-btn">
                Read More →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
