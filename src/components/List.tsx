import React, { Fragment } from 'react';
import { BookItem, BookInfo } from 'store/modules/bookinfo';

interface Props {
  books: BookItem[] | null;
}

const List = ({ books }: Props) => {
  if (!books) {
    return null;
  }

  const columnCount = 3;
  const bookList = (books.length <= 20
    ? books
    : books.slice(0, books.length - (books.length % columnCount))
  ).map(book => (
    <div>
      <div>{book.title}</div>
      <div>{book.publisher}</div>
      <img src={book.thumbnail} />
    </div>
  ));
  return (
    <Fragment>
      <div className="PostCardList">
        {bookList && bookList.length === 0 && (
          <div className="empty-list">아직 작성한 포스트가 없습니다.</div>
        )}
        {bookList}
      </div>
    </Fragment>
  );
  /*
  if (!books) {
    return null;
  }

  const columnCount = 3;
  const bookList = (books.length <= 20
    ? books
    : books.slice(0, books.length - (books.length % columnCount))
  ).map(book => <div>{book.title}</div>);
  return (
    <Fragment>
      <div className="PostCardList">
        {bookList && bookList.length === 0 && (
          <div className="empty-list">아직 작성한 포스트가 없습니다.</div>
        )}
        {bookList}
      </div>
    </Fragment>
  );*/
};

export default List;
