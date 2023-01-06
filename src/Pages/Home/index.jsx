import React, { Component } from 'react'

import SideBar from '../../Component/SideBar'

import './style.css'

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        <SideBar/>
      </div>
    )
  }
}
