import React, { Component } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

import SideBar from "../../Component/SideBar";
import User from "../../Component/User";

import { RiDeleteBin6Line } from "react-icons/ri";
import "./style.css";

export default class index extends Component {
  state = {
    users: [],
    isLoading: true,
  };

  token = localStorage.getItem("token");
  async componentDidMount() {
    try {
      const res = await axios.get(
        "https://react-tt-api.onrender.com/api/users",
        {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        }
      );
      this.setState({
        users: res.data,
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
          <div className="userList">
            <h3>USERS LIST</h3>
            {this.state.isLoading ? (
              <div>"Loading..."</div>
            ) : (
              <table className="users_Table">
                <tr>
                  <th>ID</th>
                  <th>User Name</th>
                  <th>is Admin</th>
                  <th>user details</th>
                  <th>delete</th>
                </tr>
                {this.state.users.map((user) => (
                  <tr key={user._id}>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.isAdmin ? "Yes" : "No"}</td>
                    <td>
                      <Link to={`/usersList/${user._id}`}>user details</Link>
                    </td>
                    <td>
                      <button className="delete">
                        <RiDeleteBin6Line />
                      </button>
                    </td>
                  </tr>
                ))}
              </table>
            )}
          </div>
        </main>
      </div>
    );
  }
}
