import React, { Component } from "react";
import { Button, View, Text, Content } from "native-base";
import { Image } from "react-native";
import moment from "moment";
import styles from "./styles";

export default class SuccessResult extends Component {
  render() {
    let { attendCode, confirmedAt, doctor, event } = this.props.data.data;
    return (
      <Content>
        <Image source={{uri: doctor.data.avatarUrl}} style={styles.avatar}/>
        <Text style={styles.doctorName}>{doctor.data.fullName}</Text>
        <Text style={styles.doctorInfo}>{doctor.data.age} years old, {doctor.data.gender}</Text>
        <View style={{ ...styles.containerSuccess, ...styles.containerMessage }}>
          <View style={styles.contentMessage}>
            <Text style={styles.titleMessage}>Attendance code {attendCode} verified!</Text>
            <Text style={styles.eventName}>Event: {event.data.name}</Text>
            <Text style={styles.scannedTimex}>Scanned: {moment(confirmedAt).format("lll")}</Text>
          </View>
        </View>
        <Button block style={styles.buttonReactive} onPress={() => this.props.navigation.navigate("Scan")}>
          <Text uppercase={false} style={styles.textReactive}>Continue</Text>
        </Button>
      </Content>
    );
  }
}
