import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import { BatchHttpLink } from "apollo-link-batch-http";

import App from "./App";

const uri = "https://countries.trevorblades.com";
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new BatchHttpLink({ uri }),
  uri,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
