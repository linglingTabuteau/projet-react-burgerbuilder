import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
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
      <p><strong>Total Price: {props.totalPrice.toFixed(2)}</strong></p>
      <Button
        btnType='Success'
        clicked={props.purchaseContinue}>Continue</Button>
      <Button
        btnType='Danger'
        clicked={props.purchaseCancel}>cancel</Button>
    </Aux >
  );
}

// export default BurgerSummary;
export default BurgerSummary;