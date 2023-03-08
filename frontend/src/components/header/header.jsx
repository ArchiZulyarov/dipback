import './header.scss';
import {Link} from "react-router-dom";
import Navigation from "../navigation/navigation";
import React from 'react';

import logo from '../../assets/images/logo.png';
const Header = () => {
  return (<header className="header">
    <div className="col-1">
      <Link to="/" className="header__link"><img className={'img-fluid'} src={logo} alt=""/> </Link>
    </div>
    <Navigation/>
  </header>);
};

export default Header;
