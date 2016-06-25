import { createStore } from 'redux';
import ListStore from '../stores/ListStore';

const Reducer = function(state, action) {
  switch(action.type) {
    case 'ADD_NEW_ITEM':
      ListStore.addNewItemHandler(action.text);
      ListStore.emitChange();
      break;
    default:
  }
}

export default Reducer;
