import './ingredients-searcher.scss';
import React from 'react';
const IngredientsSearcher = () => {
  return (
    <label className="ingredients-searcher">
      <input
        type="text"
        placeholder="Название ингредиента"
        className="ingredients-searcher__input"
      />
      <span className="ingredients-searcher__icon"/>
    </label>
  );
};

export default IngredientsSearcher;
