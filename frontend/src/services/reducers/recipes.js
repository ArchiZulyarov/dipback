import {createSlice} from "@reduxjs/toolkit";
import {v4 as uuidv4} from "uuid";
import React from "react";
const recipes = async () => {
         let t = await fetch("api/card/");
         return  t.json()
    };

// const recipes = [
//   {
//     id: uuidv4(),
//     title: 'Салат Цезарь с курицей и сухариками',
//     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia vestibulum sapien eu pellentesque. Donec rhoncus ultricies felis et maximus. Maecenas non euismod nibh. Sed tristique, ipsum ut mattis efficitur, lacus lacus venenatis sapien, at sollicitudin justo neque feugiat arcu. Sed nec urna imperdiet, iaculis risus a, viverra purus. Integer interdum, diam sed molestie hendrerit, libero ipsum vehicula mi, vitae feugiat leo diam vel est. Vivamus ullamcorper quam consectetur augue vehicula, ut condimentum mauris hendrerit. Cras arcu augue, tempus a lectus a, porttitor fringilla diam. Ut bibendum metus urna, sit amet gravida nulla dapibus vel. Curabitur et nulla at velit pretium dapibus eget non velit.',
//     category: 'Салаты',
//     image: 'https://img.povar.ru/list/59/08/a3/3c/salat_cezar_s_kuricei_i_suharikami-288738.JPG',
//
//   },
//   {
//     id: uuidv4(),
//     title: 'Торт черепаха',
//     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales facilisis tristique. Aenean vitae posuere tellus, a ultricies dui. Fusce interdum erat metus, vitae ultrices dolor consequat id. Nunc maximus erat dolor, sit amet ornare ligula sagittis sed. Nunc non dui porta, vulputate diam eget, sodales lorem. Donec semper arcu in orci tristique, mollis vehicula tortor volutpat. Fusce rutrum euismod lacus ut condimentum. Cras a massa erat.',
//     category: 'Сладкое',
//     image: 'https://img.povar.ru/list/5d/6a/51/56/tort_quotcherepahaquot-483722.JPG'
//   },
//   {
//     id: uuidv4(),
//     title: 'Тесто для пиццы без дрожжей',
//     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut dictum sem, sed iaculis sem. Quisque in risus aliquam augue gravida sollicitudin at a leo. Praesent tincidunt lacus nulla, nec rhoncus leo auctor nec. Duis quis magna vitae mauris dignissim bibendum. Suspendisse potenti. Praesent ut orci finibus massa maximus facilisis. Nunc et viverra dolor. Cras massa arcu, lobortis vel nisl a, tempus gravida dui. Vestibulum a imperdiet nisl. Donec accumsan tortor at ante varius bibendum. Proin ac aliquet lacus, sed tempus libero. Praesent pharetra, nibh quis tempor vestibulum, neque nisi accumsan lacus, vel lobortis tortor nisi at neque. Integer a ante a dolor sagittis lobortis. Curabitur vulputate consequat nunc, at pellentesque elit lobortis ac.',
//     category: 'Закуски',
//     image: 'https://img.povar.ru/list/e5/b7/90/41/testo_dlya_picci_bez_drojjei-56323.jpg'
//   },
//   {
//     id: uuidv4(),
//     title: 'Бурито',
//     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec ipsum sed libero faucibus vulputate ac id erat. Praesent ornare faucibus massa molestie imperdiet. Mauris feugiat, quam quis efficitur tincidunt, felis tortor lobortis metus, non consequat ipsum dolor nec felis. In nunc libero, ultrices a sem at, hendrerit posuere eros. Quisque molestie vehicula est, in pretium mi consequat non. Pellentesque vel mi iaculis, hendrerit turpis id, consectetur libero. Vivamus ut convallis arcu, quis placerat nibh. Donec leo diam, blandit vitae dolor a, hendrerit euismod enim.',
//     category: 'Закуски',
//     image: 'https://img.povar.ru/list/cc/7d/d7/4e/burito-56324.jpg'
//   },
//   {
//     id: uuidv4(),
//     title: 'Салат "Мимоза" классический',
//     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere diam non fringilla auctor. Nunc eget rutrum dui. Cras sit amet ligula tristique, imperdiet tellus id, ullamcorper metus. Fusce leo ante, mattis ut tortor a, tincidunt bibendum elit. Donec malesuada, libero vitae efficitur aliquet, elit sapien condimentum erat, nec lobortis ante sem non ex. Sed nec feugiat leo. Cras aliquet magna mattis ex aliquet, eget viverra dui maximus. Mauris quis urna tristique, ultricies turpis sed, ultrices urna. Fusce gravida, risus ac viverra mattis, dolor tellus rutrum neque, sed dictum quam urna accumsan ante. Vestibulum tincidunt pellentesque dolor quis ultrices. Fusce aliquam ligula in lobortis interdum.',
//     category: 'Салаты',
//     image: 'https://img.povar.ru/list/db/73/90/e5/salat_quotmimozaquot_klassicheskii-32912.JPG'
//   },
//   {
//     id: uuidv4(),
//     title: 'Соус "Цезарь"',
//     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia purus lorem, ac mattis augue dignissim id. Nullam vestibulum finibus mauris, ac ultrices odio luctus non. Mauris posuere sapien id tempus ullamcorper. Mauris eu mi ac leo egestas rhoncus eu in est. Suspendisse id placerat mauris. Cras aliquet dui elementum, convallis mauris et, pulvinar elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ullamcorper sollicitudin mollis. Integer convallis ultricies dictum. Vivamus posuere a tortor quis faucibus. Aliquam sagittis augue vitae turpis lobortis lacinia. Aliquam lacinia risus vel velit pulvinar, in hendrerit ipsum gravida. Donec erat arcu, sodales in sodales ut, mollis vel tortor. Suspendisse tempor sodales pulvinar. Sed augue ex, placerat ut elit non, elementum blandit dolor.',
//     category: 'Соусы',
//     image: 'https://img.povar.ru/list/26/3b/0b/82/sous_quotcezarquot-44734.jpg'
//   },
//   {
//     id: uuidv4(),
//     title: 'Пирожковое тесто',
//     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pharetra metus tellus, ac vehicula erat vehicula non. Morbi id cursus leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam lobortis, est vel tempus dapibus, risus nibh eleifend odio, eget aliquam urna risus eget justo. Aliquam erat volutpat. Quisque eu tristique diam. Suspendisse nibh lorem, pretium id aliquet vel, accumsan eu nunc. Praesent auctor, ligula at bibendum porttitor, lacus mi mollis nisl, vitae dapibus nulla sem sed risus. Maecenas tincidunt, turpis quis iaculis egestas, enim turpis maximus massa, sit amet venenatis augue augue non risus. Vivamus at odio dapibus, vehicula neque a, ultrices erat. Etiam a odio erat. Vestibulum sapien arcu, gravida eu rhoncus vel, viverra quis dolor. Nam vitae tristique nisi, eu finibus augue. Sed in feugiat diam. Quisque convallis, nisi a pharetra eleifend, elit lectus vestibulum urna, vitae placerat augue purus non lacus. Nam et ornare neque, ornare sagittis libero.',
//     category: 'Закуски',
//     image: 'https://img.povar.ru/list/8a/e1/3c/f9/pirojkovoe_testo-4016.jpg'
//   },
// ]

const initialState = {
  recipes: recipes,
  recipesRequest: false,
  recipesRequestFailed: false,
};

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    recipesRequestAction: (state) => {
      state.recipesRequest = true;
      state.recipesRequestFailed = false;
    },
    recipesRequestSuccessAction: (state, action) => {
      state.recipes = action.payload;
      state.recipesRequest = false;
    },
    recipesRequestFailedAction: (state) => {
      state.recipesRequestFailed = true;
      state.recipesRequest = false;
    },
  }

});



const {actions, reducer} = recipesSlice;


export const {
  recipesRequestAction,
  recipesRequestSuccessAction,
  recipesRequestFailedAction,


} = actions;

export default reducer
