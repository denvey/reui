import React,{ PropTypes } from 'react';
import ActivableRenderer from '../Hoc/ActivableRenderer';
import Preloader from './Preloader';
import Overlay from '../Overlay';
import style from './style.less';

const PreloaderIndicator = (props) => {
    return <Overlay
      active={props.active}
      onClick={props.onOverlayClick}
      onMouseDown={props.onOverlayMouseDown}
      onMouseUp={props.onOverlayMouseUp}
      onMouseMove={props.onOverlayMouseMove}
      onEscKeyDown={props.onEscKeyDown}
      className="preloader-indicator-overlay"
    >
      <div className="preloader-indicator-modal">
        <Preloader className="white"></Preloader>
      </div>
    </Overlay>
};

PreloaderIndicator.propTypes = {
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
  afterText: PropTypes.string
};

PreloaderIndicator.defaultProps = {
  active: false
};

export default ActivableRenderer()(PreloaderIndicator);