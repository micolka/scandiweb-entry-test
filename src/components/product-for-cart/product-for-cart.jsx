import './product-for-cart.css';

import React from 'react';
import { connect } from 'react-redux';

import { getProductsFromCart } from '../../redux/selectors';
import { Price, Attribute, Counter, Slider } from '../../components';

class ProductForCart extends React.Component {

  render () {
    const { productId, name, brand, prices, attributes, productsCount, gallery } = this.props.product;
    const { mini } = this.props;
 
    return (
      <div className="cart_product-container">
        <div className="cart_product-info">
          <span className={mini ? "cart_product_name-mini" : "cart_product_name"}>{name}</span>
          <span className={mini ? "cart_product_name-mini" : "cart_product_brand"}>{brand}</span>
          <Price prices={prices} mini={mini} />
          <div className="cart_attr_container">
            {attributes.map(attribute => 
              <Attribute attribute={attribute} key={attribute.id} productId={productId} mini={mini} />
            )}
          </div>
        </div>
        <div className={mini ? "cart_nav-wrapper-mini" : "cart_nav-wrapper"}>
          <Counter productsCount={productsCount}  productId={productId} mini={mini} />
          <Slider gallery={gallery} name={name} mini={mini} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => getProductsFromCart(state);

export default connect(mapStateToProps)(ProductForCart);
