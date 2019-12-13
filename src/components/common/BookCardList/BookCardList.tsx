import React, { Fragment } from 'react';
import './BookCardList.scss';
import { BookItem, MetaItem } from 'store/modules/bookinfo';
import BookCard from '../BookCard/BookCard';

interface Props {
  books: BookItem[] | null;
  page: number;
}

const BookCardList = ({ books, page }: Props) => {
  if (!books) {
    return null;
  }

  const bookList = books.map(book => (
    <BookCard key={book.isbn + ' ' + page} book={book} />
  ));

  return (
    <Fragment>
      <div className="BookCardList">
        {bookList && bookList.length === 0 && (
          <div className="empty">검색된 책이 없습니다.</div>
        )}
        {bookList}
      </div>
    </Fragment>
  );
};

export default BookCardList;
