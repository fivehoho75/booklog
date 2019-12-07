import React, { Component } from 'react';
import { BookActions } from 'store/actionCreators';
import { connect } from 'react-redux';
import { StoreState } from 'store';
import { BookItem } from 'store/modules/bookinfo';
import List from 'components/List';

interface Props {
  books: BookItem[] | null;
}

class BookContainer extends Component<Props> {
  initialize = async () => {
    if (this.props.books && this.props.books.length > 0) {
      return;
    }

    try {
      await BookActions.getBookInfo('title', '은하영웅전설');
      console.log('End');
    } catch (e) {
      console.log(e);
    }
  };

  componentDidMount() {
    this.initialize();
  }

  render() {
    return (
      <div>
        <List books={this.props.books} />
      </div>
    );
  }
}

export default connect(
  ({ bookinfo }: StoreState) => ({
    books: bookinfo.info.books,
  }),
  () => ({})
)(BookContainer);
