import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

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
    const ingredientsAdditionalPrice = this.state.totalPrice + INGREDIENTS_PRICE;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: ingredientsAdditionalPrice
    })
  }

  removeIngredientsHandler = () => {

  }

  render() {
    console.log("this.sate.hander", this.state.addIngredientsHandler);
    return (
      <Aux>
        <Burger
          ingredients={this.state.ingredients}
        />
        <BuildControls
        addedPrice = {this.addIngredientsHandler}
        />
      </Aux>
    )
  }
}

export default BurgerBuilder;