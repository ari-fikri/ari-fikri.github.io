import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

function PostDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
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
            ...(tinaToken ? { 'Authorization': `Bearer ${tinaToken}` } : {}),
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
          if (result.data?.post) {
            setPost(result.data.post);
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
              ...(tinaToken ? { 'Authorization': `Bearer ${tinaToken}` } : {}),
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

            if (fallbackResult.data?.post) {
              setPost(fallbackResult.data.post);
            }
          }
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
      <h1 className="post-title-detail">{post.title}</h1>
      <div className="post-content">
        {post.body ? <TinaMarkdown content={post.body} /> : <p>No content available.</p>}
      </div>
    </div>
  );
}

export default PostDetail;
