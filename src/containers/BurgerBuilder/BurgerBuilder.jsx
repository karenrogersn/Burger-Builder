import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';

import Burger from './../../components/Burger/Burger';
import BuildControls from './../../components/Burger/BuildControls/BuildControls';
import Modal from './../../components/UI/Modal/Modal';
import OrderSummary from './../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};
class BurgerBuilder extends Component {
  // constructor(props){
  //     super(props);
  //     this.state = {

  //     }
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    readyToBuy: false,
    purchasing: false
  };

  //calculating sum of ingredients' values
  //instead of copying the object and turning it into an array to map, we pass the object (ingredients) as an arg.
  //The arg ingredients then represents each key. to access its value: return ingredients[ingredientsKey];
  updatePurchaseState(ingredients) {
    // const ingredients = {
    //   ...this.state.ingredients
    const sum = Object.keys(ingredients)
      .map((ingredientsKey) => {
        return ingredients[ingredientsKey];
      })
      //reduce to get the sum of all added ingredients' total price.
      .reduce((acc, currentElement) => {
        return acc + currentElement;
      }, 0);
    this.setState({
      readyToBuy: sum > 0 //either true or false
    });
  }
  //method to add ingredients
  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };
  //method to remove ingredients
  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      //if the ingredient amount is <= 0 just return. This prevents getting a negative [] and an error
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    alert('Continue adding ingredients');
  };

  render() {
    //alternative to execute the disabled funcionality
    //copy array from the original to disable less buttons when ingredient amount is < 0
    // const disabledInfo = {
    //   ...this.state.ingredients
    // };
    // for (let key in disabledInfo) {
    //   disabledInfo[key] = disabledInfo[key] <= 0;
    //For … in loop for getting values. thiw will return true if amount is <= 0 // disabledInfo['salad'] <= 0 ? //true {salad: false, meat: false, etc}
    // }

    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          <OrderSummary
            ingredients={this.state.ingredients}
            cancel={this.purchaseCancelHandler}
            continue={this.purchaseContinueHandler}
            price={this.state.totalPrice}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          ordered={this.purchaseHandler}
          // disabled={disabledInfo}
          disabled={this.state.ingredients} //passing object down to BuildControls as props
          price={this.state.totalPrice}
          purchasable={this.state.readyToBuy}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
