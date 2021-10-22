import './card.css';
import cart from '../../assets/images/cart.png'

import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { addProductToCart } from '../../redux/actions';
import { CURRENCIES_SYMBOLS } from '../../constants';
import { getCurrency } from '../../redux/selectors';

class ProductCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hideCartIcon: true,
      allowRedirect: false,
    }
  }

  handleMouseInteraction(param) {
    if (this.props.product.inStock) this.setState({hideCartIcon: param});
  }
  
  handleShowProduct() {
    this.setState({ allowRedirect: true });    
  }

  handleAddToCart(e) {
    e.stopPropagation();
    this.props.addProductToCart(this.props.product);
  }

  render () {
    const { product } = this.props;
    const currencySymbol = CURRENCIES_SYMBOLS[this.props.currency];
    const { amount } = product.prices.find(el => el.currency === this.props.currency);

    if (this.state.allowRedirect) {
      return <Redirect to={`/product/${product.id}`} />
    };
    
    return (
      <div 
        className="product-card_wrapper"
        onMouseEnter={() => {this.handleMouseInteraction(false)}}
        onMouseLeave={() => {this.handleMouseInteraction(true)}}
        onClick={() => {this.handleShowProduct()}}
      >
        <div className="product-image">
          <img src={product.gallery[0]} alt={product.name} />
        </div>
        <div className={`product-content ${!product.inStock ? 'grey-text' : ''}`}>
          <span className="product-name">{product.name}</span>
          <span className="product-price">{`${currencySymbol}${amount}`}</span>
        </div>
        <div className={`cart-icon_wrapper ${this.state.hideCartIcon ? 'hide-cart-icon' : 'show-cart-icon'}`}>
          <img src={cart} alt="cart" onClick={(e) => {this.handleAddToCart(e)}}/>
        </div>
        {
          !product.inStock && <>
            <div className="out-of-stock_overlay"></div>
            <div className="out-of-stock_message"><span>out of stock</span></div>
          </>
        }
      </div>
    );
  }
  
}

const mapStateToProps = state => {
  return getCurrency(state)
};

export default connect(mapStateToProps, {addProductToCart})(ProductCard);
