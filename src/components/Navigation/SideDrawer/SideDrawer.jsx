
import React from 'react';
import classes from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

const sideDrawer = (props) => {
  let classesAttached = [classes.SideDrawer,classes.Close];
  if (props.show) {
    classesAttached = [classes.SideDrawer,classes.Open];
  }

  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.closeSideDrawer} />
      {/* <div className={classesAttached.join(' ')} closeSideDrawer={props.closeSideDrawer}> */}
      <div className={classesAttached.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>¸
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
}

export default sideDrawer;