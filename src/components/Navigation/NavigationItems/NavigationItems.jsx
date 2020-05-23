import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    {/* active est un short writing. like active={true} */}
    <NavigationItem link={"/"} active>Burger Builder</NavigationItem>
    <NavigationItem link={"/"}>Check Out</NavigationItem>
  </ul>
);


export default NavigationItems;