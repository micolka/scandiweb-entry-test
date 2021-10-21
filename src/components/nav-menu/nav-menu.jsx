import './nav-menu.css';

import React from 'react';
import { connect } from 'react-redux';

import { getCategories } from '../../redux/selectors';
import { setCurrentCategory } from '../../redux/actions';

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
            return <li 
                     className={`header-menu_item ${el === currentCategory && 'menu_item-active'}`}
                     key={el}
                     onClick={() => {this.handleSetCategory(el)}}
                   >{el}</li>
          })}
        </ul>
      </div>   
    );
  }
}

const mapStateToProps = state => {
  return getCategories(state)
};

export default connect(mapStateToProps, { setCurrentCategory })(NavMenu);
