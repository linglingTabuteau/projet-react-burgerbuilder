import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

console.log(classes);
const Layout = (props) => (
  <Aux>
    <Toolbar />
    <SideDrawer />
    <main className={classes.Content}>
      {props.children}
    </main>
  </Aux>
);

export default Layout;