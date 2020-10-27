import React from "react";
import PostItem from "./PostItem";

/**
 * Post list component
 */
const PostList = ({ posts }) => {
  // const postLength = posts.length;
  return (
    <div className="blog-post-container">
      {posts.map((post, i) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;
