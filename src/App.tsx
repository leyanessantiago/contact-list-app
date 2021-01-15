import React from 'react';
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost';
import Contacts from './pages/Contacts';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  onError: ({graphQLErrors, networkError}) => {
    console.log('graphqlErrors', graphQLErrors);
    console.log('networkErrors', networkError);
  },
});

function App() {
  return (
      <ApolloProvider client={client}>
          <Contacts />
      </ApolloProvider>
  );
}

export default App;
