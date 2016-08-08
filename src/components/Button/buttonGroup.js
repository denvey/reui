/**
 * Created by denvey on 16/4/11.
 */
import React from 'react';
import classnames from 'classnames';
import style from './style.less';

export default class ButtonGroup extends React.Component {
  static propTypes = {
    vertical: React.PropTypes.bool,
    className: React.PropTypes.string,
    children: React.PropTypes.node.isRequired,
    theme: React.PropTypes.string
  };

  render() {
    const {className, children, theme} = this.props;
    const classes = classnames({
      'buttons-row': true,
      ['theme-' + theme]: theme,
      [className]: className
    });
    return (
      <div className={classes}>
        {children}
      </div>
    )
  }
}
