import React from 'react';
import classnames from 'classnames';
import style from './style';

export default class Button extends React.Component {
  static propTypes = {
    type: React.PropTypes.string,
    active: React.PropTypes.bool,
    className: React.PropTypes.string,
    size: React.PropTypes.string,
    color: React.PropTypes.string,
    children: React.PropTypes.node.isRequired,
    href: React.PropTypes.string,
    onClick: React.PropTypes.func
  };

  static defaultProps = {
    onClick(){
    }
  };

  render() {
    const { type, href, children, active, size, color,className,onClick } = this.props;
    const prefix = 'button-';
    const classes = classnames({
      'button': true,
      'active': active,
      [prefix + type]: type,
      [prefix + size]: size,
      ['color-' + color]: color,
      [className]: className
    });

    return (
      <a className={classes}
         onClick={onClick.bind(this)}
         href={href || '#'}>
        {children}
      </a>
    )
  }
}
