import './counter.css';

import React from 'react';
import { connect } from 'react-redux';

import { increaseProductCount, decreaseProductCount } from '../../redux/actions';

class Counter extends React.Component {

  render () {
    const {  productsCount,  productId} = this.props;

    return (
      <div className="cart_counter">
        <div className="counter_btn" onClick={() => {this.props.increaseProductCount(productId)}}>
          <span>+</span>
        </div>
        <span>{productsCount}</span>
        <div className="counter_btn" onClick={() => {this.props.decreaseProductCount(productId)}}>
          <span>-</span>
        </div>
      </div>
    );
  }
}

export default connect(null, {increaseProductCount, decreaseProductCount})(Counter);
