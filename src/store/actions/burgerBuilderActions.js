
//Action Creators
import * as actionTypes from './actionTypes'
import axios from '../../axios-order'

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
        axios.get('https://react-backend-jay.firebaseio.com/orders/-MJWGtPe9eJlhpAeqEHk/ingredients.json').then(response => {
            dispatch(buildIng(response.data))

        }).catch(error => {
            console.log('failed')
        })
    }
}