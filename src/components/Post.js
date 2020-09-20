import React, { Component } from "react";
import Popup from "./Popup";
import "../UserProfile.css";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }
  render() {
    const { showModal } = this.state;
    return (
      <div className="maindiv">
        <div className="profile">
          <div className="profile__titlebar_left">
            <span className="profile__text">Post</span>
          </div>
          <div className="profile__titlebar_right">
            <button
              className="profile__info"
              onClick={() => this.setState({ showModal: !showModal })}
            >
              <img
                src={this.props.userdata[0].profilepicture}
                alt="Avatar"
                style={{ width: "40px", height: "40px" }}
              />
              &nbsp;&nbsp;
              <div className="profile__buttontext">
                {this.props.userdata[0].name}
              </div>
            </button>
            {this.state.showModal ? (
              <Popup userdata={this.props.userdata} />
            ) : null}
          </div>
          {/* <div className="horizontal__line"></div> */}
        </div>
        <hr />
        <div className="profile__detail">
          <div
            className="profile__detail__left"
            style={{ fontSize: "40px", alignItems: "center", padding: "20px" }}
          >
            <b>Coming Soon</b>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
