import './header.css';
import logo from '../../assets/images/a-logo.png'

import React from 'react';

import { Currency } from '../index'

class Header extends React.Component {

    render () {
  
      return (
        <div className="header_wrapper">
            <div className="header-menu_wrapper">
              <ul>
                <li className="active-menu-item">women</li>
                <li>men</li>
                <li>kids</li>
              </ul>
            </div>
            <div className="header-logo_wrapper">
              <img src={logo} alt="a-logo" />
            </div>
            <div className="header-actions_wrapper">
              <Currency />
              <div>cart</div>
            </div>
        </div>
      );
    }
  
}

export default Header;
