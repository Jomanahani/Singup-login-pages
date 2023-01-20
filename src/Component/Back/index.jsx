import React, { Component } from 'react'
import { Link } from "react-router-dom";

import { IoIosArrowBack } from 'react-icons/io'

import './style.css'

export default class Back extends Component {
  render() {
    return (
      <div className='back'>
        <IoIosArrowBack />
        <Link to="/login">
        <p>Back</p>
        </Link>
      </div>
    )
  }
}
