import React, { Component } from 'react';
import Aux from './../../hoc/Aux';

import Burger from './../../components/Burger/Burger';
import BuildControls from './../../components/Burger/BuildControls/BuildControls';

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
    totalPrice: 4
  };
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
  };

  render() {
    //alternative to execute the disabled funcionality
    //copy array from the original to disable less buttons when ingredient amount is < 0
    // const disabledInfo = {
    //   ...this.state.ingredients
    // };
    // for (let key in disabledInfo) {
    //   disabledInfo[key] = disabledInfo[key] <= 0;
    //For … in loop for getting values. thiw will return true if amount is <= 0 // disabledInfo['salad'] <= 0 ? //true
    // }

    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          // disabled={disabledInfo}
          disabled={this.state.ingredients} //passing object down to BuildControls as props
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
