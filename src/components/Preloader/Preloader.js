import React,{ PropTypes } from 'react';
import classnames from 'classnames';
import ActivableRenderer from '../Hoc/ActivableRenderer';
import Button from '../Button';
import Overlay from '../Overlay';
import style from './style.less';

const Proloader = (props) => {
  return (
    <Overlay
      active={props.active}
      onClick={props.onOverlayClick}
      onMouseDown={props.onOverlayMouseDown}
      onMouseUp={props.onOverlayMouseUp}
      onMouseMove={props.onOverlayMouseMove}
      onEscKeyDown={props.onEscKeyDown}
    >
      <div className="preloader-indicator-overlay"></div>
      <div className="preloader-indicator-modal">
        <span className="preloader preloader-white"></span>
      </div>
    </Overlay>
  );
};

Proloader.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  onEscKeyDown: PropTypes.func,
  onOverlayClick: PropTypes.func,
  onOverlayMouseDown: PropTypes.func,
  onOverlayMouseMove: PropTypes.func,
  onOverlayMouseUp: PropTypes.func,
  title: PropTypes.string,
  text: PropTypes.string,
  afterText: PropTypes.string,
  buttons: PropTypes.array,
  verticalButtons: PropTypes.bool
};

Proloader.defaultProps = {
  buttons: [],
  active: false
};
export default ActivableRenderer()(Proloader);