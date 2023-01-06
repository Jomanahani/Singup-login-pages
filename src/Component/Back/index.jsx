import React, { Component } from 'react'

import { IoIosArrowBack } from 'react-icons/io'

import './style.css'

export default class Back extends Component {
  render() {
    return (
      <div className='back'>
        <IoIosArrowBack />
        <p>Back</p>
      </div>
    )
  }
}
