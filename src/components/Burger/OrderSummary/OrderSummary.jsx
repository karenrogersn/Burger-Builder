import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from './../../UI/Button/Button';

class OrderSummary extends Component {
  // componentDidUpdate() {
  //   console.log('[OrderSummary] DidUpdate');
  // }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map((ingredient) => {
      return (
        <li key={ingredient}>
          <span style={{ textTransform: 'capitalize' }}>{ingredient}</span>:{' '}
          {this.props.ingredients[ingredient]}
        </li>
      );
    });
    return (
      <Aux>
        <h3>Your order</h3>
        <p>A delicious burger with the following ingredients: </p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total price: {this.props.price.toFixed(2)} </strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.cancel}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.continue}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
