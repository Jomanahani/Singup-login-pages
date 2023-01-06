import React, { Component } from "react";

import Password from "../Password";
import EmailRegister from "../EmailRegister";
import CheckBox from "../CheckBox";
import Button from "../Button";
import OR from "../OR";
import GoogleBut from "../GoogleBut";

export default class SingupForm extends Component {
  render() {
    return (
      <form>
        <EmailRegister label="Email address*" value="Enter email address" />
        <Password label="Create password*" value="Password" />
        <Password label="Repeat password*" value="Repeat password" />
        <CheckBox />
        <Button title="Register Account" />
        <OR />
        <GoogleBut/>
      </form>
    );
  }
}
