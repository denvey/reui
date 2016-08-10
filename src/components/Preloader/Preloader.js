import React,{ PropTypes } from 'react';
import classnames from 'classnames';
import style from './style.less';

const Proloader = (props) => {
  const classname = classnames('preloader', props.className);
  return (
      <span className={classname}></span>
  );
};

Proloader.propTypes = {
  className: PropTypes.string
};

export default Proloader;