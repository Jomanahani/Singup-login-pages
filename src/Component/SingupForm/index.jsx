import React, { Component } from "react";
import * as yup from "yup";
import { toast } from "react-toastify";

import Password from "../Password";
import RePassword from "../RePassword";
import EmailRegister from "../EmailRegister";
import CheckBox from "../CheckBox";
import Button from "../Button";
import OR from "../OR";
import GoogleBut from "../GoogleBut";

const initialData = {
  name: "jomana",
  email: "jomana@gmail.com",
  password: "jomana123123",
  rePassword: "jomana123123",
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
    checked: false,
    passwordType: "password",
    errors: [],
    myData: initialData,
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

  handleSubmit = async (e) => {
    e.preventDefault();

    await this.schema
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
      .then(() => {
        toast.success("Welcome");
        console.log("valid");
      })
      .catch((e) => {
        // toast.error(e.message);
        console.log(e.errors);
        this.setState({ errors: [e.errors] });
      });
  };

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div className="formItem">
          <label>Name*</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your Name"
            value={this.state.name}
            onChange={this.handleChangeInput}
          />
        </div>
        <EmailRegister
          id="email"
          label="Email address*"
          placeholder="Enter email address"
          onChange={this.handleChangeInput}
        />
        <Password
          id="password"
          label="Create password*"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleChangeInput}
        />
        <RePassword
          id="rePassword"
          label="Repeat password*"
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
        <Button title="Register Account" />
        <OR />
        <GoogleBut />
      </form>
    );
  }
}
