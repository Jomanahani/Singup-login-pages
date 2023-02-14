import React, { Component } from "react";

import axios from "axios";
import { Link, useParams } from "react-router-dom";

import { IoIosArrowBack } from "react-icons/io";
import SideBar from "../../Component/SideBar";
import User from "../../Component/User";

export default function Details() {
  const { id } = useParams();
  return <UserDetails id={id} />;
}

class UserDetails extends Component {
  state = {
    id: "",
    name: "",
    email: "",
    admin: "",
    isLoading: true,
  };

  async componentDidMount() {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(
        `https://react-tt-api.onrender.com/api/users/${this.props.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      this.setState({
        name: res.data.name,
        email: res.data.email,
        id: res.data._id,
        admin: res.data.isAdmin ? "Yes" : "No",
        isLoading: false,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="home">
        <SideBar />
        <main className="usersMain">
          <User />
          <Link to="/usersList" className="Back">
            <p>
              <IoIosArrowBack />
              Back
            </p>
          </Link>
          <div className="account">
            <h1>{this.state.name}s Details</h1>
            {this.state.isLoading ? (
              "Loading..."
            ) : (
              <div className="profile_info">
                <p>Name:</p>
                <p className="user_info">{this.state.name}</p>
                <p>Email:</p>
                <p className="user_info">{this.state.email}</p>
                <p>ID:</p>
                <p className="user_info">{this.state.id}</p>
                <p>is Admin:</p>
                <p className="user_info">{this.state.admin}</p>
              </div>
            )}
          </div>
        </main>
      </div>
    );
  }
}
