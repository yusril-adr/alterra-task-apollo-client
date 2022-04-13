import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_URL,
    headers: {
        'x-hasura-admin-secret': process.env.REACT_APP_APOLLO_KEY,
    },
    cache: new InMemoryCache(),
});

export default client;