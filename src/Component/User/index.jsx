import React, { Component } from "react";

import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../config/api";

import Avatar from "../../assetse/Avatar.png";

import { TbLogout } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";

import "./style.css";

export default class User extends Component {
  state = {
    userName: "",
    admin: "",
    isLoading: true,
  };

  async componentDidMount() {
    const token = localStorage.getItem("token");
    const res = await axios.get(`${API_URL}/users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    this.setState({
      userName: res.data.name,
      admin: res.data.isAdmin,
      isLoading: false,
    });
  }

  render() {
    return (
      <div className="profile">
        <div>
          <div className="info">
            <h2>Welcome back,</h2>
            <h2>{this.state.userName}</h2>
          </div>
          <Link to="/profile">
            <img title="profile" src={Avatar} alt="Profile" />
          </Link>
          {this.state.admin ? (
            <Link to="/usersList" className="userslist">
              <FaUsers />
              <p>Users List</p>
            </Link>
          ) : (
            ""
          )}
          <TbLogout
            title="logout"
            className="icon"
            onClick={this.props.logout}
          />
        </div>
      </div>
    );
  }
}
