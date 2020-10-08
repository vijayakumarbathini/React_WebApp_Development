import React from 'react'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {

    const ingredientsSummary = Object.keys(props.ingredientsSummary).map(key => {
    return <li key={key}> <span style={{textTransform : 'capitalize'}}>{key}</span> : {props.ingredientsSummary[key]}</li>
    })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p> A delecious burger with</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Total Price : <strong>{props.price}</strong></p>
            <p> DO you want to checkout ?</p>
            <Button btnType='Danger' clicked={props.cancel}>CANCEL</Button>
            <Button btnType='Success' clicked={props.continue}>CONTINUE</Button>
        </Aux>
    );
}


export default orderSummary