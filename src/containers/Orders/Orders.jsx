import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  }

  componentDidMount() {
    axios.get('/orders.json')
      .then(res => {
        console.log("res-Orders:", res.data);
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key,
          });
        }

        this.setState({
          orders: fetchedOrders
        })
      })
      .catch(error => {
        console.log("error:", error);
        this.setState({
          loading: false,
        })
      })
  }

  render() {
    console.log("orders:", this.state.orders);
    return (
      <div>
        {this.state.orders.map(order => (
          <Order key={order.id}
            ingredients={order.ingredients}
            price={order.price}
          />
        ))}
      </div>
    );
  }
}

export default Orders;