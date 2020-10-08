import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OderSummary/OrderSummary'

const INGREDIENTS_PRICE = {
    salad: 2,
    bacon: 3,
    cheese: 4,
    meat: 10
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasableState: false,
        purchasing: false
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const currentCount = oldCount + 1
        const upgradeIngredients = {
            ...this.state.ingredients
        }
        upgradeIngredients[type] = currentCount;
        this.setState({ ingredients: upgradeIngredients });
        const newPrice = this.state.totalPrice + INGREDIENTS_PRICE[type];
        this.setState({ totalPrice: newPrice });
        this.updatePurchaseState(newPrice);
    }

    removeIngredientHandler = (type) => {

        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const currentCount = oldCount - 1
        const upgradeIngredients = {
            ...this.state.ingredients
        }
        upgradeIngredients[type] = currentCount;
        this.setState({ ingredients: upgradeIngredients });
        const newPrice = this.state.totalPrice - INGREDIENTS_PRICE[type];
        this.setState({ totalPrice: newPrice });
        this.updatePurchaseState(newPrice);
    }

    updatePurchaseState = (price) => {
        return price > 4 ? this.setState({ purchasableState: true }) : this.setState({ purchasableState: false })
    }

    purchaseHandler = () => {
        this.setState({ purchasableState: true });
    }

    purchaseCancelHandler = () => {
        console.log('canceling ')
        this.setState({ purchasableState: false });
    }

    purchaseContinueHandler = () => {
        alert('Please continue')
    }

    render() {
        return (
            <Aux>
                <Modal show={this.state.purchasableState} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary ingredientsSummary={this.state.ingredients} cancel={this.purchaseCancelHandler}
                        continue={this.purchaseContinueHandler} price={this.state.totalPrice} />
                </Modal>
                <Burger ingredients={this.state.ingredients} price={this.state.totalPrice} />
                <BuildControls ingredientAdd={this.addIngredientHandler}
                    ingredientDelete={this.removeIngredientHandler}
                    ingredients={this.state.ingredients}
                    price={this.state.totalPrice}
                    purchaseState={this.state.purchasableState}
                    purchase={this.state.purchaseHandler} />
            </Aux>
        )
    }
}

export default BurgerBuilder;