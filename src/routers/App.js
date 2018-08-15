import React, { Component } from "react";
import SwitchNavigator from "./SwitchNavigator";
import { Root } from "native-base";

export default class App extends Component {
  render() {
    return (
      <Root>
        <SwitchNavigator/>
      </Root>
    );
  }
}

