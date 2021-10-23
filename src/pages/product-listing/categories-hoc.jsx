import './product-listing.css';

import React from 'react';
import { connect } from 'react-redux';
import { gql } from "@apollo/client";
import { graphql } from '@apollo/client/react/hoc';

import ProductListing from './product-listing'
import { getCategories } from '../../redux/selectors';
import { setCategories } from '../../redux/actions';
import PLCategory from './category-hoc';
import { Preloader } from '../../components';

class PLCategories extends React.Component {

  componentDidUpdate(prevProps) {
    const { loading, category } = this.props.data;
    if (loading !== prevProps.data.loading) {
      const categories = ['all'];
      category.products.forEach(el => {
        if (!categories.includes(el.category)) categories.push(el.category);
      })
      this.props.setCategories(categories);
    }
  }

  render () {
    const {error, loading, category} = this.props.data;
    const { currentCategory } = this.props;

    if (error) return <div>Error: {error}</div>;
    if (loading) return <div className="plp-preloader_wrapper"><Preloader /></div>


    if (currentCategory === 'all') {
      return <ProductListing category={category} />;
    } else {
      return <PLCategory title={currentCategory} />
    }
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
`);

const PLPWithData = withCategoriesQuery(PLCategories);

const mapStateToProps = state => {
  return getCategories(state)
};

export default connect(mapStateToProps, { setCategories })(PLPWithData);
