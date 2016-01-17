import React from 'react';
import ButtonActions from '../actions/ButtonActions';
import Button from './Button';
import ListStore from '../stores/ListStore';

class ButtonController extends React.Component {

  state = {items: ListStore.getAll()};

  componentDidMount = (event) => {
    ListStore.addChangeListener(this._onChange);
  };

  componentWillUnmount = (event) => {
    ListStore.removeChangeListener(this._onChange);
  };

  _onChange = (event) => {
    this.setState({items: ListStore.getAll()});
  };

  createNewItem = function(event) {
    new ButtonActions().addNewItem('new item');
  };

  render() {
    return (
      <Button 
        items={this.state.items}
        onClick={this.createNewItem} 
      />
    );
  }
}

export default ButtonController;
