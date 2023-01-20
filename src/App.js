import React, { Component } from "react";
import {Router,Routes, Route, Navigate } from "react-router-dom";
// import { BrowserRouter } from 'react-router-dom';


import SingUp from "./Pages/SingUp";
import Login from "./Pages/Login";
// import Home from "./Pages/Home";

export default class App extends Component {
  state = {
    isAuthorized: false,
    isUser: false,
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      this.setState({ isAuthorized: true });
    }
    const user = localStorage.getItem("users");
    if (user === "false") {
      this.setState({ isUser: false });
    } else {
      this.setState({ isUser: true });
    }
  }

  user = () => {
    this.setState({ isUser: true });
  };

  login = () => {
    this.setState({ isAuthorized: true });
  };

  logout = () => {
    localStorage.clear();
    this.setState({ isAuthorized: false });
  };

  render() {
    return (
      <div className="App">
        <SingUp/>
        <Router>
        <Routes>
          <Route index="true" element={<Navigate to="/login" />} />
          <Route
            path="/login"
            element={
              <>
                {this.state.isAuthorized ? (
                  <Navigate to="/login" />
                ) : (
                  <Login login={this.login} admin={this.user} />
                )}
              </>
            }
          />

          <Route
            path="/signup"
            element={
              <>
                {this.state.isAuthorized ? (
                  <Navigate to="/login" />
                ) : (
                  <SingUp login={this.login} />
                )}
              </>
            }
          />

          
          <Route path="*" element={<h1>page not found 404</h1>} />
        </Routes>
        </Router>
      </div>
    );
  }
}
