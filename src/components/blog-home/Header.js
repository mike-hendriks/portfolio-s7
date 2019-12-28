import React from 'react';
import { RichText } from 'prismic-reactjs';

/**
 * Homepage header component
 */
const Header = ({ headline, description }) => (
  <div className="home">
    <h1 className="blog-title">{RichText.asText(headline)}</h1>
    <p className="blog-description">{RichText.asText(description)}</p>
  </div>
);

export default Header;
