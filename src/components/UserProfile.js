import React, { Component } from "react";
import "../UserProfile.css";
import Popup from "./Popup";
import Map from "../Capture.PNG";

class UserProfile extends Component {
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
            <span className="profile__text">Profile</span>
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
          <div className="profile__detail__left">
            <div className="profile__image">
              <img
                src={this.props.userdata[0].profilepicture}
                alt="Avatar"
                style={{ width: "150px", height: "150px" }}
              />
            </div>
            <div className="profile__displayname">
              <b>{this.props.userdata[0].name}</b>
            </div>
            <div className="profile__username">
              Username&nbsp;&nbsp;: <b>{this.props.userdata[0].username}</b>
            </div>
            <div className="profile__email">
              E-mail&nbsp;&nbsp;: <b>{this.props.userdata[0].email}</b>
            </div>
            <div className="profile__phone">
              Phone&nbsp;&nbsp;: <b>{this.props.userdata[0].phone}</b>
            </div>
            <div className="profile__website">
              Website&nbsp;&nbsp;: <b>{this.props.userdata[0].website}</b>
            </div>
            <hr />
            <div className="profile__company">
              <b>Company</b>
            </div>
            <div className="profile__companyname">
              Name&nbsp;&nbsp;: <b>{this.props.userdata[0].company.name}</b>
            </div>
            <div className="profile__catchphrase">
              catchPhrase&nbsp;&nbsp;:{" "}
              <b>{this.props.userdata[0].company.catchPhrase}</b>
            </div>
            <div className="profile__bs">
              bs&nbsp;&nbsp;: <b>{this.props.userdata[0].company.bs}</b>
            </div>
          </div>
          <div class="vl"></div>
          <div className="profile__detail__right">
            <div className="profile__address">Address&nbsp;:</div>
            <div className="profile__street">
              Street&nbsp;&nbsp;: <b>{this.props.userdata[0].address.street}</b>
            </div>
            <div className="profile__suite">
              Suite&nbsp;&nbsp;: <b>{this.props.userdata[0].address.suite}</b>
            </div>
            <div className="profile__city">
              City&nbsp;&nbsp;: <b>{this.props.userdata[0].address.city}</b>
            </div>
            <div className="profile__zipcode">
              Zipcode&nbsp;&nbsp;:{" "}
              <b>{this.props.userdata[0].address.zipcode}</b>
            </div>
            <div className="profile__map">
              <img
                src={Map}
                style={{
                  width: "600px",
                  height: "350px",
                  borderRadius: "25px",
                }}
              />
            </div>
            <div className="profile__direction">
              Lat: {this.props.userdata[0].address.geo.lat}&nbsp;&nbsp;&nbsp;
              Long: {this.props.userdata[0].address.geo.lng}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
