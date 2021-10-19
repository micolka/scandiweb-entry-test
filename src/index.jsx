import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { PLPWithData } from './pages';
import { Header } from './components';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <ApolloProvider client={client}>
      <PLPWithData />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
