import React,{ PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classnames from 'classnames';
import style from './style';

export default class Slider extends React.Component {
  /*static propTypes = {
    transitionName: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired
  };*/

  state = {
    items: ['hello', 'world', 'click', 'me']
  };

  handleAdd() {
    console.log(this);
    var newItems =
      this.state.items.concat([prompt('Enter some text')]);
    this.setState({items: newItems});
  };

  handleRemove(i) {
    var newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({items: newItems});
  };

  render() {

    var items = this.state.items.map(function(item, i) {
      return (
        <div key={item} >
          {item}
        </div>
      );
    });

    return (
      <div>
        <button onClick={this.handleAdd.bind(this)}>Add Item</button>
        <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {items}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}
