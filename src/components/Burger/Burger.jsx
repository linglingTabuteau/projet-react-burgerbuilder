import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
  const transferedIngredients = Object.keys(props.ingredients).map(
    keyIngredient => {
      // _reprensents no value
      return [...Array(props.ingredients[keyIngredient])].map(
        (_, i) => {
          return (<BurgerIngredient
            key={keyIngredient + i}
            type={keyIngredient}
          />)
        }
      )
    }
  );
  
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transferedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

export default Burger;