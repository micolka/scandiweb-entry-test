import React from 'react';
import ballTriangle from "../../assets/images/ball-triangle.svg";


class Preloader extends React.Component {
  render () {
    return <img src={ballTriangle} alt="preloader" />
  }
}

export default Preloader;
