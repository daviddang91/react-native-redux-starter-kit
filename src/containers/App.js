import React, { Component } from "react";
import { Container, Text, View } from "native-base";
import AppNavigator from "../routers/AppNavigator";

class App extends Component {
  render() {
    return <AppNavigator />;
  }
}

export default App;
//This component will be configured react-native-code-push later
