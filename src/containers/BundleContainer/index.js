import React, { Component } from "react";
import { Alert } from "react-native";
import { connect } from "react-redux";
import axios from "axios/index";
import Bundle from "../../components/Bundle";
import { LIST_BUNDLE } from "../../constants/apis";
import { switchBundle } from "../../actions";

class BundleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    let self = this;
    axios.get(LIST_BUNDLE)
      .then(function(response) {
        self.setState({
          data: response.data
        });
      })
      .catch(function(error) {
        console.error(error);
      });
  }

  selectBundle(data){
    Alert.alert(
      "Switch Bundle",
      `Do you want to switch to ${data.prefix} bundle?`,
      [
        {text: "Cancel", style: "cancel"},
        {text: "OK", onPress: () => {
            this.props.switchBundle({
              appointmentUrl: data.appointmentUrl,
              cmeUrl: data.cmeUrl,
              prefix: data.prefix
            });
            this.props.navigation.navigate("Login");
          }},
      ],
      { cancelable: false }
    );
  }

  render() {
    return (
      <Bundle
        data={this.state.data}
        selectBundle={(data) => this.selectBundle(data)}
        navigation={this.props.navigation}/>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  switchBundle: (bundle) => dispatch(switchBundle(bundle))
});

export default connect(
  null,
  mapDispatchToProps
)(BundleContainer);
