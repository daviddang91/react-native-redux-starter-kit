import React, { Component } from "react";
import { Alert } from "react-native";
import { connect } from "react-redux";
import SwitchEnv from "../../components/SwitchEnv";
import { switchEnv } from "../../actions";

class SwitchEnvContainer extends Component {

  selectMode(env){
    Alert.alert(
      "Switch Environment",
      `Do you want to switch to ${env} environment?`,
      [
        {text: "Cancel", style: "cancel"},
        {text: "OK", onPress: () => {
          this.props.switchEnv(env);
            this.props.navigation.navigate("Login");
          }},
      ],
      { cancelable: false }
    );
  }

  render() {
    return (
      <SwitchEnv
        env={this.props.env}
        selectMode={(env) => this.selectMode(env)}
        navigation={this.props.navigation}/>
    );
  }
}

const mapStateToProps = state => ({
  env: state.env.prefix,
});

const mapDispatchToProps = dispatch => ({
  switchEnv: (env) => dispatch(switchEnv(env))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SwitchEnvContainer);
