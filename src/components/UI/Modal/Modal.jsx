import React, { Component } from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  //updating the Modal will also update OrderSummary (wrapped by Modal in the Burger Builder)

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show; //same as if (nextProps.show !== this.props.show) {return true;}
  }

  componentDidUpdate() {
    console.log('[Modal] DidUpdate');
  }
  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            //if show is true --> modal apears translateY(0) and is visible (opacity '1')
            // if show is false can't see modal (initial state) --> translateY(-100vh) and is not visible (transparent opacity '0')
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}
        >
          {this.props.children} {/*this is the OrderSummary componente */}
        </div>
      </Aux>
    );
  }
}

export default Modal;
