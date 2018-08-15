import React, { Component } from "react";
import { Header, Left, Container, Button, Body, Title, Right, Icon } from "native-base";
import { StatusBar } from "react-native";
import WarningResult from "./warning";
import FailsResult from "./fail";
import SuccessResult from "./success";
import styles from "./styles";

export default class ScanResult extends Component {
  render() {
    let { data, error } = this.props;
    let dataType = data ? "success" : error.doctor ? "warning" : "fail";
    return (
      <Container style={styles.container}>
        <StatusBar translucent={false}/>
        <Header
          noShadow
          iosBarStyle={"dark-content"}
          androidStatusBarColor={"#fff"}
          style={{ borderBottomWidth: 1}}>
          <Left style={styles.headerLeft}>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" style={{color: "#000"}}/>
            </Button>
          </Left>
          <Body style={styles.headerBody}>
          <Title style={styles.textBody}>Scan Result</Title>
          </Body>
          <Right style={styles.headerRight} />
        </Header>
        { dataType === "success" && <SuccessResult navigation={this.props.navigation} data={data}/> }
        { dataType === "warning" && <WarningResult navigation={this.props.navigation} data={error}/> }
        { dataType === "fail" && <FailsResult navigation={this.props.navigation} data={error}/> }
      </Container>
    );
  }
}
