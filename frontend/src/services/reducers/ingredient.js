import {createSlice} from "@reduxjs/toolkit";
import {v4 as uuidv4} from "uuid";
import React from "react";

const ingredient = async () => {
         let t = await fetch("api/ingredientList/");
         return  t.json()
    };

const initialState = {
    ingredient : ingredient,
  ingredientRequest: false,
  ingredientRequestFailed: false,
};




export const ingredientSlice = createSlice({
  name: 'ingredient',
  initialState,
  reducers: {
    ingredientRequestAction: (state) => {
      state.ingredientRequest = true;
      state.ingredientRequestFailed = false;
    },
  ingredientRequestSuccessAction: (state, action) => {
      state.ingredient = action.payload;
      state.ingredientRequest = false;
    },
    ingredientRequestFailedAction: (state) => {
      state.ingredientRequestFailed = true;
      state.ingredientRequest = false;
    },
  }

});
const {actions, reducer} = ingredientSlice;

// const {actions, reducer} = ingredientSlice;

export const {

    ingredientRequestAction,
    ingredientRequestSuccessAction,
    ingredientRequestFailedAction
} = actions;

export default reducer
