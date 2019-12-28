import React from 'react';
import { Link } from 'react-router-dom';
import { RichText } from 'prismic-reactjs';

import PostDate from './PostDate';
import FirstParagraph from './FirstParagraph';
import { linkResolver } from '../../../prismic-configuration';

/**
 * Post list item component
 */
const PostItem = ({ post }) => {
  const title =
    RichText.asText(post.data.title) ?
    RichText.asText(post.data.title) :
    'Untitled';
  
  return (
    <div className="blog-post">
      <h2>Alle opdrachten</h2>
      <br />
      <div className="blog-post-container">
        <Link to={linkResolver(post)} className="underline">
          <span>{title}</span>
        </Link>
      </div>

      {/* <PostDate date={post.data.date} />
      
      <FirstParagraph
        sliceZone={post.data.body}
        textLimit={300}
      /> */}
    </div>
  );
};

export default PostItem;
