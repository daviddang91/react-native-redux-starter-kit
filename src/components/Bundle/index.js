import React, { Component } from "react";
import {
  Header, Left, Container, Button, Body, Title, Right,
  Icon, Content, Text, ListItem, Radio, List
} from "native-base";
import { StatusBar } from "react-native";
import styles from "./styles";

export default class Bundle extends Component {
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
          <Title style={styles.textBody}>List Bundle</Title>
          </Body>
          <Right style={styles.headerRight}/>
        </Header>
        <List
          dataArray={this.props.data}
          renderRow={(rowData, sectionID, rowID) =>
            <ListItem style={styles.listItem} onPress={() => this.props.selectBundle(rowData)}>
              <Body>
                <Text style={styles.prefixText}>{rowData.prefix}</Text>
                <Text style={styles.urlText}>{rowData.appointmentUrl}</Text>
                <Text style={styles.urlText}>{rowData.cmeUrl}</Text>
              </Body>
            </ListItem>}
        />
      </Container>
    );
  }
}
