import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';

import ApolloClient from 'apollo-boost';
import AppContainer from '../scenes/AppContainer';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
});

export default (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  </ApolloProvider>
);
