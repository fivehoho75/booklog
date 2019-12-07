import { createAction, handleActions } from 'redux-actions';
import { applyPenders } from 'redux-pender';
import * as api from '../../lib/api';
import produce from 'immer';

const GET_BOOKINFO = 'book/GET_BOOKINFO';

export const actionCreators = {
  getBookInfo: createAction(GET_BOOKINFO, api.getBookInfo),
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
export interface BookInfoSet {
  books: BookItem[] | null;
}

export interface BookInfo {
  info: BookInfoSet;
}

const initialStateSet: BookInfoSet = {
  books: null,
};

const initialState: BookInfo = {
  info: initialStateSet,
};

interface BooksResponseAction {
  type: string;
  payload: {
    data: {
      documents: BookItem[];
    };
  };
  meta: any;
}

const reducer = handleActions({}, initialState);

export default applyPenders(reducer, [
  {
    type: GET_BOOKINFO,
    onSuccess: (state, action: BooksResponseAction) => {
      return produce(state, draft => {
        draft.info = {
          books: action.payload.data.documents,
        };
        console.log('get:', JSON.stringify(draft));
      });
    },
  },
]);
