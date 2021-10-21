import './product-listing.css';

import React from 'react';
import { gql } from "@apollo/client";
import { graphql } from '@apollo/client/react/hoc';

import ProductListing from './product-listing'

class PLCategory extends React.Component {

  render () {
    const {error, loading, category} = this.props.data;

    if (error) return <div>Error: {error}</div>;
    if (loading) return <div>isLoading...</div>;


    return <ProductListing category={category} />;

  }
}

const withCategoriesQuery = graphql(gql`
  query category($input: CategoryInput) {
    category(input: $input) {
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
        brand
      }
    }
  }
`  ,
{ 
  options: (props) => ({
    variables: {
      input: {title: props.title}
    }
  }) 
});

const PLCategoryWithData = withCategoriesQuery(PLCategory);

export default PLCategoryWithData;
