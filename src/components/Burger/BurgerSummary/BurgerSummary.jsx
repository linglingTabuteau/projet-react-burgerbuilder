import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

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
      <p>Total Price:{props.totalPrice.toFixed(2)}</p>
      <Button
        buttonType='Success'
        clicked={props.purchaseContinue}>Continue</Button>
    <Button
      buttonType='Danger'
      clicked={props.purchaseCancel}>cancel</Button>
    </Aux >
  );
}

export default BurgerSummary;