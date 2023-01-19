import React, { Component } from "react";

import * as yup from "yup";
import axios from "axios";

import Password from "../Password";
import EmailRegister from "../EmailRegister";
import CheckBox from "../CheckBox";
import Button from "../Button";
import OR from "../OR";
import GoogleBut from "../GoogleBut";
import StrengthBar from "../StrengthBar";

const initialData = {
  name: "jomana",
  email: "jomana@gmail.com",
  password: "jomana123123",
  checked: false,
};

const regularExpression =
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

export default class SingupForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    rePassword: "",
    agree: false,
    passwordType: "password",
    errors: [],
    isLoading: false,
    myData: initialData,
  };

  schema = yup.object().shape({
    name: yup
      .string()
      .min(4, "Name must be at least 4 characters long")
      .max(16, "Name must be no more than 16 characters")
      .required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 8 characters long")
      .max(16, "Password must be no more than 18 characters")
      .matches(regularExpression, "Invalid Password, Tray again")
      .required("Password is required"),
    rePassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
    agree: yup
      .boolean()
      .oneOf([true], "You must agree the terms and conditions")
      .required(),
  });

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
          agree: this.state.agree,
        },
        { abortEarly: false }
      )
      // .then(async ({ name, email, password }) => {
      //   const response = await axios.post(`${API_URL}`, {
      //     name,
      //     email,
      //     password,
      //   });

  //       if (response) {
  //         localStorage.setItem("username", response.data.name);
  //         localStorage.setItem("email", response.data.email);
  //         localStorage.setItem("password", response.data.password);
  //         localStorage.setItem("token", response.data.token);
  //         this.props.login();
  //       }
  //     })
  //     .catch((error) => {
  //       if (error.errors) {
  //         this.setState({ errors: error.errors });
  //       } else {
  //         this.setState({ errors: [error.message] });
  //       }
  //     })
  //     .finally(() => this.setState({ isLoading: false }));
  // };

  handleChangeInput = (e) => {
    const { value, id } = e.target;
    const agree = e.target.checked;
    this.setState({ [id]: value, agree });
  };
  
  showPassword = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      passwordType: prevState.passwordType === "text" ? "password" : "text",
    }));
  };

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div className="formItem">
          <label>User Name*</label>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={this.handleChangeInput}
          />
        </div>
        <EmailRegister
          label="Email address*"
          value={this.state.email}
          placeholder="Enter email address"
          onChange={this.handleChangeInput}
        />
        <Password
          label="Create password*"
          value={this.state.password}
          placeholder="Password"
          onChange={this.handleChangeInput}
        />
        <StrengthBar password={this.state.password} />
        <Password
          label="Repeat password*"
          value={this.state.email}
          placeholder="Repeat password"
          onChange={this.handleChangeInput}
        />
        <CheckBox />
        <Button title="Register Account" />
        <OR />
        <GoogleBut />
      </form>
    );
  }
}
