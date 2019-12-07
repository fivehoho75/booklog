import React from 'react';
import BookTemplate from 'components/templates/BookTemplate';
import { Helmet } from 'react-helmet';

const listPage: React.FC = () => {
  return (
    <BookTemplate>
      <Helmet>
        <title>나의 Book List | booklog</title>
      </Helmet>
      BookLog Main
    </BookTemplate>
  );
};

export default listPage;
