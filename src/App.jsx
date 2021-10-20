import React from 'react';

import { ProductListing, ProductDescription, Cart } from './pages';
import { Header } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {

  render () {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={ProductListing} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/product/:id' component={ProductDescription} />
          <Route exact path='*' component={ProductListing} />
        </Switch>
      </Router>
    );
  }
}

export default App;