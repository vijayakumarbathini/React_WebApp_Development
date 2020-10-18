import React, { Component } from 'react'
import Aux from '../../hoc/Aux/Aux'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OderSummary/OrderSummary'
import axios from '../../axios-order'
import Spinner from '../../components/UI/Spinner/Spinner'
//import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import {connect} from 'react-redux'
import * as actions from '../../store/actions/burgerBuilderActions'

class BurgerBuilder extends Component {

    state = {
        purchasableState: false,
        purchasing: false,
        loading: false
    }

    updatePurchaseState = (ing) => {
        let sum =0;
        sum = Object.keys(ing).map(ele => {
                return ing[ele]
        }).reduce((a,   b)=> a+b,0)
        return sum > 0
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
        this.props.history.push('/');
    }

    purchaseContinueHandler = () => {
        this.props.history.push('/checkout');
    }

    render() {

        let orderSummary;
        let burger = <Spinner />
        if (this.props.ing) {
            orderSummary = <OrderSummary ingredientsSummary={this.props.ing} cancel={this.purchaseCancelHandler}
                continue={this.purchaseContinueHandler} price={this.props.totalPrice} />
            burger = <Aux>
                
                <Burger ingredients={this.props.ing} price={this.props.totalPrice} />
                <BuildControls ingredientAdd={this.props.addIngredientHandler}
                    ingredientDelete={this.props.removeIngredientHandler}
                    ingredients={this.props.ing}
                    price={this.props.totalPrice}
                    purchaseState={this.updatePurchaseState(this.props.ing)}
                    purchase={this.purchaseHandler} />
            </Aux>
        }
        if (this.props.loading) {
            orderSummary = <Spinner />
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        )
    }
}

const mapStatetoProps = state => {
    return{
        totalPrice: state.bur.totalPrice,
        ing: state.bur.ingredients
    }

}
const mapDispatchtoProps = (dispatch) => {
    return {
        //calling action Creators
        addIngredientHandler: (ingredient) => dispatch(actions.addIng(ingredient)),

        removeIngredientHandler: (ingredient) => dispatch(actions.removeIng(ingredient))

    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(BurgerBuilder, axios);