import React, { Component } from "react";
import {
  Header, Left, Container, Button, Body, Title, Right,
  Icon, Content, Text, ListItem, Radio
} from "native-base";
import { StatusBar } from "react-native";
import styles from "./styles";

export default class SwitchEnv extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <StatusBar translucent={false}/>
        <Header
          noShadow
          iosBarStyle={"dark-content"}
          androidStatusBarColor={"#fff"}
          style={{ borderBottomWidth: 1 }}>
          <Left style={styles.headerLeft}>
            <Button transparent onPress={() => this.props.navigation.navigate("Loading")}>
              <Icon name="arrow-back" style={{ color: "#000" }}/>
            </Button>
          </Left>
          <Body style={styles.headerBody}>
          <Title style={styles.textBody}>Switch Env</Title>
          </Body>
          <Right style={styles.headerRight}/>
        </Header>
        <Content>
          <ListItem
            icon
            style={styles.contentItem}
            onPress={() => this.props.selectMode("PROD")}>
            <Left/>
            <Body>
            <Text>Production</Text>
            </Body>
            <Right>
              <Radio selected={this.props.env === "PROD"}/>
            </Right>
          </ListItem>
          <ListItem
            icon
            style={styles.contentItem}
            onPress={() => this.props.selectMode("STAGING")}>
            <Left/>
            <Body>
            <Text>Staging</Text>
            </Body>
            <Right>
              <Radio selected={this.props.env === "STAGING"}/>
            </Right>
          </ListItem>
        </Content>
      </Container>
    );
  }
}
