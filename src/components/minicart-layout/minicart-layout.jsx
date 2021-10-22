import './minicart-layout.css';

import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { getProductsFromCart, getCurrency } from '../../redux/selectors';
import { toggleMiniCart } from '../../redux/actions';
import { ProductForCart } from '..';
import { calcFullPrice } from './utils';
import { CURRENCIES_SYMBOLS } from '../../constants';

class MiniCartLayout extends React.Component {

  componentDidMount() {
    document.body.style.overflow = "hidden";
  }

  componentWillUnmount() {
    document.body.style.overflow = "auto";
  }

  render () {
    const {  selectedProducts, currency } = this.props;
    const itemsCount = selectedProducts.length;

    return (
      <div className="cart-overlay_container">
        <div>
          <span className="cart-overlay_text">My bag, </span>
          <span className="cart-overlay-count_text">{itemsCount !== 1 ? `${itemsCount} items` : `1 item`}</span>
        </div>
        {
          selectedProducts.map(product => {
            return <ProductForCart product={product} key={product.productId} mini={true} />
          })
        }
        <div className="cart-summary_container">
          <span>Total</span>
          <span>{`${CURRENCIES_SYMBOLS[currency]} ${calcFullPrice(selectedProducts, currency)}`}</span>
        </div>
        <div className="cart-btn_container">
          <Link to="/cart">
            <button 
              className="cart-btn_view-bag" 
              onClick={() => {this.props.toggleMiniCart()}}
            >
              view bag
            </button>
          </Link>
          <button className="cart-btn_check-out">check out</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const selectedProducts = getProductsFromCart(state);
  const currency = getCurrency(state);
  return { ...selectedProducts, ...currency };
}

export default connect(mapStateToProps, {toggleMiniCart})(MiniCartLayout);
