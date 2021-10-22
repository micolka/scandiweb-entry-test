import './attribute.css';

import React from 'react';
import { connect } from 'react-redux';

import { getCheckedAttributes, getProductsFromCart } from '../../redux/selectors';
import { setAttribute, clearAttributes } from '../../redux/actions';

class Attribute extends React.Component {

  componentDidMount() {
    const {checkedAttributes, attribute, productId } = this.props;
    if (!productId) {
      if (!checkedAttributes.hasOwnProperty(attribute.name)) {
        const {name, items} = attribute;
        this.props.setAttribute({ name, value: items[0].id });
      }
    } 
  }

  componentWillUnmount() {
    this.props.clearAttributes();
  }

  handleAttributeCheck(name, value) {
    if (!this.props.productId) this.props.setAttribute({ name, value });
  }

  render () {
    let { attribute, checkedAttributes, productId, selectedProducts, mini } = this.props;

    if (productId) {
      const product = selectedProducts.find(el => el.productId === productId);
      checkedAttributes = product.checkedAttributes;
    }

    return (
      <div className={`attribute_wrapper ${mini && "attribute_wrapper-mini"}`}> 
        <span className={mini ? "attribute_name-mini" : "attribute_name"}>{attribute.name}</span>
        <div className={mini ? "attribute-items_wrapper-mini" : "attribute-items_wrapper"}>
          {attribute.items.map(item => {
            const checkedAttr = checkedAttributes[attribute.name] === item.id ? 'checked_attribute' : '';
            const disabledAttr = productId ? 'disabled_attribute' : '';
            const divStyle = {}
            if (attribute.type === 'swatch') {
              divStyle.backgroundColor = item.value;
            }
            return (
              <div 
                key={item.id} 
                className={`attribute-item_container ${disabledAttr} ${checkedAttr} ${mini && 'mini-item_container'}`}
                style={divStyle} 
                onClick={() =>{this.handleAttributeCheck(attribute.name, item.id )}}
              >
                {attribute.type === 'text' && 
                  <span className={mini ? "attribute-item_name-mini" : "attribute-item_name"}>
                    {item.value}
                  </span>}
              </div>
            )
          })}
        </div>
      </div>
    );
  }
  
}

const mapStateToProps = state => {
  const checkedAttributes = getCheckedAttributes(state);
  const cart = getProductsFromCart(state);
  return {...checkedAttributes, ...cart};
};

export default connect(mapStateToProps, { setAttribute, clearAttributes })(Attribute)
