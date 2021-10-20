import './attribute.css';

import React from 'react';

class Attribute extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     hideCartIcon: true,
  //     allowRedirect: false,
  //   }
  // }

  render () {
    const { attribute } = this.props;

    // console.log(attribute);
  
    return (
      <div className="attribute_wrapper"> 
        <span className="attribute_name">{attribute.name}</span>
        <div className="attribute-items_wrapper">
          {attribute.items.map(item => {
            const divStyle = {}
            if (attribute.type === 'swatch') {
              divStyle.backgroundColor = item.value;
            }
            return <div key={item.id} className="attribute-item_container" style={divStyle}>
              {attribute.type === 'text' && <span className="attribute-item_name">
                {item.displayValue}
              </span>}
            </div>
          })}
        </div>
      </div>
    );
  }
  
}

export default Attribute;
