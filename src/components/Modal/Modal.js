import React,{ PropTypes } from 'react';
import classnames from 'classnames';
import ActivableRenderer from '../Hoc/ActivableRenderer';
import Button from '../Button';
import Overlay from '../Overlay';
import style from './style.less';

const Modal = (props) => {
  return (
    <Overlay
      active={props.active}
      onClick={props.onOverlayClick}
      onMouseDown={props.onOverlayMouseDown}
      onMouseUp={props.onOverlayMouseUp}
      onMouseMove={props.onOverlayMouseMove}
      onEscKeyDown={props.onEscKeyDown}
    >
      <div className={'modal ' + (props.active ? 'modal-in' : 'modal-out')
                                + (!props.buttons || props.buttons.length === 0 ? ' modal-no-buttons ' : ' ')
                                + (props.className || '')} style={{display:'block'}}>
        <div className="modal-inner">
          {props.title ? <div className="modal-title">{props.title}</div> : null}
          {props.text ? <div className="modal-text">{props.text}</div> : null}
          {props.children ? <div className="modal-text">{props.children}</div> : null}
        </div>
        {props.buttons && props.buttons.length > 0 ?
          <div
            className={'modal-buttons modal-buttons-' + props.buttons.length + classnames({' modal-buttons-vertical': props.verticalButtons})}>
            {props.buttons.map((button, idx) =>
              <span key={idx} onClick={button.onClick}
                    className={'modal-button' + (button.bold ? ' modal-button-bold' : '')}>
                                {button.text}
                            </span>
            )}
          </div> : ''
        }
      </div>
    </Overlay>
  );
};

Modal.propTypes = {
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

Modal.defaultProps = {
  buttons: [],
  active: false
};
export default ActivableRenderer()(Modal);
