import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_DRUPAL_GRAPHQL_ENDPOINT,
});

// Server-side authentication (client credentials flow)
export const getServerSideClient = () => {
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        Authorization: `Basic ${Buffer.from(
          `${process.env.DRUPAL_CLIENT_ID}:${process.env.DRUPAL_CLIENT_SECRET}`
        ).toString('base64')}`,
      },
    };
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

// Client-side authentication (password grant)
export const getClientSideClient = () => {
  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('access_token');
    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

export const getClient = () => {
  return typeof window === 'undefined'
    ? getServerSideClient()
    : getClientSideClient();
};
