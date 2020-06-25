import React from 'react';
import Burger from '../Burger/Burger';
import Button from '../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

const checkoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>
        we hope it tastes well!
      </h1>
      <div style={{ width: "100 %", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
        <Button
          btnType='Success'
          clicked={props.checkoutContinue}>CONTINUE</Button>
        <Button
          btnType='Danger'
          clicked={props.checkoutCancel}>CANCEL</Button>
      </div>
    </div >
  );
}

export default checkoutSummary;