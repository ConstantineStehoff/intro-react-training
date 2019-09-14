import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { Router, Link } from "@reach/router";
import { Provider } from "react-redux";
import DetailsWithErrorBoundary from "./Details";
import ThemeContext from "./ThemeContext";
import store from "./Store";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <header>
          <Link to="/">Adopt Me</Link>
        </header>

        <Router>
          <SearchParams path="/" />
          <DetailsWithErrorBoundary path="/details/:id" />
        </Router>
      </div>
    </Provider>
  );
};

render(React.createElement(App), document.getElementById("root"));
