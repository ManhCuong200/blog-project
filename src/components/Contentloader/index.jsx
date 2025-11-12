import React from "react";
import ContentLoader from "react-content-loader";

const BlogSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={300}
    height={220}
    viewBox="0 0 300 220"
    backgroundColor="#2a2a2a"
    foregroundColor="#f5f5f5"
    {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="300" height="170"/>
  </ContentLoader>
);

export default BlogSkeleton;
