import './navigation.scss';
import {NavLink} from "react-router-dom";
import React from 'react';
const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__list-item">
          <NavLink
            end
            to="/"
            className={({ isActive }) => isActive ? 'navigation__link navigation__link_active' : 'navigation__link' }
          >
            Рецепты
          </NavLink>
        </li>
        <li className="navigation__list-item">
          <NavLink
            to="constructor"
            className={({ isActive }) => isActive ? 'navigation__link navigation__link_active' : 'navigation__link' }
          >
            Конструктор
          </NavLink>
        </li>
        <li className="navigation__list-item">
          <NavLink
            to="about"
            className={({ isActive }) => isActive ? 'navigation__link navigation__link_active' : 'navigation__link' }
          >
            О нас
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
