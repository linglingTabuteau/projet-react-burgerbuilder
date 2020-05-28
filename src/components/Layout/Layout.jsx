import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

console.log("classes:", classes);
class Layout extends Component {
  state = {
    show: false,
  }

  closeSideDrawerHandler = () => {
    const open = this.state.show;
    this.setState({
      show: !open,
    })
  }

  render() {
    return (
      <Aux>
        <Toolbar clicked={this.closeSideDrawerHandler} />
        <SideDrawer show={this.state.show} closeSideDrawer={this.closeSideDrawerHandler} />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    );
  }
}



export default Layout;