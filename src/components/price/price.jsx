import './price.css';

import React from 'react';
import { connect } from 'react-redux';

import { CURRENCIES_SYMBOLS } from '../../constants';
import { getCurrency } from '../../redux/selectors';

class Price extends React.Component {

  render () {
    const { prices, currency, mini } = this.props;
    const currencySymbol = CURRENCIES_SYMBOLS[currency];
    const { amount } = prices.find(el => el.currency === this.props.currency)

    return (
      <div className="product-price_wrapper"> 
        <span className={mini ? "product-price_amount-mini" : "product-price_amount"}>
          {`${currencySymbol}${amount}`}
        </span>
      </div>
    );
  }
}

const mapStateToProps = state => getCurrency(state);

export default connect(mapStateToProps)(Price);
