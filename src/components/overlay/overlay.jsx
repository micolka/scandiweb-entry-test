import './overlay.css';

import React from 'react';
import { connect } from 'react-redux';

import { getAppSettings } from '../../redux/selectors';
import { toggleMiniCart } from '../../redux/actions';

class Overlay extends React.Component {

  render () {
    const { isMiniCartOpened } = this.props;
    return (
      <>
        {
          isMiniCartOpened && 
            <div className="app-overlay_wrapper" onClick={() => {this.props.toggleMiniCart()}}></div>
        }
      </>
    );
  }
}

const mapStateToProps = state => getAppSettings(state);

export default connect(mapStateToProps, { toggleMiniCart })(Overlay);
