import './minicart.css';
import cartEmpty from '../../assets/images/cart-empty.png'

import React from 'react';
import { connect } from 'react-redux';

import { getProductsFromCart, getAppSettings } from '../../redux/selectors';
import { toggleMiniCart } from '../../redux/actions';
import { MiniCartLayout } from '../../components';

class MiniCart extends React.Component {

  render () {
    const {  selectedProducts, isMiniCartOpened } = this.props;

    return (
      <div className="cart-component_wrapper">
        <img src={cartEmpty} alt="cart" className="cart-icon" onClick={() => {this.props.toggleMiniCart()}} /> 
        <div className="goods-counter">
          <span>{selectedProducts.length}</span>
        </div>
        {isMiniCartOpened && <MiniCartLayout />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const selectedProducts = getProductsFromCart(state);
  const isMiniCartOpened = getAppSettings(state);
  return { ...selectedProducts, ...isMiniCartOpened };
}

export default connect(mapStateToProps, {toggleMiniCart})(MiniCart);
