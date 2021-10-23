import './App.css';
import React from 'react';

import { ProductListing, ProductDescription, Cart } from './pages';
import { Header, Overlay } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {

  render () {
    return (
      <Router>
        <Header />
        <div className="app-main-content_wrapper">
          <Switch>
            <Route exact path='/' component={ProductListing} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/product/:id' component={ProductDescription} />
            <Route exact path='*' component={ProductListing} />
          </Switch>
          <Overlay />
        </div>
      </Router>
    );
  }
}

export default App;
