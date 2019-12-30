import React from 'react';
import { RichText } from 'prismic-reactjs';

const GoogleDoc = ({ slice }) => {
  return (
    <div className="post-part single docEmbed">
      <div className="container">
        <iframe src={RichText.asText(slice.primary.document)} width="100%" height="900px"></iframe>
      </div>
    </div>
  );
};

export default GoogleDoc;
