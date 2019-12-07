import { bindActionCreators } from 'redux';
import store from '../store';
import { actionCreators as baseActions } from './modules/base';
import { actionCreators as bookActions } from './modules/bookinfo';

const { dispatch } = store;

export const BaseActions = bindActionCreators(baseActions, dispatch);
export const BookActions = bindActionCreators(bookActions, dispatch);
