import React, { Component } from "react";
import { Button, View, Text, Content } from "native-base";
import { Image } from "react-native";
import moment from "moment";
import styles from "./styles";

export default class FailsResult extends Component {
  render() {
    let { doctor, message, confirmedAt } = this.props.data;
    return (
      <Content>
        <Image source={{uri: doctor.avatarUrl}} style={styles.avatar}/>
        <Text style={styles.doctorName}>{doctor.fullName}</Text>
        <Text style={styles.doctorInfo}>{doctor.age} years old, {doctor.gender}</Text>
        <View style={{backgroundColor: "#FFC2BF", borderColor: "#FF3B30", ...styles.containerMessage}}>
          <View style={styles.contentMessage}>
            <Text style={styles.titleMessage}>{message}</Text>
            <Text style={styles.scannedTime}>Scanned: {moment(confirmedAt).format("lll")}</Text>
          </View>
        </View>
        <Button block style={styles.buttonReactive} onPress={() => this.props.navigation.navigate("Scan")}>
          <Text uppercase={false} style={styles.textReactive}>Continue</Text>
        </Button>
      </Content>
    );
  }
}
