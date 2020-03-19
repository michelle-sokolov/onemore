import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import WishList from "./pages/Wishlist";
import Detail from "./pages/Detail"; //shop all page
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Header from "./components/Header";

import Nav from "./components/Nav";

import Footer from "./components/Footer";

// import Nav from "./components/Nav";
import Article from "./components/article";
import "./components/style.css";
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/wishlist" component={WishList} />
          <Route exact path="/search/" component={Detail} />
          <Route exact path="/contact/" component={Contact} />
          <Route exact path="/blog/" component={Blog} />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/blog/:id"}
            component={Article}
          />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
