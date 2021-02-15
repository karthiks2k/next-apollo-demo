import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import fetch from 'cross-fetch';

const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                getContacts: {
                    keyArgs: false,
                    merge(existing = [], incoming) {
                        return [...existing, ...incoming];
                    },
                }
            }
        }
    }
});

export const apolloClient =
    new ApolloClient({
        ssrMode: typeof window === "undefined",
        link: new HttpLink({
            uri: process.env.graphQLUrl,
            fetch
        }),
        cache
    });