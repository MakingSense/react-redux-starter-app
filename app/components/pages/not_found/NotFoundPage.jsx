import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <section>
      <h2>Page not found</h2>
      <Link to="/">Go back to home</Link>
    </section>
  );
};

export default NotFoundPage;
