import React, { Component } from "react";
import {
  Header, Left, View, ListItem, Container,
  Button, Text, Body, Title, Right, Icon, List
} from "native-base";
import { Image, StatusBar, RefreshControl } from "react-native";
import moment from "moment";
import styles from "./styles";

const successIcon = require("../../../assets/icon/checkmarkCopy.png");
const failIcon = require("../../../assets/icon/shapeCopy.png");
require("moment/locale/en-au.js");

export default class ScanHistory extends Component {

  renderItemHeader = (rowData, rowID) => {
    let dateScaned = rowData.date;
    let date = moment(dateScaned).isSame(Date.now(), "day") ? "Today" : moment(dateScaned).locale("en-au").format("ll");
    return (
      <ListItem style={styles.itemDate} key={rowID}>
        <Text style={styles.textDate}>{date}</Text>
      </ListItem>
    );
  };

  renderItem = (rowData, rowId) => {
    let result = [];
    let item = rowData.data;
    for (let i = 0; i < item.length; i++) {
      let doctor = item[i].doctor.data;
      let status = item[i].status;
      let createdAt = moment(item[i].createdAt).format("LT");
      result.push(
        <ListItem style={styles.itemScanner} key={`${rowId}${i}`}>
          <Left>
            <View style={styles.containerItemLeft}>
              <Text style={styles.doctorName}>{doctor.fullName}</Text>
              <Text style={styles.doctorInfo}>{doctor.age} years old, {doctor.gender}</Text>
            </View>
          </Left>
          <Right>
            <View style={styles.containerItemRight}>
              <Image source={status ? successIcon : failIcon}/>
              <Text style={styles.dateScanned}>{createdAt}</Text>
            </View>
          </Right>
        </ListItem>
      );
    }
    return result;
  };

  render() {
    return (
      <Container style={styles.container}>
        <StatusBar translucent={false}/>
        <Header
          noShadow
          iosBarStyle={"dark-content"}
          androidStatusBarColor={"#fff"}
          style={{ borderBottomWidth: 1 }}>
          <Left style={{ flex: 0.3 }}>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" style={{ color: "#000" }}/>
            </Button>
          </Left>
          <Body style={{ flex: 0.4 }}>
          <Title style={{ alignSelf: "center" }}>History</Title>
          </Body>
          <Right style={{ flex: 0.3 }}/>
        </Header>
        {this.props.data.length === 0 && <Text style={styles.noData}>No scan history!</Text>}
        <List dataArray={this.props.data}
              renderRow={(rowData, sectionID, rowID) => {
                return [
                  this.renderItemHeader(rowData, rowID),
                  ...this.renderItem(rowData, rowID)
                ];
              }}
              onEndReached={() => this.props.onLoadMore()}
              onEndReachedThreshold={1}
              refreshControl={
                <RefreshControl
                  refreshing={this.props.isRefreshing}
                  onRefresh={() => this.props.onRefresh()}
                />
              }
        />
      </Container>
    );
  }
}
