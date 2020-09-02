import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";

import Title from "./components/Title";
import Timer from "./components/Timer";

import { users } from "./Controller/FakeData";

function MainComponent() {
  return (
    <div>
      <Title />
      <Timer />
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Company</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => {
              return <User id={user.id} name={user.name} company={user.company.name} key={user.id} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function User(props) {
  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.name}</td>
      <td>{props.company}</td>
    </tr>
  );
}

setInterval(() => ReactDOM.render(<MainComponent />, document.getElementById("app")), 1000);

// loading only js on dev server
// if (module.hot) module.hot.accept();
