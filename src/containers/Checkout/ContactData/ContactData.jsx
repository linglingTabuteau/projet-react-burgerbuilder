import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';



class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'your name'
        },
        value: 'your name'
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'your street'
        },
        value: 'your street'
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Zip code'
        },
        value: ''
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'your country'
        },
        value: ''
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'your E-mail'
        },
        value: ''
      },
      delveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            {
              value: 'fastest', displayValue: 'fastest'
            },
            {
              value: 'cheapest', displayValue: 'cheapest'
            }
          ]
        }
      }
    },
    totalPrice: 0,
    loading: false,
  }

  orderHandler = (event) => {
    console.log(this.props);
    event.preventDefault();
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
    }
    this.setState({ loading: true })
    try {
      // import to add .json in the end of url to send data to firebase
      axios.post('/orders.json', order)
        // .then(response => console.log("response puchaeContinueHandler:", response))
        .then(res => {
          console.log("ok ContactData");
          this.setState({ loading: false, purchasing: false })
          // push user to home page '/' after passing the order
          this.props.history.push('/');
        })
    } catch (error) {
      console.log('errorPostContactData:', error);
      this.setState({ loading: false })
    }
  }

  render() {
    let formElementArray = [];
    for (let key in this.state.orderForm) {
      formElementArray.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }

    let form = (
      <form>
        {
          formElementArray.map(formItem => (
            <Input
              elementType={formItem.config.elementType}
              elementConfig={formItem.config.elementConfig}
              placeholder={formItem.config.value}
              key={formItem.id}
            />
          ))
        }
        <Button
          btnType="Success"
          clicked={this.orderHandler}>Your Order</Button>
      </form>
    );
    if (this.state.loading) {
      form = (<Spinner />)
    }

    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;