import React from 'react'
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Aux from '../../../hoc/Aux/Aux'
import DrawerToggle from '../Sidedrawer/DrawerToggle'

const toolBar  = (props) => {

  return (
      <Aux>
        <header className={classes.Toolbar}>
        <DrawerToggle toggleDrawer={props.toggle} />     
       <div><Logo /></div>
       <nav className={classes.DesktopOnly}>
      <NavigationItems />
       </nav>
       </header>
       </Aux>
  );
 }


export default toolBar 