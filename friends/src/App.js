import React from "react";
import "./App.css";
import Login from "./components/login/login";
import { Route, Link } from "react-router-dom";
import Home from "./components/home/home";
import Friends from "./components/friends/friends";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="/">
            <h1>Home</h1>
          </Link>
          <Link to="/signin">
            <h1>Sign In</h1>
          </Link>
          <Link to="/friends">
            <h1>Friends!</h1>
          </Link>
        </nav>
      </header>
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={Login} />
      <ProtectedRoute exact path="/friends" component={Friends} />
    </div>
  );
}

export default App;
