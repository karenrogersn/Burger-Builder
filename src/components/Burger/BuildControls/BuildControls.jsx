import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      {controls.map((control) => (
        <BuildControl
          key={control.label}
          label={control.label}
          added={() => props.ingredientAdded(control.type)} //ES6 function to pass back up to addIngredientHandler (BurgerBuilder) the type property that it needs to receive to execute the logic
          removed={() => props.ingredientRemoved(control.type)}
          removerDisabled={props.disabled[control.type] <= 0} //ingredients.salad[]
          // disabled={props.disabled[control.type]}
          //checking every control (element of controls object)and applying the disabled property on those who are truthy i.e. those which amount is <=0
        />
      ))}
    </div>
  );
};
export default BuildControls;
