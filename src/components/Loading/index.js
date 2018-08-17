import React, { Component } from "react";
import { Image, StatusBar, ActivityIndicator } from "react-native";
import { Container, Text, View } from "native-base";
import styles from "./styles";

const logo = require("../../../assets/logoApp.png");

export default class Loading extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <StatusBar hidden={true} />
          <Image source={logo} style={styles.logo}/>
          <Text style={styles.textLogo}>For CME Organizer</Text>
          <View style={styles.containerLoading}>
            <ActivityIndicator size="large" color="#5ABEEC" />
          </View>
      </Container>
    );
  }
}
