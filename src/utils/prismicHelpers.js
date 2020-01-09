import React from 'react';
import { Link } from 'react-router-dom';
import Prismic from 'prismic-javascript'
import { apiEndpoint, accessToken, linkResolver } from '../prismic-configuration';

// Helper function to convert Prismic Rich Text links to React Link components
export const customLink = (type, element, content, children, index) => (
  <a href={element.data.url} target={element.data.target} key={index}>
    {content}
  </a>
);

// Client method to query documents from the Prismic repo
export const client = Prismic.client(apiEndpoint, { accessToken })
