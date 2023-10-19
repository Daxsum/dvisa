import * as React from 'react';
import { P } from './P';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 Page Not Found</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <h1>
        4
        <span role="img" aria-label="Crying Face">
          😢
        </span>
        4
      </h1>
      <P>Page not found.</P>
      <Link to={process.env.PUBLIC_URL + '/'}>Return to Home Page</Link>
    </>
  );
}
