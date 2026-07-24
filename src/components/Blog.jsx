import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import client from '../../tina/__generated__/client';

function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        console.log('Fetching posts via proxy...');
        // Try to fetch via proxy first
        const response = await fetch('/api', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
              query {
                postConnection {
                  edges {
                    node {
                      id
                      title
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

        console.log('Response status:', response.status);

        if (response.ok) {
          const result = await response.json();
          console.log('Posts fetched via proxy:', result);
          if (result.data?.postConnection?.edges) {
            setPosts(result.data.postConnection.edges);
            setLoading(false);
            return;
          }
        }
        
        // Fallback to absolute URL if proxy fails or returns empty
        console.log('Proxy failed or returned no data, trying absolute fallback...');
        const tinaUrl = import.meta.env.VITE_TINA_URL || 'http://localhost:4001/graphql';
        const fallbackResponse = await fetch(tinaUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
              query {
                postConnection {
                  edges {
                    node {
                      id
                      title
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
          console.log('Posts fetched via absolute fallback:', fallbackResult);
          if (fallbackResult.data?.postConnection?.edges) {
            setPosts(fallbackResult.data.postConnection.edges);
          }
        } else {
          console.error('Fallback request failed:', fallbackResponse.status);
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
    <div className="blog-container">
      <h1 className="section-title">Blog</h1>
      <div className="posts-grid">
        {posts.map((post) => (
          <div key={post.node.id} className="post-card">
            <h2 className="post-title">{post.node.title}</h2>
            <Link to={`/blog/${post.node._sys.filename}`} className="read-more-btn">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
