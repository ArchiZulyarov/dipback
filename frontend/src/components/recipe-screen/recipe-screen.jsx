import './recipe-screen.scss';
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import React from 'react';
import fetch from "node-fetch";
const RecipeScreen = () => {
  const navigate = useNavigate();
  const [currentRecipe, setCurrentRecipe] = useState({});
  // const recipes = useSelector(state => state.recipesInfo.recipes);
  const [recipes, setRecipes] = React.useState([])
    const [rec, setRec] = React.useState(useSelector(state => state.recipesInfo.recipes))

  const [ingredients, setIngredients] = React.useState([])
  React.useEffect(() => {
    rec.then(r => {
        setRecipes(r)
    })
        // console.log(recipes.filter(recipe => recipe.id === parseInt(id)))
    // console.log(id)


  })
  let {id} = useParams();

  const handleBackToRecipes = () => {
    navigate(-1)
  }

  useEffect(() => {
     let resFil =  recipes.filter(recipe => recipe.id === parseInt(id))[0]
     setCurrentRecipe(resFil)

    if(resFil !== undefined)
      fetch('/api/getIngredents/?name=' + resFil.title)
                .then((res) => res.json())
                .then(res => setIngredients(res) )

  }, [id, recipes])



  return (
    <section className="recipe-screen">
      <button
        className="recipe-screen__back"
        onClick={handleBackToRecipes}
      >
        <span className="recipe-screen__back-icon"/>
        <span className="recipe-screen__back-text">Назад к рецептам</span>
      </button>
      <div className="recipe-screen__info">
        <div className="recipe-screen__container">
          <h1 className="recipe-screen__title">{currentRecipe?.title}</h1>
          <p className="recipe-screen__text">{currentRecipe?.text}</p>
          <ul className="recipe-screen__ingredients-list">
            {
               ingredients.map((data, i)=>{
                 console.log(data)
                 return  <li key={i} className="recipe-screen__ingredient">{data.name} <span className="recipe-screen__count">{data.amount} {data.unit}</span></li>
               })
            }



          </ul>
        </div>
        <div className="recipe-screen__dish">
          <span className="recipe-screen__dish-category">{currentRecipe?.category}</span>
          <img
            className="recipe-screen__dish-image"
            src={currentRecipe?.image}
            alt={currentRecipe?.title}
          />
          <div className="recipe-screen__dish-deco"/>
        </div>
      </div>
      <div className="recipe-screen__instruction-container">
        {/*<div className="recipe-screen__instruction-dish">*/}
        {/*  <img*/}
        {/*    className="recipe-screen__instruction-dish-image"*/}
        {/*    src={currentRecipe?.image}*/}
        {/*    alt={currentRecipe?.title}*/}
        {/*  />*/}
        {/*  <div className="recipe-screen__instruction-dish-deco"/>*/}
        {/*</div>*/}
        {/*<div className="recipe-screen__algo">*/}
        {/*  <h2 className="recipe-screen__algo-title">Инструкция</h2>*/}
        {/*  <ul className="recipe-screen__algo-list">*/}
        {/*    <li className="recipe-screen__item">*/}
        {/*      <span className="recipe-screen__order">1</span>*/}
        {/*      <span className="recipe-screen__algo-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab doloribus dolorum eius iste minus nulla quae reiciendis veniam. Aliquid dicta ea fuga illum magnam modi, molestias non porro quae veniam.</span>*/}
        {/*    </li>*/}
        {/*    <li className="recipe-screen__item">*/}
        {/*      <span className="recipe-screen__order">2</span>*/}
        {/*      <span className="recipe-screen__algo-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur at atque corporis, cumque deleniti distinctio dolorum et labore minima neque porro quaerat quisquam reiciendis repudiandae sequi vel veniam voluptas voluptatem.</span>*/}
        {/*    </li>*/}
        {/*    <li className="recipe-screen__item">*/}
        {/*      <span className="recipe-screen__order">3</span>*/}
        {/*      <span className="recipe-screen__algo-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda autem deserunt distinctio dolore eius, exercitationem ipsum iure minus modi natus nulla porro qui quis repellat repudiandae vitae. Fugiat, omnis.</span>*/}
        {/*    </li>*/}
        {/*    <li className="recipe-screen__item">*/}
        {/*      <span className="recipe-screen__order">4</span>*/}
        {/*      <span className="recipe-screen__algo-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at aut, corporis cupiditate dolor dolores error esse et facere, inventore ipsum nulla recusandae tempora ullam voluptatibus. Accusamus amet architecto at.</span>*/}
        {/*    </li>*/}
        {/*    <li className="recipe-screen__item">*/}
        {/*      <span className="recipe-screen__order">5</span>*/}
        {/*      <span className="recipe-screen__algo-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque cupiditate deleniti doloremque explicabo nam sapiente. Aspernatur corporis, distinctio est maxime non pariatur rem rerum temporibus! Eius fugiat libero quis repellat.</span>*/}
        {/*    </li>*/}
        {/*  </ul>*/}
        {/*</div>*/}
      </div>
    </section>
  );
};

export default RecipeScreen;
