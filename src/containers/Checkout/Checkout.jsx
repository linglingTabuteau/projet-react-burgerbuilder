import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
  state = {
    ingredients: null,
    totalPrice: 0,
  }

  // use componentWillMount below in order to get this.state.ingredients, before rending Children <Burger />
  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;
    for (let param of query.entries()) {
      console.log("param:", param)
      // each param: ['salad], '1']
      // add + before param[1] to change string to a number for object value
      // Adding new properties to an object: by giving it a value like: ingredients[param[0]] = +param[1]
      if (param[0] === 'price') {
        price = param[1];
      } else {
        ingredients[param[0]] = +param[1];
      }
    }
    this.setState({
      ingredients: ingredients, totalPrice: price
    })
  }

  checkoutContinueHandler = () => {
    // this.props.history.push('/checkout/contact-data');
    this.props.history.push({
      pathname: `${this.props.match.url}/contact-data`
    });
  }

  checkoutCancelHandler = () => {
    this.props.history.goBack();
  }

  render() {

    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutContinue={this.checkoutContinueHandler}
          checkoutCancel={this.checkoutCancelHandler} />
        <Route
          path={this.props.match.path + '/contact-data'}
          render={(props) => <ContactData
            ingredients={this.state.ingredients}
            totalPrice={this.state.totalPrice}
            // below is one method to pass route parameters to ContactData as we don't use component={ContactData} so it doesn't have access to Route parameters
            {...props} />} />
      </div>
    );
  }
}

export default Checkout;