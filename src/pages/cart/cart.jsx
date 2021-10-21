import './cart.css';

import React from 'react';
import { connect } from 'react-redux';

import { getProductsFromCart } from '../../redux/selectors';
import { Price, Attribute } from '../../components';

class CartPage extends React.Component {

  render () {
    const {  selectedProducts } = this.props;
    console.log(selectedProducts);

    return (
      <div className="cart-page_wrapper">
        <span className="cart-page_title">Cart</span>
        <div className="cart-page_container">
          {
            selectedProducts.map(product => {
              const { id, name, brand, prices, attributes, productsCount, gallery } = product;
              return <div key={id}>
                <div className="separation_line"></div>
                <div className="cart-page_product-container">
                  <div className="cart-page_product-info">
                    <span className="cart-page_product_name">{name}</span>
                    <span className="cart-page_product_brand">{brand}</span>
                    <Price prices={prices} />
                    <div className="cart-page_attr_container">
                      {attributes.map(attribute => <Attribute attribute={attribute} key={attribute.id} />)}
                    </div>
                  </div>
                  <div className="cart-page_nav-wrapper">
                    <div className="cart-page_counter">
                      <div className="counter_btn"><span>+</span></div>
                      <span>{productsCount}</span>
                      <div className="counter_btn"><span>-</span></div>
                    </div>
                    <div className="cart-page_slider">
                      <img src={gallery[0]} alt={name} />
                    </div>
                  </div>
                </div>
              </div>
            })
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => getProductsFromCart(state);

export default connect(mapStateToProps)(CartPage);
