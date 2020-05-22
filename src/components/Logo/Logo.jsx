import React from 'react';
import burgerlogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

const Logo = (props) => (
  <div className={classes.Logo}>
    <img
    // important to add dynamic src={burgerlogo} instead of hard code because of assests will not be shipped to the server while publishing the website
    src={burgerlogo}
    alt="MyBurgerLogo"/>
  </div>
);


export default Logo;