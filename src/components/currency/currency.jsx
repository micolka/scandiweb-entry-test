import './currency.css';
import vector from '../../assets/images/vector.png';

import React from 'react';
import { connect } from 'react-redux';
import { gql } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';

import { CURRENCIES_SYMBOLS } from '../../constants';
import { getCurrency } from '../../redux/selectors';
import { changeCurrency, closeMiniCart } from '../../redux/actions';

class Currency extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showOptionList: false,
    };
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  componentDidUpdate(prevProps) {
    const {currencies} = this.props.data;
    if (currencies) {
      if (prevProps.currency === '') {
        this.props.changeCurrency(currencies[0]);
      }
    }
  }

  handleClickOutside = e => {
    if (
      !e.target.classList.contains("custom-select-option") &&
      !e.target.classList.contains("selected-text")
    ) {
      this.setState({ showOptionList: false });
    }
  };

  handleListDisplay = () => {
    this.setState(prevState => {
      return { showOptionList: !prevState.showOptionList };
    });
  };

  handleOptionClick = e => {
    this.props.changeCurrency(e.target.getAttribute("data-name"));
    this.setState({ showOptionList: false });
  };

  render () {
    const { error, loading, currencies } = this.props.data;
    const { showOptionList } = this.state;

    if (error) return <div>Error: {error}</div>
    if (loading) return <div>isLoading...</div>

    return (
      <div className="custom-select-container" onClick={() => {this.props.closeMiniCart()}}>
        <div
          className="selected-text"
          onClick={this.handleListDisplay}
        >
        {CURRENCIES_SYMBOLS[this.props.currency]}
        <img src={vector} alt="vector" className={showOptionList ? "vector-icon_transform" : "vector-icon" } />
      </div>
      {showOptionList && (
        <ul className="select-options">
          {currencies.map(option => {
            return (
              <li
                className="custom-select-option"
                data-name={option}
                key={option}
                onClick={this.handleOptionClick}
              >
                {`${CURRENCIES_SYMBOLS[option]} ${option}`}
              </li>
            );
          })}
        </ul>
      )}
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

export default connect(mapStateToProps, { changeCurrency, closeMiniCart })(CurrencyWithData);
