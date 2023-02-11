import React, { Component } from 'react'
import Profile from '../../assetse/Profile.png'
import {TbLogout} from 'react-icons/tb'
import './style.css'
import { Link } from 'react-router-dom';

export default class User extends Component {
  state = { userName: "" };

  async componentDidMount() {
    const userName = localStorage.getItem("userName");
    this.setState({ userName });
  }

  render() {
    return (
      <div className='profile'>
        <div>
        <div className='info'>
        <h2>Welcome back,</h2>
        <h2>{this.state.userName}</h2>
        </div>
        <Link to='/profile'>
        <img  title='profile' src={Profile} alt='Profile'/>
        </Link>
        <TbLogout title='logout' className='icon' onClick={this.props.logout}/>
        </div>
      </div>
    )
  }
}
