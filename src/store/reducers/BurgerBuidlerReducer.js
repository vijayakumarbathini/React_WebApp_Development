
import * as actionTypes from '../actions/actionTypes'

const initialState ={
    ingredients: {
        salad: 0,
        meat: 0,
        cheese: 0,
        bacon: 0
    },
    totalPrice: 0,
}

const INGREDIENTS_PRICE = {
    salad: 2,
    bacon: 3,
    cheese: 4,
    meat: 10
}


const burgerBuilderReducer = (state=initialState,action) => {
    console.log(action.type)
    switch(action.type){
      
        case actionTypes.ADD_INGRIDENT:
            
            return{
                ...state,
                ingredients: {
                    ...state.ingredients, 
                    [action.ingredientName] : state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENTS_PRICE[action.ingredientName]

            }
       
        case actionTypes.REMOVE_INGRIDENT:
            return {
                    ...state,
                    ingredients: {
                        ...state.ingredients, 
                        [action.ingredientName] : state.ingredients[action.ingredientName] - 1
                    },
                    totalPrice: state.totalPrice - INGREDIENTS_PRICE[action.ingredientName]
    
            }
        default:
            console.log(state)
            return state
    }
}

export default burgerBuilderReducer;