import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const isProd = process.env.NODE_ENV === 'production';
        const tinaUrl = process.env.NEXT_PUBLIC_TINA_URL || 'http://localhost:4001/graphql';
        const tinaToken = process.env.NEXT_PUBLIC_TINA_TOKEN;

        if (isProd && !tinaToken) {
          console.error('Tina CMS Error: NEXT_PUBLIC_TINA_TOKEN is not defined. Please check your GitHub S');
        }

        // Your existing code here
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [router]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}

export default Blog;
