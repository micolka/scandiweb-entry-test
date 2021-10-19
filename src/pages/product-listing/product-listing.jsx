import React from 'react';
import './product-listing.css';

import {
  gql
} from "@apollo/client";
import { graphql } from '@apollo/client/react/hoc';

class PLP extends React.Component {

  render () {
    console.log(this.props.data)
    const {error, loading, category} = this.props.data;

    if (error) return <div>Error: {error}</div>
    if (loading) return <div>isLoading...</div>

    return (
      <div className="plp-wrapper">
        <span className="plp-category-name">Category: {category.name}</span>
        <div className="plp-products_container">
          {category.products.map(((el) => {
            return <div key={el.id} className="product-card_wrapper">
                <div className="product-image">
                  <img src={el.gallery[0]} alt={el.name} />
                </div>
                <div className="product-content">
                  <span className="product-name">{el.name}</span>
                  <span className="product-price">${el.prices[0].amount}</span>
                </div>
              </div>
          }))}
        </div>
      </div>
    );
  }
}

const withCategoriesQuery = graphql(gql`
query categories {
  category {
    name
    products {
      id
      name
      inStock
      gallery
      category
      prices {
        currency
        amount
      }
    }
  }
}
`);

const PLPWithData = withCategoriesQuery(PLP)

export default PLPWithData;
