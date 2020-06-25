import React from 'react';
import classes from './NavigationItem.module.css';

const navigationItem = (props) => (
  <li className={classes.NavigationItem}>
    className={props.active ? classes.active : null}>{props.children}
  </li >
);

export default navigationItem;