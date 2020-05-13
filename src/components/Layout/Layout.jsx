import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';

console.log(classes);
const Layout = (props) => (
    <Aux>
      <div>Toolbar, Sidedrawer, Backdrop</div>
      <main className={classes.Content}>
        {props.children}
      </main>
    </Aux>
  );

export default Layout;