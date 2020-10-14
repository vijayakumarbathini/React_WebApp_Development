import React, { Component } from 'react'
import Aux from '../../hoc/Aux/Aux'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OderSummary/OrderSummary'
import axios from '../../axios-order'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

const INGREDIENTS_PRICE = {
    salad: 2,
    bacon: 3,
    cheese: 4,
    meat: 10
}

class BurgerBuilder extends Component {

    state = {
        ingredients: null,
        totalPrice: 4,
        purchasableState: false,
        purchasing: false,
        loading: false
    }

    componentDidMount() {
        axios.get('https://react-backend-jay.firebaseio.com/orders/-MJWGtPe9eJlhpAeqEHk/ingredients.json').then(response => {
            this.setState({ingredients: response.data})
        })
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
        this.setState({ purchasing: true });
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    purchaseContinueHandler = () => {
        this.setState({loading:true})
        const data = {
            ingredients : this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name : 'Kumar',
                address: {
                    street : 'Sri Nagar',
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json',data).then(response => {
            setTimeout(() => {
                this.setState({loading:false, purchasing:false})
                console.log('Waiting')
            }, 1000);
            console.log(response);
            return response
        }).catch(error => {
            this.setState({loading:false, purchasing:false})
            console.log(error);
            return Promise.reject
        })
    }

    render() {

        let orderSummary ;
        let burger=<Spinner />
        if(this.state.ingredients){
            orderSummary=<OrderSummary ingredientsSummary={this.state.ingredients} cancel={this.purchaseCancelHandler}
            continue={this.purchaseContinueHandler} price={this.state.totalPrice} />
            burger= <Aux>
            <Burger ingredients={this.state.ingredients} price={this.state.totalPrice} />
                <BuildControls ingredientAdd={this.addIngredientHandler}
                    ingredientDelete={this.removeIngredientHandler}
                    ingredients={this.state.ingredients}
                    price={this.state.totalPrice}
                    purchaseState={this.state.purchasableState}
                    purchase={this.purchaseHandler} />
                    </Aux>
        }
        if (this.state.loading){
            orderSummary=<Spinner />
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

export default withErrorHandler(BurgerBuilder,axios);