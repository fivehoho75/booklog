import { Action, createAction, handleActions } from 'redux-actions';
import { applyPenders } from 'redux-pender';
import * as api from '../../lib/api';
import produce from 'immer';

const SET_BOOKINFO_PAGE = 'book/SET_BOOKINFO_PAGE';
const GET_BOOKINFOS = 'book/GET_BOOKINFOS';
const PREFETCH_BOOKINFOS = 'book/PREFETCH_BOOKINFOS';
const REVEAL_PREFETCHED = 'book/REVEAL_PREFETCHED';

export const actionCreators = {
  setBookInfoPage: createAction(SET_BOOKINFO_PAGE, (page: number) => page),
  getBookInfos: createAction(GET_BOOKINFOS, api.getBookInfos),
  prefetchBookInfos: createAction(PREFETCH_BOOKINFOS, api.getBookInfos),
  revealPrefetched: createAction(REVEAL_PREFETCHED),
};

export interface BookItem {
  authors: [];
  contents: string;
  datetime: string;
  isbn: string;
  price: number;
  publisher: string;
  sale_price: number;
  status: string;
  thumbnail: string;
  title: string;
  translators: [];
  url: string;
}
export interface MetaItem {
  total_count: number;
  pageable_count: number;
  is_end: boolean;
}

export interface BookInfoSet {
  books: BookItem[] | null;
  meta: MetaItem;
  prefetched: BookItem[] | null;
  page: number;
}

export interface BookInfo {
  info: BookInfoSet;
}

const initialStateSet: BookInfoSet = {
  books: null,
  meta: { total_count: 0, pageable_count: 0, is_end: true },
  prefetched: null,
  page: 1,
};

const initialState: BookInfo = {
  info: initialStateSet,
};

interface BooksResponseAction {
  type: string;
  payload: {
    data: {
      documents: BookItem[];
      meta: MetaItem;
    };
  };
}

interface BooksRevealAction {
  type: string;
  payload: {
    data: {
      documents: BookItem[];
    };
  };
}

const reducer = handleActions(
  {
    [SET_BOOKINFO_PAGE]: (state, action: Action<any>) => {
      return produce(state, draft => {
        draft.info.page = action.payload;
      });
    },
    [REVEAL_PREFETCHED]: (state, action: BooksResponseAction) => {
      return produce(state, draft => {
        const { books, prefetched } = draft.info;
        if (books && prefetched) {
          books.push(...prefetched);
          draft.info.prefetched = null;
        }
      });
    },
  },
  initialState
);

export default applyPenders(reducer, [
  {
    type: GET_BOOKINFOS,
    onSuccess: (state, action: BooksResponseAction) => {
      return produce(state, draft => {
        draft.info.books = action.payload.data.documents;
        draft.info.meta = action.payload.data.meta;
        draft.info.page = state.info.page;
      });
    },
  },
  {
    type: PREFETCH_BOOKINFOS,
    onSuccess: (state, action: BooksResponseAction) => {
      return produce(state, draft => {
        draft.info.prefetched = action.payload.data.documents;
        draft.info.meta = action.payload.data.meta;
        draft.info.page = state.info.page;
      });
    },
  },
]);
