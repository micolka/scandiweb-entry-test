import './currency.css';

import React from 'react';
import { connect } from 'react-redux';
import { gql } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';

import { CURRENCIES_SYMBOLS } from '../../constants';
import { getCurrency } from '../../redux/selectors';
import { changeCurrency } from '../../redux/actions';

class Currency extends React.Component {

  componentDidUpdate(prevProps) {
    const {currencies} = this.props.data;
    if (currencies) {
      if (prevProps.currency === '') {
        this.props.changeCurrency(currencies[0]);
      }
    }
  }

  handleChangeCurrency(e) {
    this.props.changeCurrency(e.target.value);
  }

  render () {
    const {error, loading, currencies} = this.props.data;

    if (error) return <div>Error: {error}</div>
    if (loading) return <div>isLoading...</div>

    return (
      <div>
        <select 
          value={this.props.currency} 
          onChange={this.handleChangeCurrency.bind(this)} 
          className="currency_select"
        >
          {currencies.map(el => {
            return <option key={el} value={el}>{`${CURRENCIES_SYMBOLS[el]} ${el}`}</option>
          })}
        </select>
      </div>
    );
  }
  
}

const withCurrenciesQuery = graphql(gql`
  query currencies {
    currencies
  }
`);

const CurrencyWithData = withCurrenciesQuery(Currency);

const mapStateToProps = state => {
  return getCurrency(state)
};

export default connect(mapStateToProps, { changeCurrency })(CurrencyWithData);
