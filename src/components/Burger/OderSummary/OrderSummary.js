import React, { Component } from 'react'
import Aux from '../../../hoc/Aux/Aux'
import Button from '../../UI/Button/Button'


class OrderSummary extends Component{

    
    
    render(){
        const ingredientsSummary = Object.keys(this.props.ingredientsSummary).map(key => {
            return <li key={key}> <span style={{textTransform : 'capitalize'}}>{key}</span> : {this.props.ingredientsSummary[key]}</li>
            })
        return (
            <Aux>
            <h3>Your Order</h3>
            <p> A delecious burger with</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Total Price : <strong>{this.props.price}</strong></p>
            <p> DO you want to checkout ?</p>
            <Button btnType='Danger' clicked={this.props.cancel}>CANCEL</Button>
            <Button btnType='Success' clicked={this.props.continue}>CONTINUE</Button>
        </Aux>
        );
    }
}

export default OrderSummary