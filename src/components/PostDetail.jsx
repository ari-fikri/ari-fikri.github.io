import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import client from '../../tina/__generated__/client';

function PostDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        console.log('Fetching post for slug:', slug);
        
        // Try to fetch via proxy first
        const response = await fetch('/api', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
              query getPost($relativePath: String!) {
                post(relativePath: $relativePath) {
                  title
                  body
                }
              }
            `,
            variables: {
              relativePath: `${slug}.md`,
            },
          }),
        });

        if (response.ok) {
          const result = await response.json();
          console.log('Post data fetched via proxy:', result);
          if (result.data?.post) {
            setPost(result.data.post);
            setLoading(false);
            return;
          }
        }

        // Fallback to absolute URL
        console.log('Proxy failed, trying absolute fallback...');
        const tinaUrl = import.meta.env.VITE_TINA_URL || 'http://localhost:4001/graphql';
        const fallbackResponse = await fetch(tinaUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
              query getPost($relativePath: String!) {
                post(relativePath: $relativePath) {
                  title
                  body
                }
              }
            `,
            variables: {
              relativePath: `${slug}.md`,
            },
          }),
        });

        if (fallbackResponse.ok) {
          const fallbackResult = await fallbackResponse.json();
          console.log('Post data fetched via absolute fallback:', fallbackResult);

          if (fallbackResult.data?.post) {
            setPost(fallbackResult.data.post);
          }
        } else {
          console.error('Fallback request failed:', fallbackResponse.status);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching post:', error);
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return <div className="loading">Loading post...</div>;
  }

  if (!post) {
    return (
      <div className="error">
        <h1>Post not found</h1>
        <p>Could not find a post with slug: {slug}</p>
        <Link to="/blog" className="back-link">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="post-detail-container">
      <Link to="/blog" className="back-link">← Back to Blog</Link>
      <h1 className="post-title">{post.title}</h1>
      <div className="post-content">
        {post.body ? <TinaMarkdown content={post.body} /> : <p>No content available.</p>}
      </div>
    </div>
  );
}

export default PostDetail;
