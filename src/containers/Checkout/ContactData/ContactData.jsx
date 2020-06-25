import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';




class ContactData extends Component {
  state = {
    name: '',
    email: '',
    adress: {
      adress: '',
      postalCode: ''
    },
    totalPrice: 0,
    loading: false,
  }

  orderHandler = () => {
    console.log(this.props);

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      customer: {
        name: 'Lingling Tabuteau',
        adress: {
          street: 'Test 1',
          zipCode: '33000',
          country: 'France',
        },
        email: 'test@gmail.com'
      },
      delveryMethod: 'fastest'
    }
    this.setState({ loading: true })
    try {
      // import to add .json in the end of url to send data to firebase
      axios.post('/orders.json', order)
        // .then(response => console.log("response puchaeContinueHandler:", response))
        .then(res => {
          this.setState({ loading: false, purchasing: false })
        })
    } catch (error) {
      console.log('errorPost:', error);
      this.setState({ loading: false })
    }
  }

  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact Data</h4>
        <form>
          <input type="text" name="name" className={classes.Input} placeholder="your name" />
          <input type="text" name="email" className={classes.Input} placeholder="your Mail" />
          <input type="text" name="street" className={classes.Input} placeholder="your adress" />
          <input type="text" name="postal" className={classes.Input} placeholder="postal code" />
          <Button
            btnType="Success"
            clicked={this.orderHandler}>Your Order</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;