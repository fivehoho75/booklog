import React from 'react';
import BookTemplate from 'components/templates/BookTemplate';
import BookContainer from 'containers/book/BookContainer';

const Book: React.FC = () => {
  return (
    <BookTemplate>
      <BookContainer />
    </BookTemplate>
  );
};

export default Book;
