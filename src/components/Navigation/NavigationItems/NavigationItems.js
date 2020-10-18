import React from 'react'
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'
import {connect} from 'react-redux'
const navigation = (props) => {
  console.log('NI',props)
  return (
       <ul className={classes.NavigationItems} >
           <NavigationItem link='/'>Burger Builder</NavigationItem>
           { props.userId ? <NavigationItem link='/orders'>Order</NavigationItem> : null }
           {!props.userId ? 
           <NavigationItem link='/auth'>Login</NavigationItem> :
           <NavigationItem link='/logout'>Logout</NavigationItem> 
           }
       </ul>
  );
 }


const mapstateToProps = state => {
  return {
    userId: state.auth.userId
  }
}


export default connect(mapstateToProps)(navigation)