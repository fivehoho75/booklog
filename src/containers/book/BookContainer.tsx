import React, { Component } from 'react';
import { BookActions } from 'store/actionCreators';
import { connect } from 'react-redux';
import { StoreState } from 'store';
import { BookItem, MetaItem } from 'store/modules/bookinfo';
import SearchBar from 'components/common/SearchBar';
import BookCardList from 'components/common/BookCardList';
import throttle from 'lodash/throttle';
import { getScrollBottom, preventStickBottom } from 'lib/common';

interface Props {
  books: BookItem[] | null;
  meta: MetaItem;
  prefetched: BookItem[] | null;
  prefetching: boolean;
  loading: boolean;
  page: number;
}

interface State {
  keyword: string;
}

class BookContainer extends Component<Props, State> {
  prevPage = 0;

  search = async (keyword: string) => {
    // if (this.props.books && this.props.books.length > 0) {
    //   return;
    // }
    this.setState({
      keyword,
    });

    try {
      BookActions.setBookInfoPage(1);
      await BookActions.getBookInfos('title', keyword, 1);
      console.log('End');
    } catch (e) {
      console.log(e);
    }
  };

  prefetch = async () => {
    const { books, meta, prefetching, loading, prefetched, page } = this.props;
    const { keyword } = this.state;

    if (!keyword) {
      return;
    }

    if (!books || books.length === 0 || prefetching || loading) {
      return;
    }

    if (prefetched) {
      BookActions.revealPrefetched();
      await Promise.resolve(); // next tick
    }

    if (page === this.prevPage) return;
    this.prevPage = page;

    if (meta.is_end) return;

    try {
      BookActions.setBookInfoPage(page + 1);
      await BookActions.prefetchBookInfos(
        'title',
        this.state.keyword,
        page + 1
      );
      console.log('End2');
    } catch (e) {
      console.log(e);
    }

    preventStickBottom();
    this.onScroll();
  };

  onScroll = throttle(() => {
    const scrollBottom = getScrollBottom();
    if (scrollBottom > 1000) return;
    this.prefetch();
  }, 250);

  listenScroll = () => {
    window.addEventListener('scroll', this.onScroll);
  };

  unlistenScroll = () => {
    window.removeEventListener('scroll', this.onScroll);
  };

  componentDidMount() {
    this.listenScroll();
  }
  componentWillUnmount() {
    this.unlistenScroll();
  }

  onSearch = (keyword: string) => {
    console.log('keyword:', keyword);
    this.search(keyword);
  };

  render() {
    const { books, page } = this.props;

    return (
      <div>
        <SearchBar onSearch={this.onSearch} />
        <BookCardList books={books} page={page} />
      </div>
    );
  }
}

export default connect(
  ({ bookinfo, pender }: StoreState) => ({
    books: bookinfo.info.books,
    meta: bookinfo.info.meta,
    prefetched: bookinfo.info.prefetched,
    prefetching: pender.pending['book/PREFETCH_BOOKINFOS'],
    loading: pender.pending['book/GET_BOOKINFOS'],
    page: bookinfo.info.page,
  }),
  () => ({})
)(BookContainer);
