import React, { Component } from "react";
import "../Profile.css";
import UserProfile from "./UserProfile";
import Post from "./Post";
import Gallery from "./Gallery";
import ToDo from "./ToDo";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: [],
      component: "first",
    };
  }

  static getDerivedStateFromProps(nextProps, state) {
    state.profileData = nextProps.location.state.profileData;
    return null;
  }
  selectedComponent = (e) => {
    e.preventDefault();
    this.setState({
      component: e.target.name,
    });
  };
  render() {
    let toRender = null;

    switch (this.state.component) {
      case "first":
        toRender = <UserProfile userdata={this.state.profileData} />;
        break;
      case "second":
        toRender = <Post userdata={this.state.profileData} />;
        break;
      case "third":
        toRender = <Gallery userdata={this.state.profileData} />;
        break;
      case "fourth":
        toRender = <ToDo userdata={this.state.profileData} />;
        break;
    }
    return (
      <div className="profile">
        {/* for sidebar*/}
        <div className="profile__sidebar">
          <button
            className="profile__firstoption"
            name="first"
            onClick={this.selectedComponent}
          >
            Profile
          </button>
          <hr />
          <button
            className="profile__secondoption"
            name="second"
            onClick={this.selectedComponent}
          >
            Post
          </button>
          <hr />
          <button
            className="profile__thirdoption"
            name="third"
            onClick={this.selectedComponent}
          >
            Gallery
          </button>
          <hr />
          <button
            className="profile__fourthoption"
            name="fourth"
            onClick={this.selectedComponent}
          >
            ToDo
          </button>
        </div>
        {/* for middle sec */}

        <div className="profile__name">{toRender}</div>
      </div>
    );
  }
}

export default Profile;
