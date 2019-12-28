import React from 'react';
// import Caption from './Caption';

/**
 * Default image component
 */
const GoogleDoc = ({ slice }) => {

  // console.log(slice);
  const documentUrl = slice.primary.document.url;
  const documentTitle = slice.primary.document.title;
  // const imageAlt = slice.primary.image.alt;
  // const caption = slice.primary.caption;

  return (
    <div className="post-part single docEmbed">
      <div className="container">
        <iframe src={documentUrl} width="100%" height="900px" title={documentTitle}></iframe>
      </div>
    </div>
  );
};

export default GoogleDoc;
