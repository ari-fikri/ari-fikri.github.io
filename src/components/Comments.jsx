import Giscus from '@giscus/react';

export default function Comments() {
  return (
    <div style={{ marginTop: '3rem' }}>
      <Giscus
        id="comments"
        repo="ari-fikri/cms-posts"
        repoId="R_kgDOTmAR5A"
        category="General"
        categoryId="DIC_kwDOTmAR5M4DCXDu"
        mapping="pathname" // Maps comments to the specific blog post URL
      />
    </div>
  );
}
