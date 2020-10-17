
//Action Creators
import * as actionTypes from './actionTypes'

export const addIng = (ingredient) => {
    return {
        //Type is the mandatory field to specify the action
        type: actionTypes.ADD_INGRIDENT, 
        ingredientName: ingredient
    }

}

export const removeIng = (ingredient) => {

    return {
        type: actionTypes.REMOVE_INGRIDENT, 
        ingredientName: ingredient
    }

}

export const buildIng = (ingredients) => {
    return{
        type: actionTypes.STORE_INGRIDENT,
        ingredients: ingredients
    }

}

export const setIngredients = () => {

    return dispatch => {
            dispatch(buildIng);
        }
}