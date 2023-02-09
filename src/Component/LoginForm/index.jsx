import React, { Component } from 'react'

import { object, string } from "yup";
import axios from "axios";
import { API_URL } from "../config/api";
import { Link } from "react-router-dom";

import Password from "../Password";
import EmailRegister from "../EmailRegister";
import Button from "../Button";
import OR from "../OR";

import './style.css'

const initialData = {
  email: "jomana@gmail.com",
  password: "jomana123123",
};
export default class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    passwordType: "password",
    isLoading: false,
    errors: [],
    myData: initialData,
  };

  schema = object().shape({
    email: string().required(),
    password: string().required(),
  });

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ isLoading: true });
    try {
      await this.schema.validate(
        { email: this.state.email, password: this.state.password },
        { abortEarly: false }
      );

      const { data } = await axios.post(`${API_URL}/users/login`, {
        email: this.state.email,
        password: this.state.password,
      });
      localStorage.setItem("token", data.token);
      localStorage.setItem("email", data.email);
      localStorage.setItem("username", data.name);
      localStorage.setItem("user", data.isUser);

      this.props.login();
    } catch (error) {
      if (error.errors) {
        this.setState({ errors: error.errors });
      } else {
        this.setState({ errors: [error.message] });
      }
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleChangeInput = (e) => {
    const { value, id } = e.target;
    this.setState({ [id]: value });
  };
  render() {
    return (
      <form className='loginForm' onSubmit={(e) => this.handleSubmit(e)}>
        <OR />
        <EmailRegister label="Your email" placeholder="Write your email" value={this.state.email} />
        <Password label="Enter your password" placeholder="Password" value={this.state.password}/>
        <Button title={this.state.isLoading ? "Loading..." : "Login"} />
        <div className="Register">
            Don’t have an account?
            <Link to="/signup"> Register </Link>
          </div>
      </form>
    )
  }
}
