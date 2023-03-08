import { combineReducers } from "redux";
import recipesReducer from './recipes';
import ingridientReducer from './ingredient'
import {ingReducer} from "./selectedIngredientsReducer";
import {dishessReducer} from './resultDishess'
import {ChoiseCategoryMainPageReducer} from "./choiseCategoryMainPageReducer";

export const rootReducer = combineReducers({
  recipesInfo: recipesReducer,
  ingredientsInfo: ingridientReducer,
  selectedIngredients : ingReducer,
  resultDishess : dishessReducer,
  choiseCategoryMainPage : ChoiseCategoryMainPageReducer
});
