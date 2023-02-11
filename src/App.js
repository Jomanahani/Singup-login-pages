import React, { Component } from "react";
import { Authorized, NotAuthorized } from "./Router";
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
    const user = localStorage.getItem("user");
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
        {this.state.isAuthorized ? <Authorized logout={this.logout} /> : <NotAuthorized login={this.login} />}
      </div>
    );
  }
}
