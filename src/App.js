import { useEffect } from "react";
import { Home, About, Contact } from "./demo";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./App.css";
import useSlide from "./demo/useSlide";
const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/about", name: "About", Component: About },
  { path: "/contact", name: "Contact", Component: Contact },
];

function App() {
  useSlide()
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
