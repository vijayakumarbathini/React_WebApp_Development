import React from 'react'
import classes from './BuildControls.css'
import BuildControl from './BuildControl/Buildcontrol'

const controls = [
    { name: 'Meat', type: 'meat' },
    { name: 'Cheese', type: 'cheese' },
    { name: 'Bacon', type: 'bacon' },
    { name: 'Salad', type: 'salad' },
]
const buildControls = (props) => {

    const buildContrls = controls.map(control => {
        return <BuildControl key={control.name}
            Label={control.name}
            added={() => props.ingredientAdd(control.type)}
            deleted={() => props.ingredientDelete(control.type)}
            isDisabled={ !props.ingredients[control.type] > 0}
            purchase = {props.updatePurchaseState}
             />
    }
    )
    return (
        <div className={classes.BuildControls}>
            <p>Total Price : <strong>{props.price}</strong></p>
            {buildContrls}
            <button className={classes.OrderButton} disabled={!props.purchaseState} onClick={props.purchase}>ORDER NOW</button>
        </div>
    );

}

export default buildControls