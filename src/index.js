import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import configureStore from "./store";
import { maindata } from "./store/constants/main";

const client = new ApolloClient({
  uri:
    "https://api-eu-central-1.hygraph.com/v2/cl70ab2xb14um01ujcfhfcfvg/master?",
  cache: new InMemoryCache()
});

let DefaultData = {
  maindata: maindata
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={configureStore(DefaultData)}>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </Provider>
);
