import React, { Component } from "react";
import { Button, View, Text, Content } from "native-base";
import { Image } from "react-native";
import styles from "./styles";

const errorImage = require("../../../../assets/icon/cancel.png");

export default class WarningResult extends Component {
  render() {
    let { message } = this.props.data;
    return (
      <Content>
        <Image source={errorImage} style={styles.iconError}/>
        <View style={styles.containerMessage}>
          <Text style={styles.textError}>{message}</Text>
        </View>
        <Button block style={styles.buttonReactive} onPress={() => this.props.navigation.navigate("Scan")}>
          <Text uppercase={false} style={styles.textReactive}>Continue</Text>
        </Button>
      </Content>
    );
  }
}
