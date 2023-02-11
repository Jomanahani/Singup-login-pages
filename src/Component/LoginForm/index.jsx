import React, { Component } from "react";

import { object, string } from "yup";
import axios from "axios";
import { Link } from "react-router-dom";

import FormInput from "../FormInput";
import Button from "../Button";
import OtherAccounts from "../OtherAccounts";
import OR from "../OR";
import { API_URL } from "../../config/api";

import "./style.css";

export default class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    passwordType: "password",
    isLoading: false,
    errors: [],
  };

  schema = object().shape({
    email: string().required(),
    password: string().required("password is a required field"),
  });

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ isLoading: true });
    try {
      await this.schema.validate(
        { email: this.state.email, password: this.state.password },
        { abortEarly: false }
      );

      const res = await axios.post(`${API_URL}/users/login`, {
        email: this.state.email,
        password: this.state.password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("email", res.data.email);
      localStorage.setItem("userName", res.data.name);
      localStorage.setItem("user", res.data.isUser);

      this.props.login();
    } catch (e) {
      if (e.errors) {
        this.setState({ errors: [...e.errors ] });
      } else {
        this.setState({ errors: [...e.message] });
      }
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleChangeInput = (e) => {
    const { value, id } = e.target;
    this.setState({ [id]: value });
  };

  handlePasswordShow = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      passwordType: prevState.passwordType === "text" ? "password" : "text",
    }));
  };

  render() {
    return (
      <form className="loginForm" onSubmit={(e) => this.handleSubmit(e)}>
        <OtherAccounts />
        <OR />
        <p className='error'>{this.state.errors }</p>
        <FormInput
          id="email"
          type="email"
          label="Your email"
          placeholder="Write your email"
          value={this.state.email}
          onChange={this.handleChangeInput}
        />
        <FormInput
          id="password"
          label="Enter your password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleChangeInput}
        />
        <Button title={this.state.isLoading ? "Loading..." : "Login"} />
        <div className="Register">
          Don’t have an account?
          <Link to="/signup"> Register </Link>
        </div>
      </form>
    );
  }
}
