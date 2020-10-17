import React from 'react'
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigation = (props) => {

  return (
       <ul className={classes.NavigationItems} >
           <NavigationItem link='/'>Burger Builder</NavigationItem>
           <NavigationItem link='/orders'>Order</NavigationItem>
           <NavigationItem link='/auth'>Authentication</NavigationItem>
       </ul>
  );
 }


export default navigation