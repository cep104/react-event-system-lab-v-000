// Code EyesOnMe Component Here
import React, { Component } from "react";

export default class EyesOnMe extends Component {
  //make the functions for the events here!
  handleOnBlur = () => {
    console.log("Hey! Eyes on me!");
  };

  handleOnFocus = () => {
    console.log("Good!");
  };
  render() {
    return (
      <div>
        {/* add the functions on the button */}
        <button onBlur={this.handleOnBlur} onFocus={this.handleOnFocus}>
          Focus!
        </button>
      </div>
    );
  }
}
