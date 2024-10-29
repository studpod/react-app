import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/', // URL публічного GraphQL API
  cache: new InMemoryCache(),
});

export default client;
