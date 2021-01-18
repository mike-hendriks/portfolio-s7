import React from "react";
import PostItem from "./PostItem";

/**
 * Post list component
 */
const PostList = ({ posts }) => {
  return (
    <>
      <h2>Additive Industries</h2>
      <div className="blog-post-container">
        {posts
          .filter((post) => post.data.subject === "Additive industries")
          .map((post, i) => (
            <PostItem post={post} key={post.id} />
          ))}
      </div>
      <br />
      <h2>Media Theory</h2>
      <div className="blog-post-container">
        {posts
          .filter((post) => post.data.subject === "Media Theory")
          .map((post, i) => (
            <PostItem post={post} key={post.id} />
          ))}
      </div>
      <br />
      <h2>Story creation</h2>
      <div className="blog-post-container">
        {posts
          .filter((post) => post.data.subject === "Story creation")
          .map((post, i) => (
            <PostItem post={post} key={post.id} />
          ))}
      </div>
      <br />
      <h2>Critical Design</h2>
      <div className="blog-post-container">
        {posts
          .filter((post) => post.data.subject === "Critical design")
          .map((post, i) => (
            <PostItem post={post} key={post.id} />
          ))}
      </div>
      <br />
      <h2>Human Centered Design</h2>
      <div className="blog-post-container">
        {posts
          .filter((post) => post.data.subject === "Human Centered Design")
          .map((post, i) => (
            <PostItem post={post} key={post.id} />
          ))}
      </div>
      <br />
      <h2>Other</h2>
      <div className="blog-post-container">
        {posts
          .filter((post) => post.data.subject === "Others")
          .map((post, i) => (
            <PostItem post={post} key={post.id} />
          ))}
      </div>
      <br />
    </>
  );
};

export default PostList;
