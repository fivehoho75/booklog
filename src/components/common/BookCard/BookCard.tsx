import React from 'react';
import './BookCard.scss';
import { BookItem } from 'store/modules/bookinfo';
import defaultThumbnail from 'static/images/noImageBook.png';
import { Link } from 'react-router-dom';

interface Props {
  book: BookItem;
}

const BookCard = (props: Props) => {
  const { isbn, thumbnail, title, publisher, datetime, authors } = props.book;

  return (
    <div className="BookCard" key={isbn}>
      <Link to="" className="thumbnail-wrapper">
        <img src={thumbnail ? thumbnail : defaultThumbnail} />
      </Link>
      <div className="contents-wrapper">
        <div className="title">{title}</div>
        <div className="publisher">{publisher}</div>
        <div className="publish-date">
          {datetime ? datetime.substring(0, 4) : ''}
        </div>
        <div className="authors">{authors.toString()}</div>
      </div>
    </div>
  );
};

export default BookCard;
