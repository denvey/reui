/**
 * Created by denvey on 16/8/16.
 */
import React from 'react';
import { Link } from 'react-router';

import List from '../../src/components/ListView';

export default class Home extends React.Component {
  render() {
    return (
      <div className="list-block">
        <ul>
          <Link to="/accordion" className="item-link">
            <div className="item-content">
              <div className="item-media"><i className="icon icon-f7"></i></div>
              <div className="item-inner">
                <div className="item-title">Accordion</div>
              </div>
            </div>
          </Link>
          <Link to="/button" className="item-link">
            <div className="item-content">
              <div className="item-media"><i className="icon icon-f7"></i></div>
              <div className="item-inner">
                <div className="item-title">Button</div>
              </div>
            </div>
          </Link>
          <Link to="/grid" className="item-link">
            <div className="item-content">
              <div className="item-media"><i className="icon icon-f7"></i></div>
              <div className="item-inner">
                <div className="item-title">Grid</div>
              </div>
            </div>
          </Link>
        </ul>
      </div>
    )
  }
}