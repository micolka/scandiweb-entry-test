import './product-description.css';

import React from 'react';
import { gql } from "@apollo/client";
import { graphql } from '@apollo/client/react/hoc';
import { withRouter } from 'react-router-dom';

import { Attribute, Price } from '../../components'

class ProductDescription extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      imgIndex: 0,
    }
  }

  handleAddToCart() {
    console.log('add to cart');
  }

  render () {
    const { error, loading, product } = this.props.data;

    if (error) return <div>Error: {error}</div>
    if (loading) return <div>isLoading...</div>

    const { gallery, name, brand, attributes, prices, description } = product;
    const innerDescription = { __html: description };
    
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
          <div className="pdp-product_attributes">
            {attributes.map(attribute => <Attribute attribute={attribute} key={attribute.id} />)}
          </div>
          <Price prices={prices} />
          <button className="add-product_btn" onClick={() => {this.handleAddToCart()}}>add to cart</button>
          <div className="pdp-product_description" dangerouslySetInnerHTML={innerDescription}></div>
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


export default withRouter(PDPWithData);
