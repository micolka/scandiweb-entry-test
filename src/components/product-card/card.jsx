import './card.css';
import cart from '../../assets/images/cart.png'

import React from 'react';

class ProductCard extends React.Component {

  state = {
    hideCartIcon: true,
  }
    

  render () {
    const { product } = this.props;

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
          <span className="product-price">${product.prices[0].amount}</span>
        </div>
        <div className={`cart-icon_wrapper ${this.state.hideCartIcon ? 'hide-cart-icon' : 'show-cart-icon'}`}>
          <img src={cart} alt="cart" />
        </div>
      </div>
    );
  }
  
}

export default ProductCard;