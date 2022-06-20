import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/profile_pic.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Megan Steeves</div>
            <div className="brief_description">
              I am and avid Mountain Biker and Skier.
              I love all types of dogs.
              I live in Denver and go to the University of Wyoming.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
