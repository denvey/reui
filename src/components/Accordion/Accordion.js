/**
 * Created by denvey on 16/8/10.
 */
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import style from './style.less';

export default class Accordion extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    header: PropTypes.any
  };

  static defaultProps = {
    expanded: false
  };

  state = {
    expanded: false,
    height: 0
  };

  onChange() {
    this.setState({
      expanded: !this.state.expanded,
      height: this.maxHeight
    });
  }

  componentWillReceiveProps() {
    /*if (this.props.expanded) {*/
      const body = ReactDOM.findDOMNode(this.refs.accrodionContent);
      //return `${body.scrollHeight}px`;
      this.setState({
        maxHeight: `${body.scrollHeight}px`
      });
    /*}*/
  }

  render() {
    const { children, header, onClick } = this.props;
    const classnames = classNames('accordion-item', {
      'accordion-item-expanded': this.props.expanded
    });
    
    return (
      <li className={classnames}>
        <div onClick={onClick}>
          {header}
        </div>
        <div className="accordion-item-content" style={{height: this.props.expanded ? this.state.maxHeight : 0}} ref="accrodionContent">
          {children}
        </div>
      </li>
    );
  }
}
