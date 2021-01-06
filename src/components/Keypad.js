// Code Keypad Component Here
import React, { Component } from "react";

export default class Keypad extends Component {
  OnKeyUp = () => {
    console.log("Entering password...");
  };
  //follow read me on what to do just adding an event to the input.
  render() {
    return (
      <div>
        <input onKeyUp={this.OnKeyUp} type="password" />
      </div>
    );
  }
}
