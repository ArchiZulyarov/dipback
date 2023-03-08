import './constructor-ingredient.scss';
import React from 'react';
const ConstructorIngredient = () => {
  return (<li className="constructor-ingredient">
    <span className="constructor-ingredient__title">
      Наименование ингредиента
    </span>
    <div className="constructor-ingredient__container">
      <button className="constructor-ingredient__button constructor-ingredient__button_decrement"/>
      <span className="constructor-ingredient__count">12</span>
      <button className="constructor-ingredient__button constructor-ingredient__button_increment"/>
    </div>
  </li>);
};

export default ConstructorIngredient;
