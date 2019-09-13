import React, { useState, lazy, Suspense } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import ThemeContext from "./ThemeContext";

const DetailsWithErrorBoundary = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

const App = () => {
  const themeHook = useState("peru");

  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <header>
          <Link to="/">Adopt Me</Link>
        </header>
        <Suspense fallback={<h1>Loading Route...</h1>}>
          <Router>
            <SearchParams path="/" />
            <DetailsWithErrorBoundary path="/details/:id" />
          </Router>
        </Suspense>
      </div>
    </ThemeContext.Provider>
  );
};

render(React.createElement(App), document.getElementById("root"));
