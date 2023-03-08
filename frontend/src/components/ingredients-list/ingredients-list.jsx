import './ingredients-list.scss';
import IngredientsSearcher from "../ingredients-searcher/ingredients-searcher";
import React, {useState} from 'react';
import RecipeCard from "../recipe-card/recipe-card";
import {useDispatch, useSelector} from "react-redux";
import fetch from "node-fetch";

const IngredientsList = () => {

    const [ingredient, setIngredient] = React.useState([])
    const [rec, setRec] = React.useState(useSelector(state => state.ingredientsInfo.ingredient))
    const selector = useSelector(state => state.selectedIngredients.ingArray)

    const dispatch = useDispatch()

    React.useEffect(() => {
        rec.then(r => {
            setIngredient(r)
            // console.log(ingredient)
        })
    })


    const onSelectLi = (id) => {
        let filter = ingredient.filter(x => parseInt(x.id) === parseInt(id))
        dispatch({type: "ALL_INGRIDIENTS", payload: filter[0].name})
    }

    return (
        <section className="ingredients-list">
            <IngredientsSearcher/>
            <ul className="ingredients-list__list">
                {
                    ingredient.map((ing, i) => {
                            // console.log(ing)
                            return (<li key={i} id={ing.id.toString()} onClick={() => onSelectLi(ing.id)}
                                        className="ingredients-list__list-item">
                                <button className="ingredients-list__button"/>
                                <span className="ingredients-list__text">{ing.name}</span>
                            </li>)
                        }
                    )
                }
            </ul>
        </section>
    );
};

export default IngredientsList;
