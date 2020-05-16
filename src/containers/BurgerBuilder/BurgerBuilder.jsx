import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

// use capital letters for public use of const variables
const INGREDIENTS_PRICE = {
  salad: 0.2,
  bacon: 0.4,
  cheese: 0.3,
  meat: 0.5,
}
class BurgerBuilder extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     ingredients: {
  //       salad: 1,
  //       bacon: 2,
  //       cheese: 2,
  //       meat: 1,
  //     }
  //   }
  // }

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
  }

  addIngredientsHandler = (type) => {
    const oldCounts = this.state.ingredients[type];
    const updatedCounts = oldCounts + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCounts;

    const oldPrice = this.state.totalPrice;
    const priceAddtion = INGREDIENTS_PRICE[type]
    const newPrice = oldPrice + priceAddtion;

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    })
  }

  removeIngredientsHandler = (type) => {
    const oldCounts = this.state.ingredients[type];
    if (oldCounts <= 0) {
      // noting return if oldCounts <= 0
      return;
    }
    const updatedCounts = oldCounts - 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCounts;

    const oldPrice = this.state.totalPrice;
    const priceDeduction = INGREDIENTS_PRICE[type];
    const newPrice = oldPrice - priceDeduction;

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    })

  }

  render() {
    const disableInfo = { ...this.state.ingredients };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0
    }

    return (
      <Aux>
        <Burger
          ingredients={this.state.ingredients}
        />
        <BuildControls
          addedIngredients={this.addIngredientsHandler}
          removedIngredients={this.removeIngredientsHandler}
          disabled={disableInfo}
        />
      </Aux>
    )
  }
}

export default BurgerBuilder;