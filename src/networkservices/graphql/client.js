import 'cross-fetch/polyfill';
import ApolloClient from 'apollo-boost'
const client = new ApolloClient({uri: 'https://graph.qa.f1.flexdrive.com/'})
export default client
