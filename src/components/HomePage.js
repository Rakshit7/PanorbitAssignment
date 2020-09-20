import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      selectedId: "",
    };
  }
  componentDidMount() {
    axios.get("https://panorbit.in/api/users.json").then((response) => {
      if (response && response.data && response.data.users) {
        this.setState({
          userData: response.data.users,
        });
      }
    });
  }

  render() {
    const { userData } = this.state;
    return (
      <div className="App">
        <div className="card">
          <div className="card__top">
            <span className="card__title">
              <b>Select an account</b>
            </span>
          </div>
          <div className="card__bottom">
            <table className="card__table">
              {userData.map((user) => (
                <tr>
                  <img
                    src={user.profilepicture}
                    alt="Avatar"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <td id={user.id}>
                    &nbsp;&nbsp;
                    <Link
                      to={{
                        pathname: "/profile",
                        state: {
                          profileData: userData,
                        },
                      }}
                      style={{ textDecoration: "none" }}
                    >
                      {user.name}
                    </Link>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
