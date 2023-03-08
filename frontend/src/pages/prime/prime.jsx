import './prime.scss';
import banner from '../../assets/images/banner.jpg';
import RecipeTypes from "../../components/recipe-types/recipe-types";
import RecipesList from "../../components/recipes-list/recipes-list";
import React from 'react';
const Prime = () => {
  return (
    <section className="prime">
      <img
        src={banner}
        alt="Баннер со слоганом и корзиной фруктов"
        className="prime__banner"
      />
      <RecipeTypes/>
      <RecipesList />
    </section>
  );
};

export default Prime;
