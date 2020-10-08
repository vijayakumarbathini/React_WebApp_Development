import React from 'react'
import classes from './Burger.css'
import BurgerIngredient from './Ingredient/BurgerIngredient'

const burger = (props) => {

    const transformedIngredients = Object.keys(props.ingredients)
        .map(key => {
            return [...Array(props.ingredients[key])].map((_, i) => {
                return <BurgerIngredient key={key + i} type={key} />
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    const renderIngredients = transformedIngredients.length > 0 ? transformedIngredients : <p> Please add ingredients</p>
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {renderIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );

}

export default burger