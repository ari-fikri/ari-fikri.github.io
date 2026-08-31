import Link from 'next/link';
import Image from 'next/image';
import client from '../../tina/__generated__/client';
import BgImg from '../../public/assets/pp_bg.jpg'
import AfLogo from '../../public/assets/icons/af.svg';

export default async function BlogPage() {
  try {
    const isProd = process.env.NODE_ENV === "production";

    // 1. Fetch all posts from the separate content repo using the Connection query
    //const response = await client.queries.postConnection();
    // Fetching happens directly inside the server component
    const response = await client.queries.postConnection({
      filter: { draft: { eq: false } }
    });
    
    // 2. Map through the edges to extract the node data and system filename as the slug
    const posts = response.data.postConnection.edges?.map((edge) => {
      const node = edge.node;
      return {
        slug: node._sys.filename, // Tina automatically tracks the filename without extension
        title: node.title,
        heroImage: node.heroImage,
        excerpt: node.excerpt,
      };
    }) || [];

    return (
      <div className="blog-page">
        <section className="hero blog-hero"
          style={{ 
            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.8)), url(${BgImg.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'right',
            backgroundAttachment: 'fixed'
          }}
        >
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
                    <img 
                      src={post.heroImage.startsWith('/') ? `/cms-posts${post.heroImage}` : post.heroImage} 
                      alt={post.title} 
                    />
                  ) : (
                    <div className="post-card-placeholder">
                      <div className="placeholder-logo">
                        <img
                          src="/assets/icons/Af.svg"
                          alt="AF Logo"
                          style={
                            { 
                              display: 'flex',
                              alignItems: 'center',    /* Centers vertically */
                              justifyContent: 'center', /* Centers horizontally */
                              height: '100%',           /* Ensure container has height/width defined */
                              width: '100%',
                              objectFit: 'contain' }
                          }
                        />
                      </div>
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
  } catch (error) {
    // Fallback if TinaCloud fails to communicate or environment variables are missing
    console.error("Error fetching posts from TinaCloud:", error);
    return <div>Error loading posts</div>;
  }
}
