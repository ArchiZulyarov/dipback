import './constructor.scss';
import IngredientsList from "../../components/ingredients-list/ingredients-list";
import IngredientsStub from "../../components/ingredients-stub/ingredients-stub";
import IngredientsConstructor from "../../components/ingredients-constructor/ingredients-constructor";
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import fetch from "node-fetch";
import {log} from "debug";
import RecipeCard from "../../components/recipe-card/recipe-card";

const Constructor = () => {

    const selector = useSelector(state => state.selectedIngredients.ingArray)
    let selDishess = useSelector(state => state.resultDishess.ingArray)
    const dispatch = useDispatch()
    const [arrDishess, setDishess] = useState([selector])


    useEffect(() => {
        let l = []
        // console.log(selector)

        for (let i = 0; i < selector.length; i++) {
            l.push('"' + selector[i] + '"')
        }

        if (l.length > 0)
            fetch('/api/getdish/?arr=' + l)
                .then((res) => res.json())
                .then(res => dispatch({type: "CURRENT_DISHESS", payload: res}))
    }, [selector])

    useEffect(() => {
        // console.log(arrDishess.length)
        if (arrDishess.length === 0) {
            dispatch({type: "CURRENT_DISHESS", payload: []})
        }

        let l = []
        // console.log(selector)
        for (let i = 0; i < arrDishess.length; i++) {
            l.push('"' + arrDishess[i] + '"')
        }

        if (l.length > 0)
            fetch('/api/getdish/?arr=' + l)
                .then((res) => res.json())
                .then(res => dispatch({type: "CURRENT_DISHESS", payload: res}))


    }, [arrDishess])



    const rasprsDishes = () =>{
       let sortedArr =  selDishess.filter(x => x.percent).sort((a, b) => parseInt(a.percent ) < parseInt(b.percent))
          return  sortedArr.map((data, i) => {
                return  <>
                            <p>{data.percent}% процент имеющихся ингредиентов от рецепта</p>
                            <RecipeCard key={i} data={data}/>
                        </>
            })
    }
    // console.log(selector) выбор ингредиентов список
    return (
        // <section className="constructor">
        <div className="container" style={{backgroundColor: '#fff'}}>
            <div className="col-12 d-flex">
                <div className="col-5">
                    <IngredientsList/>
                </div>
                <div className="col-2 p-5">
                    {selector.map((data, i) => {
                        return (
                            <div key={i} className={'d-flex'}> {/* выбраный список */} 
                                <div className={'text-center col-12'} style={{border: '1px solid gray'}}>
                                    <p className={'m-2 '}>{data}</p>
                                </div>
                                <div className={'p-1 '} onClick={() => {

                                    let filter = selector.filter(x => x !== data)

                                    setDishess(filter)
                                    dispatch({type: "FILTERED", payload: filter})
                                }
                                } style={{border: '1px solid gray', cursor: 'pointer', color: 'red'}}>
                                    X
                                </div>
                            </div>

                        )
                    })}

                </div>
                <div className="col-5 d-flex justify-content-center"> {/* список блюд */} 
                    <div className="col-8 flex-column">
                        <ul className="recipes-list" style={{display: "block"}}>{
                            rasprsDishes()
                            // selDishess.filter(x => x.percent).reverse().map((data, i) => {
                            //     return  <>
                            //                 <p>{data.percent}% процент имеющихся ингредиентов от рецепта</p>
                            //                 <RecipeCard key={i} data={data}/>
                            //             </>
                            // })
                        }
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Constructor;
