import React from 'react';
import Aux from '../../../hoc/Aux';

const BurgerSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return (
        // inline style {igKey}
        <li key={igKey}>
          <span style={{ textTransform: 'capitalize' }}>{igKey}</span>
          :{props.ingredients[igKey]}</li>
      );
    })

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Your delicious order with the following ingredients:</p>
      <ul>
        {ingredientsSummary}
      </ul>
      <p>constinue to check out?</p>
      <p>Total Price:{props.totalPrice}</p>
    </Aux>
  );
}

export default BurgerSummary;