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
              <th scope="col">Title</th>
              <th scope="col">Body</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => {
              return <User id={user.id} title={user.title} body={user.body} key={user.id} />;
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
      <td>{props.title}</td>
      <td>{props.body}</td>
    </tr>
  );
}

setInterval(() => ReactDOM.render(<MainComponent />, document.getElementById("app")), 1000);

// loading only js on dev server
// if (module.hot) module.hot.accept();
