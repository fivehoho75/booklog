import configure from './configure';
import { BookInfo } from './modules/bookinfo';
import { Base } from './modules/base';

const store = configure(
  typeof window === 'undefined' ? undefined : (window as any).__REDUX_STATE__
);

export interface StoreState {
  base: Base;
  bookinfo: BookInfo;
  pender: {
    pending: any;
    success: any;
    failure: any;
  };
}

export default store;
