import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me</h1>
      <Pet name="Luna" animal="dog" breed="Havanese" />
      <Pet name="Pepper" animal="bird" breed="Havanese" />
      <Pet name="Doink" animal="cat" breed="Mixed" />
    </div>
  );
};

render(React.createElement(App), document.getElementById("root"));
