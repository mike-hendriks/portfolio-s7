import React from 'react';
import { Helmet } from 'react-helmet';

/**
 * Default layout wrapper component
 */
const DefaultLayout = ({ wrapperClass, title, children }) => (
  <div className={wrapperClass}>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    {children}
  </div>
);

export default DefaultLayout;
