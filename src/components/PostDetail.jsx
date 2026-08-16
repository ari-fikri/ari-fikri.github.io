import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const GET_POST = gql`
  query GetPost($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      content
    }
  }
`;

function PostDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const { data, loading, error } = useQuery(GET_POST, {
    variables: { slug },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>{data.post.title}</h1>
      <div>{data.post.content}</div>
    </div>
  );
}

export default PostDetail;
