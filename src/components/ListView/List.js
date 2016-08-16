/**
 * Created by denvey on 16/8/16.
 */
import React from 'react';

export default class List extends React.Component {
  render() {
    const { title, after } = this.props;
    return (
      <li>
        <div className="item-content">
          <div className="item-media">
            <i className="icon icon-f7"></i>
          </div>
          <div className="item-inner">
            <div className="item-title">{title}</div>
            <div className="item-after">{after}</div>
          </div>
        </div>
      </li>
    )
  }
}