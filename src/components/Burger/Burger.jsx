import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import classes from './../../components/Burger/Burger.module.css';

const Burger = (props) => {
  //converting the ingredients object from BurgerBuilder into an array so we can map through it and output ingredients dynamically. output [salad, bacon, cheese, meat]
  let transformedIngredients = Object.keys(props.ingredients)
    .map((ingredientsKeys) => {
      //below: creating a new array using spread operator. The length will be the amount of the given ingredient --> ingredients[‘salad’]; // [1] ingredients[‘cheese’]; // [2, 2]
      return [...Array(props.ingredients[ingredientsKeys])].map((_, i) => {
        console.log('ingredients:', ingredientsKeys);
        console.log('quantity: ', props.ingredients[ingredientsKeys]);
        console.log('key:', ingredientsKeys + i);
        return <BurgerIngredient key={ingredientsKeys + i} type={ingredientsKeys} />;
      });
    })
    //Use reduce() to create just 1 [] with all ingredients
    // 2nd arg --> [] is the initial value we're setting for the reduced value. acc.concat(value) joins both arg into the []
    .reduce((acc, value) => {
      return acc.concat(value);
    }, []);
  console.log('transformedIngredients', transformedIngredients); //contains now just 1 [] with all jsx ingrendient elements
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please add ingredients to your burger!</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
