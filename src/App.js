import React, { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Home from "./components/Home";
import Navbar from "./components/NavbarView";
import Sneakers from "./components/Sneakers";
import Footer from "./components/Footer";
import Clothing from "./components/Clothing";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Register";
import Account from "./components/Account";

import { UserProvider } from "./components/UserContext";
import { auth } from "./firebase";

function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

function App() {
  const [state, setState] = useState({
    authenticated: false,
    loading: true,
  });

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setState({
          authenticated: true,
          loading: false,
        });
      } else {
        setState({
          authenticated: false,
          loading: false,
        });
      }
    });
  }, []);

  return state.loading === true ? (
    <div
      className="d-flex justify-content-center"
      style={{ position: "absolute", top: "50%", left: "50%" }}
    >
      <div
        className="spinner-border text-primary"
        role="status"
        style={{ width: "4rem", height: "4rem" }}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  ) : (
    <div className="App">
      <UserProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/cart">
              <Cart />
            </Route>
            <PrivateRoute
              path="/account"
              authenticated={state.authenticated}
              component={Account}
            />
            <PrivateRoute
              path="/checkout"
              authenticated={state.authenticated}
              component={Checkout}
            />
            <Route path="/sneakers">
              <Sneakers />
            </Route>
            <Route path="/clothing">
              <Clothing />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
