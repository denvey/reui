import React,{ PropTypes } from 'react';
import classnames from 'classnames';
import Preloader from './Preloader';
import PreloaderIndicator from './PreloaderIndicator';
import Overlay from '../Overlay';
import Modal from '../Modal';

const Preloaders = (props) => {
  if(props.type === 'modal') {
    let modalData = {
      title: props.title || "Loading... "
    };
    return <Modal {...props} {...modalData}><Preloader/>{props.children}</Modal>
  } else if(props.type === 'indicator') {
    return <PreloaderIndicator {...props}/>
  } else {
    return <Preloader className={props.className} />
  }
};
Preloaders.propTypes = {
  className: PropTypes.string
  /*active: PropTypes.bool,
  children: PropTypes.node,
  onEscKeyDown: PropTypes.func,
  onOverlayClick: PropTypes.func,
  onOverlayMouseDown: PropTypes.func,
  onOverlayMouseMove: PropTypes.func,
  onOverlayMouseUp: PropTypes.func,
  title: PropTypes.string,
  text: PropTypes.string,
  afterText: PropTypes.string*/
};

/*Preloaders.defaultProps = {
  active: false
};*/

export default Preloaders;