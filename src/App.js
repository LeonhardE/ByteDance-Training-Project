import ResourcePage from "./components/ResourcePage";
import HomePage from "./home";
import Friend from "./friend";
import {
  Route,
  useHistory,
} from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { useEffect } from "react";

const routes = [
  { path: "/", name: "HomePage", Component: HomePage },
  { path: "/Friend", name: "Friend", Component: Friend },
  { path: "/ResourcePage", name: "ResourcePage", Component: ResourcePage },
];

function App() {
  return (
    <div className="container">
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={300}
              classNames="page"
              unmountOnExit
            >
              <div className="page">
                <Component />
              </div>
            </CSSTransition>
          )}
        </Route>
      ))}
    </div>
  );
}

export default App;
