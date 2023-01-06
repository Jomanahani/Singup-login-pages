import React, { Component } from 'react'

import Password from "../Password";
import EmailRegister from "../EmailRegister";
import Button from "../Button";
import OR from "../OR";

import './style.css'

export default class LoginForm extends Component {
  render() {
    return (
      <form className='loginForm'>
        <OR />
        <EmailRegister label="Your email" value="Write your email" />
        <Password label="Enter your password" value="Password" />
        <Button title="Login" />
      </form>
    )
  }
}
