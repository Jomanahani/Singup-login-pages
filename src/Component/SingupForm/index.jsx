import React, { Component } from "react";
import * as yup from "yup";
import axios from "axios";

import CheckBox from "../CheckBox";
import Button from "../Button";
import OR from "../OR";
import GoogleBut from "../GoogleBut";
import { API_URL } from "../../config/api";
import FormInput from "../FormInput";
import StrengthBar from "../StrengthBar";

import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

const regularExpression =
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

export default class SingupForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    rePassword: "",
    checked: false,
    passwordType: "password",
    errors: [],
    strength: 0,
    isLoading: false,
  };

  schema = yup.object().shape({
    name: yup
      .string()
      .min(6, "Name must be at least 6 characters long")
      .max(16, "Name must be no more than 16 characters")
      .required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters long")
      .matches(regularExpression, "Invalid Password")
      .required("Password is required"),
    rePassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
    checked: yup
      .boolean()
      .oneOf([true], "You must agree the terms and conditions")
      .required(),
  });

  handleChangeInput = (e) => {
    const { value, id } = e.target;
    this.setState({ [id]: value });
  };

  handleClick = (e) => {
    const checkedv = e.target.checked;
    this.setState({ checked: checkedv });
  };

  PasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (password.match(/[0-9]/)) strength += 1;
    if (password.match(/[!@#$%^&*]/)) strength += 1;
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) {
      strength += 1;
    }
    this.setState({ strength: strength });
  };

  handlePasswordShow = (e) => {
    this.setState((prevState) => ({
      passwordType: prevState.passwordType === "password" ? "text" : "password",
    }));
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ isLoading: true });
    this.schema
      .validate(
        {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          rePassword: this.state.rePassword,
          checked: this.state.checked,
        },
        { abortEarly: false }
      )
      .then(async ({ name, email, password }) => {
        const res = await axios.post(`${API_URL}/users/signup`, {
          name,
          email,
          password,
        });

        if (res) {
          localStorage.setItem("userName", res.data.name);
          localStorage.setItem("email", res.data.email);
          localStorage.setItem("password", res.data.password);
          localStorage.setItem("token", res.data.token);
          this.props.login();
        }
      })
      .catch((e) => {
        if (e.errors) {
          this.setState({ errors: [...e.errors] });
        } else {
          this.setState({ errors: [...e.message] });
        }
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <p className="error">{this.state.errors}</p>

        <FormInput
          id="name"
          label="Name*"
          type="text"
          placeholder="Enter your Name"
          value={this.state.name}
          onChange={this.handleChangeInput}
        />
        <FormInput
          id="email"
          label="Email address*"
          type="email"
          placeholder="Enter email address"
          value={this.state.email}
          onChange={this.handleChangeInput}
        />
        <FormInput
          id="password"
          label="Create password*"
          type={this.state.passwordType}
          placeholder="Password"
          value={this.state.password}
          onChange={(e) => {
            this.handleChangeInput(e);
            this.PasswordStrength(e.target.value);
          }}
        />
        <div className="password_Show_singup" onClick={this.handlePasswordShow}>
          {this.state.passwordType === "password" ? (
            <AiOutlineEyeInvisible />
            ) : (
              <AiOutlineEye />
          )}
        </div>
        <StrengthBar strength={this.state.strength} />
        <FormInput
          id="rePassword"
          label="Repeat password*"
          type="password"
          placeholder="Repeat password"
          value={this.state.rePassword}
          onChange={this.handleChangeInput}
        />
        <CheckBox
          id="checked"
          onChange={this.handleClick}
          checked={this.state.checked}
          name="checked"
        />
        <Button
          title={this.state.isLoading ? "Loading..." : "Register Account"}
        />
        <OR />
        <GoogleBut />
      </form>
    );
  }
}
