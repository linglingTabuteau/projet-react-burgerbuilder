import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';


const NavigationItems = (props) => (
  <ul
    className={classes.NavigationItems}>
    {/* active est un short writing. like active={true} */}
    <NavigationItem link="/" style={{ margin: '10px', textDecoration: 'none' }}>Burger Builder</NavigationItem>
    <NavigationItem link="/orders" style={{ margin: '10px', textDecoration: 'none' }}>Orders</NavigationItem>
  </ul>
);


export default NavigationItems;