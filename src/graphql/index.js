import ApolloClient from "apollo-boost";
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
    uri: "https://aiesec-graphql-p0x0jtmbe.now.sh/",
    cache: new InMemoryCache(),
  });

export default client
export { client }