import './recipe-card.scss';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import React from 'react';
const RecipeCard = ({data}) => {
  const {title, text, image, category, id} = data;

  return (
    <li className="recipe-card">
      <Link
        className="recipe-card__link"
        to={`/${id}`}
      >
        <img
          className="recipe-card__image"
          src={image}
          alt={title}
        />
        <div className="recipe-card__container">
          <div>
            <h3 className="recipe-card__title">{title}</h3>
            <p className="recipe-card__text">{text}</p>
          </div>
          <div className="recipe-card__wrapper">
            <span className="recipe-card__category">{category}</span>
            <span className="recipe-card__details">
              Подробнее
              <span className="recipe-card__details-icon"/>
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
};

RecipeCard.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.string,
    id: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string
  })
};

export default RecipeCard;
