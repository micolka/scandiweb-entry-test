import './cart.css';

import React from 'react';
import { connect } from 'react-redux';

import { getProductsFromCart } from '../../redux/selectors';
import { ProductForCart } from '../../components';

class CartPage extends React.Component {

  render () {
    const {  selectedProducts } = this.props;

    return (
      <div className="cart-page_wrapper">
        <span className="cart-page_title">Cart</span>
        <div className="cart-page_container">
          {
            selectedProducts.map(product => {
              return <div key={product.productId}>
                <div className="separation_line"></div>
                <ProductForCart product={product} />
              </div>
            })
          }
          {selectedProducts.length === 0 && <span>The cart is empty. Add some products!</span>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => getProductsFromCart(state);

export default connect(mapStateToProps)(CartPage);
