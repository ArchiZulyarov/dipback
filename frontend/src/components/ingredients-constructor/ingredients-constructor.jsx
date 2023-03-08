import './ingredients-constructor.scss';
import ConstructorIngredient from "../constructor-ingredient/constructor-ingredient";
import React from 'react';
const IngredientsConstructor = () => {
  return (
    <section className="ingredients-constructor">
      <header className="ingredients-constructor__header">
        <h2 className="ingredients-constructor__title">
          На кухне имеется:
        </h2>
        <span className="ingredients-constructor__count">
          Количество
        </span>
      </header>
      <ul className="ingredients-constructor__list">
        <ConstructorIngredient />
        <ConstructorIngredient />
        <ConstructorIngredient />
        <ConstructorIngredient />
        <ConstructorIngredient />
      </ul>
      <button className="ingredients-constructor__button">
        Показать рецепты
      </button>
    </section>
  );
};

export default IngredientsConstructor;
