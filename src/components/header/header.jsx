import './header.css';
import logo from '../../assets/images/a-logo.png'

import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { MiniCart, Currency, NavMenu } from '../index';
import { closeMiniCart } from '../../redux/actions';

class Header extends React.Component {

  render () {
    return (
      <div className="header_wrapper">
          <NavMenu />
          <div className="header-logo_wrapper">
            <Link to="/" onClick={() => {this.props.closeMiniCart()}}>
              <img src={logo} alt="a-logo" />
            </Link>              
          </div>
          <div className="header-actions_wrapper">
            <Currency />
            <MiniCart />
          </div>
      </div>
    );
  }
}

export default connect(null, {closeMiniCart})(Header);
