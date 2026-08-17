import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Link from 'next/link';

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'content/posts');
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ''),
  }));
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'content/posts', `${slug}.md`);
  
  if (!fs.existsSync(filePath)) {
    return <div>Post not found</div>;
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  const processedContent = await remark()
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();

  return (
    <article className="post-detail-container">
      <Link href="/blog" className="back-link">
        ← Back to Blog
      </Link>
      
      {data.heroImage && (
        <div className="post-hero-image-container">
          <img 
            src={data.heroImage} 
            alt={data.title} 
            className="post-hero-image"
          />
        </div>
      )}

      <h1 className="post-title post-title-detail">{data.title}</h1>
      
      <div 
        className="post-content"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </article>
  );
}
