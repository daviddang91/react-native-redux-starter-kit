import React, { Component } from "react";
import { Header, Left, View, Container, Button, Body, Title, Right, Icon } from "native-base";
import { StatusBar, Platform, Image } from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";
import styles from "./styles";

let flashIcon = require("../../../assets/icon/flash.png");
let flashOffIcon = require("../../../assets/icon/flashoff.png");

export default class ScanQRCode extends Component {
  constructor() {
    super();
    this.scanner = null;
  }
  componentDidMount(){
    this.scanner.reactivate();
  }
  render() {
    return (
      <Container>
        <StatusBar
          backgroundColor={"transparent"}
          translucent
        />
        <Header
          noShadow
          androidStatusBarColor={"transparent"}
          style={{
            backgroundColor: "transparent",
            borderBottomColor: "transparent",
            marginTop: Platform.OS === "android" ? StatusBar.currentHeight : undefined
          }}>
          <Left style={{flex: 0.3}}>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body style={{flex: 0.4}}>
          <Title style={{alignSelf: "center", color: "#fff"}}>Scan QR Code</Title>
          </Body>
          <Right style={{flex: 0.3}}>
            <Button transparent onPress={()=> this.props.switchFlashMode()}>
              <Image source={this.props.flashStatus ? flashOffIcon : flashIcon} />
            </Button>
          </Right>
        </Header>
        <View style={styles.containerCamera}>
          <QRCodeScanner
            flashMode={this.props.flashMode}
            onRead={(event) => this.props.onSuccess(event.data)}
            checkAndroid6Permissions={true}
            showMarker={true}
            cameraStyle={styles.camera}
            //customMarker={this._customMarker()}
            ref={(node) => {
              this.scanner = node;
            }}
          />
        </View>
      </Container>
    );
  }
}
