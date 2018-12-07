import React, { Component } from "react";
import { Image, StatusBar } from "react-native";
import { Container, Content, Button, Text, View } from "native-base";
import Spinner from "react-native-loading-spinner-overlay";
import styles from "./styles";

const logo = require("../../../assets/logoApp.png");

export default class Login extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <StatusBar hidden={true}/>
        <Spinner visible={this.props.loading}/>
        <Content>
          <Image source={logo} style={styles.logo}/>
          <Text style={styles.textLogo}>table tennis</Text>
          <View style={styles.containerForm}>
            <View style={styles.contentForm}>
              {this.props.loginForm}
              <Button block onPress={() => this.props.onLogin()} style={styles.buttonLogin}>
                <Text uppercase={false} style={styles.textLogin}>Login</Text>
              </Button>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
