import React from 'react'
import Burger from '../Burger/Burger'
import Button from '../UI/Button/Button'
import classes from './CheckoutSummary.css'

const checkoutSummary = (props) => {

    return(
        <div className={classes.CheckoutSummary} >
                 <h1>We Hope It Tastes well</h1>
                 <div><Burger ingredients={props.ingredients}/></div>
                 <Button btnType='Danger' clicked={props.cancel}>CANCEL</Button>
                 <Button btnType='Success' clicked={props.continue}>CONTINUE</Button>
        </div>

    )
}

export default checkoutSummary