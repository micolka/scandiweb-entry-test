import './attribute.css';

import React from 'react';
import { connect } from 'react-redux';

import { getCheckedAttributes } from '../../redux/selectors';
import { setAttribute, clearAttributes } from '../../redux/actions';

class Attribute extends React.Component {

  componentDidMount() {
    const {checkedAttributes, attribute} = this.props;
    if (!checkedAttributes.hasOwnProperty(attribute.name)) {
      const {name, items} = attribute;
      this.props.setAttribute({ name, value: items[0].id });
    }
  }

  componentWillUnmount() {
    this.props.clearAttributes();
  }

  handleAttributeCheck(name, value) {
    this.props.setAttribute({ name, value });
  }

  render () {
    const { attribute, checkedAttributes } = this.props;
 
    return (
      <div className="attribute_wrapper"> 
        <span className="attribute_name">{attribute.name}</span>
        <div className="attribute-items_wrapper">
          {attribute.items.map(item => {
            const checkedAttribute = checkedAttributes[attribute.name] === item.id ? 'checked_attribute' : '';
            const divStyle = {}
            if (attribute.type === 'swatch') {
              divStyle.backgroundColor = item.value;
            }
            return (
              <div 
                key={item.id} 
                className={`attribute-item_container ${checkedAttribute}`}
                style={divStyle} 
                onClick={() =>{this.handleAttributeCheck(attribute.name, item.id )}}
              >
                {attribute.type === 'text' && 
                  <span className="attribute-item_name">
                    {item.displayValue}
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
  return getCheckedAttributes(state)
};

export default connect(mapStateToProps, { setAttribute, clearAttributes })(Attribute)