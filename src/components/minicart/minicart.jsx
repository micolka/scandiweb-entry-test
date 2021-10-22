import './minicart.css';
import cartEmpty from '../../assets/images/cart-empty.png'

import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { getProductsFromCart } from '../../redux/selectors';

class MiniCart extends React.Component {

  render () {
    const {  selectedProducts } = this.props;
    // console.log(selectedProducts);

    return (
      <div className="cart-component_wrapper">
        <Link to="/cart">
          <img src={cartEmpty} alt="cart" /> 
          <div className="goods-counter">
            <span>{selectedProducts.length}</span>
          </div>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => getProductsFromCart(state);

export default connect(mapStateToProps)(MiniCart);
