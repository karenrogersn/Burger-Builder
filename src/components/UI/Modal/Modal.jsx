import React from 'react';
import classes from './Modal.module.css';
import Aux from './../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {
  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={classes.Modal}
        style={{
          //if show is true --> modal apears translateY(0) and is visible (opacity '1')
          // if show is false can't see modal (initial state) --> translateY(-100vh) and is not visible (transparent opacity '0')
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0'
        }}
      >
        {props.children}
      </div>
    </Aux>
  );
};

export default Modal;
