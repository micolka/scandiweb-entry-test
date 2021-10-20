import './card.css';
import cart from '../../assets/images/cart.png'

import React from 'react';
import { connect } from 'react-redux';

import { CURRENCIES_SYMBOLS } from '../../constants';
import { getCurrency } from '../../redux/selectors';

class ProductCard extends React.Component {

  state = {
    hideCartIcon: true,
  }
    

  render () {
    const { product } = this.props;
    const currencySymbol = CURRENCIES_SYMBOLS[this.props.currency];
    const { amount } = product.prices.find(el => el.currency === this.props.currency)

    return (
      <div 
        className="product-card_wrapper" 
        onMouseEnter={() => {this.setState({hideCartIcon: false})}}
        onMouseLeave={() => {this.setState({hideCartIcon: true})}}
      >
        <div className="product-image">
          <img src={product.gallery[0]} alt={product.name} />
        </div>
        <div className="product-content">
          <span className="product-name">{product.name}</span>
          <span className="product-price">{`${currencySymbol}${amount}`}</span>
        </div>
        <div className={`cart-icon_wrapper ${this.state.hideCartIcon ? 'hide-cart-icon' : 'show-cart-icon'}`}>
          <img src={cart} alt="cart" />
        </div>
      </div>
    );
  }
  
}

const mapStateToProps = state => getCurrency(state);

export default connect(mapStateToProps)(ProductCard);
