import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import BurgerSummary from '../../components/Burger/BurgerSummary/BurgerSummary';

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
    purchaseable: false,
    purchasing: false,
  }


  updatePurchaseState = (updatedIngredients) => {
    // const ingredients = { ...this.state.ingredients };
    const ingredientSum = Object.keys(updatedIngredients)
      .map(igKey => updatedIngredients[igKey]
      )
      .reduce((sum, el) => { return sum + el }, 0);
    console.log("igsum:", ingredientSum);
    this.setState({
      // checks if purchaseable State is false or true; ingredientSum > 0 returns a boolean
      purchaseable: ingredientSum > 0
    })
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
    // call the function updatePurchaseState after executing addIngredientsHandler
    this.updatePurchaseState(updatedIngredients);
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
    // call the function updatePurchaseState after executing addIngredientsHandler
    // pass updatedIngredients inside the function so function gets the updated state of Ingredients
    this.updatePurchaseState(updatedIngredients);
  }

  purchaseHandler = () => {
    this.setState({
      purchasing: true
    })
  }

  purchaseCancelHandler = () => {
    this.setState({
      purchasing: false,
    })
  }

  purchaseContinueHandler = () => {
    alert('You can continue to order')
  }

  render() {
    const disableInfo = { ...this.state.ingredients };
    for (let key in disableInfo) {
      // right side: disableInfo[key] <= 0 returns a boolean {salad:false, bacon:true, chssese:false,....}
      disableInfo[key] = disableInfo[key] <= 0
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}>
          <BurgerSummary
            ingredients={this.state.ingredients}
            totalPrice={this.state.totalPrice}
            purchaseContinue={this.purchaseContinueHandler}
            purchaseCancel={this.purchaseCancelHandler}
          />
        </Modal>
        <Burger
          ingredients={this.state.ingredients}
        />
        <BuildControls
          addedIngredients={this.addIngredientsHandler}
          removedIngredients={this.removeIngredientsHandler}
          disabled={disableInfo}
          prices={this.state.totalPrice}
          purchaseable={this.state.purchaseable}
          ordered={this.purchaseHandler}
        />
      </Aux>
    )
  }
}

export default BurgerBuilder;