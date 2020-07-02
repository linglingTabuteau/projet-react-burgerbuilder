import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
  let transferedIngredients = Object.keys(props.ingredients).map(
    keyIngredient => {
      // _ reprensents no value; accessing value by: objet[keyIngredient]
      // ?? Array(props.ingredients[keyIngredient])
      return [...Array(props.ingredients[keyIngredient])].map(
        (_, i) => {
          return (<BurgerIngredient
            key={keyIngredient + i}
            type={keyIngredient}
          />)
        }
      )
    }
  )
   // merge all the el into one arr (transferIngredients)
  .reduce((arr, el) => {
    return arr.concat(el);
  }, []);

  if (transferedIngredients.length === 0) {
    transferedIngredients = <p>Please add the ingredients</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transferedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

export default Burger;