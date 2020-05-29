import React, { Component } from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

  // life cycle (sholdComponentUpdate) below to improve performances
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.show !== nextProps.show;
  }

  componentDidUpdate() {
    console.log("componentDisUpate-Modal");
  }

  render() {
    return (
      <Aux>
        <Backdrop
          show={this.props.show}
          clicked={this.props.modalClosed}
        />
        <div
          className={classes.Modal}
          // look at inline style: translateY()
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}>
          {this.props.children}
        </div>
      </Aux>
    );
  }
}


export default Modal;