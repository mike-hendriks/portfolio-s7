import React from 'react';
import { RichText } from 'prismic-reactjs';

const GoogleDoc = ({ slice }) => {
  const docSrc = RichText.asText(slice.primary.document);
  return (
    <div className="post-part single docEmbed">
      <div className="container">
        <a href={docSrc} target="_blank">Bekijk document</a>
        <iframe src={docSrc} width="100%" height="900px"></iframe>
      </div>
    </div>
  );
};

export default GoogleDoc;
