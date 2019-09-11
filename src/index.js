import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import {Stoplight} from "./stoplight"

function App() {
  const [light, setLight] = React.useState("");

  return (
      <Stoplight light={light} onClick={light => setLight(light)} />
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
