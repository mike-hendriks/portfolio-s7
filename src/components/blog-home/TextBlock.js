import React from 'react';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../../prismic-configuration';
import { customLink } from '../../utils/prismicHelpers';

/**
 * TextBlock component
 */
const TextBlock = ({ title, content }) => (
  <div className="textSection container">
    {title ? <h2>{RichText.asText(title)}</h2> : null}
    <RichText
      render={content}
      linkResolver={linkResolver}
      serializeHyperlink={customLink}
    />
  </div>
);

export default TextBlock;
