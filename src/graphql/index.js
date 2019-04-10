import ApolloClient from "apollo-boost";
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
    uri: "https://aiesec-graphql-cf56emh18.now.sh/",
    cache: new InMemoryCache(),
  });

export default client
export { client }