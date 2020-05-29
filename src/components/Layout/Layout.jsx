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
    this.setState({
      show: !this.state.show
    })
  }

  sideDrawerToggleHandler = () => {
    console.log("toggle:");
    this.setState((prevState, props) => {
      console.log("propos:", props);
      console.log("!presvstate:", !prevState.show);
      return {
        show: !prevState.show
      }

    })
  }

  render() {
    return (
      <Aux>
        <Toolbar sideDrawerToggle={this.sideDrawerToggleHandler} />
        <SideDrawer show={this.state.show} closeSideDrawer={this.closeSideDrawerHandler} />
        <main className={classes.Content}>
          {this.props.children}
        </main>

      </Aux>
    );
  }
}



export default Layout;