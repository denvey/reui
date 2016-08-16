/**
 * Created by denvey on 16/8/10.
 */
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Accordion from './Accordion';
import style from './style.less';

export default class Accordions extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    index: PropTypes.number,
    onChange: PropTypes.func
  };

  static defaultProps = {
    active: [-1],
    allowMultiple: false
  };

  state = {
    active: [].concat(this.props.active)
  };

  handleClick(index) {
    let newState = {};

    newState.active = this.state.active;
    const position = newState.active.indexOf(index);

    if (position !== -1) {
      newState.active.splice(position, 1);
    } else if (this.props.allowMultiple) {
      newState.active.push(index);
    } else {
      newState.active = [index];
    }

    if (this.props.onChange) {
      this.props.onChange(newState);
    }
    this.setState(newState);
  }

  renderItems() {
    if (!this.props.children) {
      return null;
    }

    const children = [].concat(this.props.children);
    return children.map((item, index) => {
      const expanded = this.state.active.indexOf(index) !== -1;
      return React.cloneElement(item, {
        expanded: expanded,
        key: index,
        onClick: this.handleClick.bind(this, index),
        ref: `item-${ index }`
      });
    });
  }

  render() {
    return (
      <ul>
        {this.renderItems()}
      </ul>
    );
  }
}
