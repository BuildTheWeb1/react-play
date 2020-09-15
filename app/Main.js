import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";

import Title from "./components/Title";
import Timer from "./components/Timer";
import Button from "./components/Button";

function MainComponent() {
  return (
    <div>
      <Title />
      <Timer />
      <Button />
    </div>
  );
}

ReactDOM.render(<MainComponent />, document.getElementById("app"));

// loading only js on dev server
// if (module.hot) module.hot.accept();
