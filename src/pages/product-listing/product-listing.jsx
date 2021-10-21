import './product-listing.css';

import React from 'react';

import { ProductCard } from '../../components';

class ProductListing extends React.Component {

  render () {
    const { category } = this.props;

    return (
      <div className="plp-wrapper">
        <span className="plp-category-name">Category: {category.name}</span>
        <div className="plp-products_container">
          {category.products.map(((el) => <ProductCard product={el} key={el.id} />))}
        </div>
      </div>
    );
  }
}

export default ProductListing;
