import React, { useState } from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { Router, Link } from "@reach/router";
import DetailsWithErrorBoundary from "./Details";
import ThemeContext from "./ThemeContext";

const App = () => {
  const themeHook = useState("peru");

  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <header>
          <Link to="/">Adopt Me</Link>
        </header>

        <Router>
          <SearchParams path="/" />
          <DetailsWithErrorBoundary path="/details/:id" />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

render(React.createElement(App), document.getElementById("root"));
