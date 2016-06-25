import { createStore } from 'redux';
import Reducer from '../reducers/Reducer';

export default function listStore(preloadState) {
  const store = createStore(Reducer, preloadState);
  return store;
}