import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import BurgerSummary from '../../components/Burger/BurgerSummary/BurgerSummary';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';


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
    ingredients: null,
    totalPrice: 4,
    purchaseable: false,
    purchasing: false,
    loading: false,
    error: false,
  }

  componentDidMount() {
    // attention: it needs to add .json at the end of the url for using the database
    // axios.get('https://react-my-burger-3b8d4.firebaseio.com/ingrediants.json')
    axios.get('/ingrediants.json')
      .then(res =>
        this.setState({
          ingredients: res.data
        }))
      .catch(error => {
        return this.setState({
          error: true
        })
      })
  }

  updatePurchaseState = (updatedIngredients) => {
    // const ingredients = { ...this.state.ingredients };
    const ingredientSum = Object.keys(updatedIngredients)
      .map(igKey => updatedIngredients[igKey]
      )
      .reduce((sum, el) => { return sum + el }, 0);
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
    // alert('You can continue to order')
    // this.props.history.push("/checkout");
    const queryParams = [];
    for (let i in this.state.ingredients) {
      queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
    }
    queryParams.push('price=' + this.state.totalPrice);
    const queryString = queryParams.join('&');

    this.props.history.push({
      pathname: '/checkout',
      search: '?' + queryString,
    }
    );

    // const order = {
    //   ingredients: this.state.ingredients,
    //   price: this.state.totalPrice,
    //   customer: {
    //     name: 'Lingling Tabuteau',
    //     adress: {
    //       street: 'Test 1',
    //       zipCode: '33000',
    //       country: 'France',
    //     },
    //     email: 'test@gmail.com'
    //   },
    //   delveryMethod: 'fastest'
    // }
    // this.setState({ loading: true })
    // try {
    //   // import to add .json in the end of url to send data to firebase
    //   axios.post('/orders.json', order)
    //     // .then(response => console.log("response puchaeContinueHandler:", response))
    //     .then(res => {
    //       this.setState({ loading: false, purchasing: false })
    //     })
    // } catch (error) {
    //   console.log('errorPost:', error);
    //   this.setState({ loading: false })
    // }
  }

  render() {
    const disableInfo = { ...this.state.ingredients };
    for (let key in disableInfo) {
      // right side: disableInfo[key] <= 0 returns a boolean {salad:false, bacon:true, chssese:false,....}
      disableInfo[key] = disableInfo[key] <= 0
    }

    // Add Spinner below
    let burgerSummary = null;
    let burger = (this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner />
    );
    if (this.state.ingredients) {
      burger = (
        <Aux>
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
      burgerSummary = (
        <BurgerSummary
          ingredients={this.state.ingredients}
          totalPrice={this.state.totalPrice}
          purchaseContinue={this.purchaseContinueHandler}
          purchaseCancel={this.purchaseCancelHandler}
        />)
    }

    if (this.state.loading) {
      burgerSummary = (
        <Spinner />
      );
    }
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}>
          {burgerSummary}
        </Modal>
        {burger}
      </Aux>
    )
  }
}

export default withErrorHandler(BurgerBuilder, axios);