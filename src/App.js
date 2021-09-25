import { Down, Left, Right, Up } from "./demo";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./App.css";
import useChangeRouterByDraging from "./demo/useChangeRouterByDraging";
import useChangeRouterByKeyboard from "./demo/useChangeRouterByKeyboard";
const routes = [
  { path: "/", name: "Right", Component: Right },
  { path: "/up", name: "Up", Component: Up },
  { path: "/down", name: "Down", Component: Down },
  { path: "/left", name: "Left", Component: Left },
];
const config = [
  {
    type: "right",
    path: "/",
  },
  {
    type: "left",
    path: "/left",
  },
  {
    type: "up",
    path: "/up",
  },
  {
    type: "down",
    path: "/down",
  },
];
function App() {
  useChangeRouterByDraging(config);
  useChangeRouterByKeyboard()
  return (
    <>
      <div bg="light">
        <div className="mx-auto">
          {routes.map((route) => (
            <Link key={route.path} to={route.path} activeClassName="active">
              {route.name}
            </Link>
          ))}
        </div>
      </div>
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
    </>
  );
}

export default App;
