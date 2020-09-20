import React, { Component } from "react";
import "../Popup.css";
import { Link } from "react-router-dom";

class Popup extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="mainbody">
        <div className="mainbody__avatar">
          <img
            src={this.props.userdata[0].profilepicture}
            alt="Avatar"
            style={{ width: "150px", height: "150px" }}
          />
        </div>
        <div className="mainbody__name">
          <b>{this.props.userdata[0].name}</b>
        </div>
        <div className="mainbody__email">{this.props.userdata[0].email}</div>
        <hr />
        <div className="mainbody__friend1">
          <img
            src={this.props.userdata[1].profilepicture}
            alt="Avatar"
            style={{ width: "40px", height: "40px" }}
          />
          &nbsp;&nbsp;
          <div className="mainbody__div1">{this.props.userdata[1].name}</div>
        </div>
        <hr />
        <div className="mainbody__friend2">
          <img
            src={this.props.userdata[2].profilepicture}
            alt="Avatar"
            style={{ width: "40px", height: "40px" }}
          />
          &nbsp;&nbsp;
          <div className="mainbody__div2">{this.props.userdata[2].name}</div>
        </div>
        <div className="mainbody__signout">
          <div className="mainbody__button">
            <Link to="/" style={{ textDecoration: "none" }}>
              Signout
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
