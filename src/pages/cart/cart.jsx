import './cart.css';
import trash from '../../assets/images/trash.png'

import React from 'react';
import { connect } from 'react-redux';

import { getProductsFromCart } from '../../redux/selectors';
import { 
  increaseProductCount, decreaseProductCount, deleteProductFromCart 
} from '../../redux/actions';
import { Price, Attribute, Counter, Slider } from '../../components';

class CartPage extends React.Component {

  render () {
    const {  selectedProducts } = this.props;

    return (
      <div className="cart-page_wrapper">
        <span className="cart-page_title">Cart</span>
        <div className="cart-page_container">
          {
            selectedProducts.map(product => {
              const { productId, name, brand, prices, attributes, productsCount, gallery } = product;
              return <div key={productId}>
                <div className="separation_line"></div>
                <div className="cart-page_product-container">
                  <div className="cart-page_product-info">
                    <span className="cart-page_product_name">{name}</span>
                    <span className="cart-page_product_brand">{brand}</span>
                    <Price prices={prices} />
                    <div className="cart-page_attr_container">
                      {attributes.map(attribute => <Attribute attribute={attribute} key={attribute.id} productId={productId}/>)}
                    </div>
                  </div>
                  <div className="cart-page_nav-wrapper">
                    <Counter productsCount={productsCount}  productId={productId} />
                    <Slider gallery={gallery} name={name} />
                    <div className="trash-icon-wrapper">
                      <img src={trash} alt="trash" onClick={() => {this.props.deleteProductFromCart(productId)}}/>
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

export default connect(mapStateToProps, {
  increaseProductCount, decreaseProductCount, deleteProductFromCart
})(CartPage);
