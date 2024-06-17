import React from "react";
import BookList from "./components/BookList";
import { ThemeProvider } from "@mui/material/styles";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { theme } from "./styles";
import "./App.css";

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:4000/graphql" }),
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <BookList />
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
