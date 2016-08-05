/**
 * Created by denvey on 16/6/6.
 */
import React,{ PropTypes } from 'react';
import style from './style.less';

export default class Page extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  render() {
    const { children } = this.props;
    return (
      <div className="pages">
        <div className="page">
          {children}
        </div>
      </div>
    )
  }
}
