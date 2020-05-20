import React from 'react';
import classes from './Modal.module.css';

const Modal = (props) => (
  <div
    className={classes.Modal}
    // look at inline style: translateY()
    style={{
      transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
      opacity: props.show ? '1' : '0'
    }}>
    {props.children}
  </div>
);

export default Modal;