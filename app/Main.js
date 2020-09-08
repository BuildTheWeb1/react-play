import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";

import Title from "./components/Title";
import Timer from "./components/Timer";

function MainComponent() {
  return (
    <div>
      <Title />
      <Timer />
    </div>
  );
}

ReactDOM.render(<MainComponent />, document.getElementById("app"));

// loading only js on dev server
// if (module.hot) module.hot.accept();
