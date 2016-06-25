import { creteStore } from 'redux';
import listStore from '../stores/Store';

class ButtonActions {

    addNewItem = function(text) {
        return listStore({}).dispatch({
            type: 'ADD_NEW_ITEM',
            text: text
        });
    };

}

export default ButtonActions;
