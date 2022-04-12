import React from "react";
import App from "./App";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
  } from "@apollo/client";

  const client = new ApolloClient({
    uri: 'https://querymv.herokuapp.com',
    cache: new InMemoryCache()
  });

export default (
    <ApolloProvider client={client}>
      <App/>
    </ApolloProvider>
  );