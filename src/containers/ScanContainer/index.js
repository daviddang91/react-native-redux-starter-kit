import React, { Component } from "react";
import { RNCamera } from "react-native-camera";
import { connect } from "react-redux";
import { scanQRCode } from "../../actions";
import Scan from "../../components/Scan";

class ScanContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flashMode: RNCamera.Constants.FlashMode.off,
      flashStatus: false
    };
  }
  componentWillReceiveProps(nextProps){
    if (this.props.scanner.isFinished !== nextProps.scanner.isFinished){
      if (nextProps.scanner.isFinished){
        this.props.navigation.navigate("Result");
      }
    }
  }
  onSuccess(code){
    this.props.scanQrCode({attend_code: code});
  }
  switchFlashMode() {
    let flashStatus = this.state.flashStatus;
    if (flashStatus) {
      this.setState({
        flashMode: RNCamera.Constants.FlashMode.off
      });
    } else {
      this.setState({
        flashMode: RNCamera.Constants.FlashMode.torch,
      });
    }
    this.setState({
      flashStatus: !flashStatus
    });
  }
  render() {
    return (
      <Scan
        flashMode={this.state.flashMode}
        onSuccess={(code) => this.onSuccess(code)}
        switchFlashMode={() => this.switchFlashMode()}
        flashStatus={this.state.flashStatus}
        navigation={this.props.navigation}/>
    );
  }
}

const mapStateToProps = state => ({
  scanner: state.scanner,
});

const mapDispatchToProps = dispatch => ({
  scanQrCode: ({ attend_code }) => dispatch(scanQRCode({attend_code})),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScanContainer);

