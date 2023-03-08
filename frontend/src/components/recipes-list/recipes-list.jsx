import './recipes-list.scss';
import RecipeCard from "../recipe-card/recipe-card";
import {useSelector} from "react-redux";
import React, {useEffect, useState} from 'react';
import {log} from "debug";
const
    RecipesList =  () => {
    // let recipes = useSelector(state => state.recipesInfo.recipes);
    const [recipes, setRecipes] = React.useState([])
    const [rec, setRec] = React.useState(useSelector(state => state.recipesInfo.recipes))
    const selector = useSelector(state => state.choiseCategoryMainPage.valArr)
    const [copyArr, setCopyArr] = useState([])



  React.useEffect(() => {
    rec.then(r => {
        setRecipes(r)
         setCopyArr(r)
    })

  }, [])

 useEffect(() => {
        if (selector !== "Все") { {/* выдает то что кликнули в ползунке и перерисовка категорий */} 
             let filter = copyArr.filter(x => x.category.toString() === selector.toString())
        setRecipes(recipes => filter)
        } else {
            setRecipes(copyArr)
        }


    }, [selector])


return        <ul className="recipes-list">
              {

                  recipes.map((recipe, idx) => {

                      return <RecipeCard
                          key={idx}
                          data={recipe}
                      />
                  }

                  )
              }
             </ul>

};

export default RecipesList;
