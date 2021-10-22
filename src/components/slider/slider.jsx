import './slider.css';

import React from 'react';

class Slider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      imgIndex: 0,
    }
  }

  nextIndex() {
    const index = this.state.imgIndex
    this.setState({ imgIndex: (index < this.props.gallery.length -1) ? index + 1 : 0 }) 
  }

  prevIndex() {
    const index = this.state.imgIndex
    this.setState({ imgIndex: index > 0 ? index - 1 : this.props.gallery.length -1 }) 
  }

  render () {
    const { gallery, name, mini } = this.props;
    return (
      <div className={mini ? "cart-page_slider-mini" : "cart-page_slider"}>
        <img src={gallery[this.state.imgIndex]} alt={name} />
        {
          gallery.length > 1 && !mini && <>
            <span className="slide-btn_left" onClick={() => {this.prevIndex()}}>&lt;</span>
            <span className="slide-btn_right" onClick={() => {this.nextIndex()}}>&gt;</span>
          </>
        }
      </div>
    );
  }
}

export default Slider;
