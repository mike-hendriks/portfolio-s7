import React from "react";
// import { RichText } from "prismic-reactjs";

const Embed = ({ slice }) => {
  // const docSrc = RichText.asText(slice.primary.document);
  function Iframe(props) {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: slice.primary.embed_code[0].text
            ? slice.primary.embed_code[0].text
            : "",
        }}
      />
    );
  }
  return (
    <div className="post-part single docEmbed">
      <div className="container">{Iframe()}</div>
    </div>
  );
};

export default Embed;
