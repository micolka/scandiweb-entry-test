import './nav-menu.css';

import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { getCategories } from '../../redux/selectors';
import { setCurrentCategory, closeMiniCart } from '../../redux/actions';

class NavMenu extends React.Component {

  handleSetCategory(category) {
    if (this.props.currentCategory !== category) this.props.setCurrentCategory(category)
  }

  render () {
    const { categories, currentCategory } = this.props;

    return (
      <div className="header-menu_wrapper">
        <ul>
          {categories.map(el => {
            return <Link 
                    to="/" 
                    className={`header_link ${el === currentCategory && 'header_link-active'}`} 
                    key={el}>
              <li 
                className={`header-menu_item ${el === currentCategory && 'menu_item-active'}`}
                onClick={() => {
                  this.handleSetCategory(el);
                  this.props.closeMiniCart();
                }}
              >
                {el}
              </li>
            </Link>
          })}
        </ul>
      </div>   
    );
  }
}

const mapStateToProps = state => {
  return getCategories(state)
};

export default connect(mapStateToProps, { setCurrentCategory, closeMiniCart })(NavMenu);
