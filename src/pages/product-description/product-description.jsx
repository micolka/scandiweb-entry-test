import './product-description.css';

import React from 'react';
import dompurify from 'dompurify';
import { connect } from 'react-redux';
import { gql } from "@apollo/client";
import { graphql } from '@apollo/client/react/hoc';
import { withRouter } from 'react-router-dom';

import { Attribute, Price } from '../../components';
import { addProductToCart } from '../../redux/actions';
import { getCheckedAttributes } from '../../redux/selectors';
 
class ProductDescription extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      imgIndex: 0,
    }
  }

  handleAddToCart() {
    const { data,checkedAttributes } = this.props;
    this.props.addProductToCart({...data.product, checkedAttributes});
  }

  render () {
    const { error, loading, product } = this.props.data;

    if (error) return <div>Error: {error}</div>
    if (loading) return <div>isLoading...</div>

    const { gallery, inStock, name, brand, attributes, prices, description } = product;
    
    // Use DOMPurify to prevent potential XSS
    const sanitizedDescription = dompurify.sanitize(description);
    const innerHTML = { __html: sanitizedDescription };
    
    return (
      <div className="pdp-wrapper">
        <div className="pdp-gallery_small">
          {
            gallery.map((el, idx) => {
              return <div className="pdp-gallery-image_container" key={el}>
                <img src={el} alt={name + idx} onClick={() => {this.setState({imgIndex: idx})}} />
              </div>
            })
          }
        </div>
        <div className="pdp_main-image">
          <img src={gallery[this.state.imgIndex]} alt={name} />
        </div>
        <div className="pdp-product_info">
          <span className="pdp-product_name">{name}</span>
          <span className="pdp-product_brand">{brand}</span>
          {inStock && <div className="pdp-product_attributes">
            {attributes.map(attribute => <Attribute attribute={attribute} key={attribute.id} />)}
          </div>}
          <span className="product-price_text">price:</span>
          <Price prices={prices} />
          <button 
            className={`add-product_btn ${!inStock && 'disabled_btn'}` }
            onClick={() => {this.handleAddToCart()}}
            disabled={!inStock}
          >
            {inStock ? 'add to cart' : 'out of stock'}
          </button>
          <div className="pdp-product_description" dangerouslySetInnerHTML={innerHTML}></div>
        </div>
      </div>
    );
  }
}

const withProductQuery = graphql(gql`
  query product($id: String!) {
    product(id: $id) {
      id
      name
      inStock
      gallery
      description
      category
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
      prices {
        currency
        amount
      }
      brand
    }
  }`
  ,
  { 
    options: (props) => ({
      variables: {
        id: props.match.params.id
      }
    }) 
  }
);

const PDPWithData = withProductQuery(ProductDescription);
const PDPWithRouter = withRouter(PDPWithData);

const mapStateToProps = state => {
  return getCheckedAttributes(state)
};

export default connect(mapStateToProps, {addProductToCart})(PDPWithRouter);
