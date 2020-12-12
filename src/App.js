import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Home from "./components/Home";
import Navbar from "./components/NavbarView";
import Sneakers from "./components/Sneakers";
import Footer from "./components/Footer";
import Clothing from "./components/Clothing";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/sneakers">
            <Sneakers />
          </Route>
          <Route path="/clothing">
            <Clothing />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
