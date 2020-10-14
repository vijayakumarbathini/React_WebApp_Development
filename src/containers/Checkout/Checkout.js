import React,{ Component } from "react";
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary'

class Checkout extends Component{
    
    state ={
        ingredients: {
            meat: 1,
            salad: 1,
            bacon:1,
            chesse:2

        }
    }

    render(){
        return(
            <CheckoutSummary ingredients={this.state.ingredients} />
        );
    }
}

export default Checkout