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
      <Link to={linkResolver(post)} className="underline">
        - {title}
      </Link>
    </div>
  );
};

export default PostItem;
