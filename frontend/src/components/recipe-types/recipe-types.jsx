import './recipe-types.scss';
import React, {useEffect, useState} from 'react';
import fetch from "node-fetch";
import {useDispatch} from "react-redux";
const RecipeTypes = () => {
    const [categories, setCategories] = React.useState([])
    const [flag, setFlag] = useState(0)
    // const [filterData, setFilterData] = useState("")

    const dispatch = useDispatch()


  useEffect(() => {
         fetch('/api/getCategories/')
                .then((res) => res.json())
                .then(res => setCategories(res) )

  },[])

  return (<nav className="recipe-types">
    <ul className="recipe-types__list">
      {
        categories.map((data, i) =>{ {/* ползунок с категориями */} 
          return  <li className="recipe-types__list-item">
                      <button id={i.toString()} onClick={()=>{
                          setFlag(i);
                          // setFilterData(data.name)
                          // MAIN_PAGE
                          dispatch({type : "MAIN_PAGE", payload : data.name})

                      }
                      } className={flag === i ? "recipe-types__button  recipe-types__button_active" : "recipe-types__button "}>
                        {data.name}
                      </button>
                    </li>
        })
      }

    </ul>
  </nav>);
};

export default RecipeTypes;
