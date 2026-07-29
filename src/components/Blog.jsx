import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BgImg from '../assets/pp_bg.jpg';
import AfLogo from '../assets/icons/af.svg';

function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const isProd = import.meta.env.PROD;
        const tinaUrl = import.meta.env.VITE_TINA_URL || 'http://localhost:4001/graphql';
        const tinaToken = import.meta.env.VITE_TINA_TOKEN;

        if (isProd && !tinaToken) {
          console.error('Tina CMS Error: VITE_TINA_TOKEN is not defined. Please check your GitHub Secrets and deployment configuration.');
        }

        // In production, fetch directly from Tina Cloud URL
        // In development, try proxy first, then fallback to local URL
        const fetchUrl = isProd ? tinaUrl : '/api';
        
        const response = await fetch(fetchUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(tinaToken ? { 'X-API-KEY': tinaToken } : {}),
          },
          body: JSON.stringify({
            query: `
              query {
                postConnection {
                  edges {
                    node {
                      id
                      title
                      heroImage
                      excerpt
                      _sys {
                        filename
                      }
                    }
                  }
                }
              }
            `,
          }),
        });

        if (response.ok) {
          const result = await response.json();
          if (result.data?.postConnection?.edges) {
            setPosts(result.data.postConnection.edges);
            setLoading(false);
            return;
          }
        }
        
        // Fallback for development if proxy fails
        if (!isProd) {
          const fallbackResponse = await fetch(tinaUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              ...(tinaToken ? { 'X-API-KEY': tinaToken } : {}),
            },
            body: JSON.stringify({
              query: `
                query {
                  postConnection {
                    edges {
                      node {
                        id
                        title
                        heroImage
                        excerpt
                        _sys {
                          filename
                        }
                      }
                    }
                  }
                }
              `,
            }),
          });

          if (fallbackResponse.ok) {
            const fallbackResult = await fallbackResponse.json();
            if (fallbackResult.data?.postConnection?.edges) {
              setPosts(fallbackResult.data.postConnection.edges);
            }
          }
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="loading">Loading posts...</div>;
  }

  return (
    <div className="blog-page">
      <section 
        className="hero blog-hero" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.8)), url(${BgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'right',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="hero-container centered">
          <h1 className="hero-title">Blog</h1>
        </div>
      </section>

      <div className="blog-container posts-grid">
        {posts.map((post) => (
            <div key={post.node.id} className="post-card">
              <div className="post-card-image">
                {post.node.heroImage ? (
                  <img src={post.node.heroImage} alt={post.node.title} />
                ) : (
                  <div className="post-card-placeholder">
                    <AfLogo className="placeholder-logo" />
                  </div>
                )}
              </div>
              <div className="post-card-content">
                <h2 className="post-title">{post.node.title}</h2>
                <p className="post-excerpt">
                  {post.node.excerpt || 'Explore insights, tutorials, and stories about digital transformation and leadership.'}
                </p>
              </div>
              <Link to={`/blog/${post.node._sys.filename}`} className="read-more-btn">
                Read More →
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Blog;
