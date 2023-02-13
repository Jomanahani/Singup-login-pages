import React, { Component } from "react";

import axios from "axios";
import { API_URL } from "./../../config/api";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

import profile from "../../assetse/profile.jpg";

import "./style.css";

export default class Profile extends Component {
  state = {
    userName: "",
    email: "",
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
      email: res.data.email,
      admin: res.data.isAdmin,
      isLoading: false,
    });
  }

  render() {
    return (
      <>
        <Link to="/home">
          <p className="Back">
            <IoIosArrowBack />
            Back
          </p>
        </Link>
        <div className="account">
          <img src={profile} alt="profile" />
          <h1>{this.state.userName}s Profile</h1>
          {this.state.isLoading ? (
            "Loading..."
          ) : (
            <div className="profile_info">
              <p>Name:</p>
              <p className="user_info">{this.state.userName}</p>
              <p>Email:</p>
              <p className="user_info">{this.state.email}</p>
            </div>
          )}
          {/* {this.state.admin ? (
            <NavLink to="/userslist" className={"userslist"}>
              Users List
            </NavLink>
          ) : (
            ""
          )} */}
        </div>
      </>
    );
  }
}
