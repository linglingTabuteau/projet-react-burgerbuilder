import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import { Link } from 'react-router-dom';

const NavigationItems = (props) => (
  <ul 
  className={classes.NavigationItems}>
    {/* active est un short writing. like active={true} */}
    <Link to="/"  style={{margin:'10px', textDecoration:'none'}}>Burger Builder</Link>
    <Link to="/checkout" style={{margin:'10px', textDecoration:'none'}}>Check Out</Link>
  </ul>
);


export default NavigationItems;