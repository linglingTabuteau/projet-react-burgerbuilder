import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

console.log("classes:", classes);
class Layout extends Component {
  state = {
    showSideDrawer: false,
  }

  closeSideDrawerHandler = () => {
    this.setState({
      showSideDrawer: !this.state.showSideDrawer
    })
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {
        showSideDrawer: !prevState.showSideDrawer
      }

    })
  }

  render() {
    return (
      <Aux>
        <Toolbar sideDrawerToggle={this.sideDrawerToggleHandler} />
        <SideDrawer show={this.state.showSideDrawer} closeSideDrawer={this.closeSideDrawerHandler} />
        <main className={classes.Content}>
          {this.props.children}
        </main>

      </Aux>
    );
  }
}



export default Layout;