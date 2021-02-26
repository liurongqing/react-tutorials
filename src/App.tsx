import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HelloWorld from "./demo/hello-world";

import "./styles.css";

export default function App() {
  console.log("render1...");
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">返回首页</Link>
            </li>
            <li>
              <Link to="/hello-world">hello world</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/hello-world">
            <HelloWorld />
          </Route>
          <Route path="/users">
            <HelloWorld />
          </Route>
          <Route path="/">
            <HelloWorld />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
