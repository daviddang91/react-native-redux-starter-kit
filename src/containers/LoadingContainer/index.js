import React, { Component } from "react";
import SplashScreen from "react-native-splash-screen";
import Loading from "../../components/Loading";
import { connect } from "react-redux";

class LoadingContainer extends Component {
  componentDidMount(){
    setTimeout(() => {
      SplashScreen.hide();
    }, 300);
    this.props.navigation.navigate(this.props.auth.token ? "App" : "Login");
  }
  render() {
    return (
      <Loading navigation={this.props.navigation}/>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});


export default connect(
  mapStateToProps,
  null
)(LoadingContainer);
