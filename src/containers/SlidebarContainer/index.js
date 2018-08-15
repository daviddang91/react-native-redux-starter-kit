import React, { Component } from "react";
import Sidebar from "../../components/Sidebar";
import { connect } from "react-redux";
import { userRequestLogout } from "../../actions";

class SidebarContainer extends Component {
  constructor(props) {
    super(props);
    this.data = [
      {
        name: "Scan",
        route: "Scan",
        icon: require("../../../assets/icon/digital.png")
      },
      {
        name: "History",
        route: "History",
        icon: require("../../../assets/icon/counterclockwiseRotation.png")
      },
      {
        name: "Logout",
        route: "Logout",
        icon: require("../../../assets/icon/logout.png")
      }
    ];
  }

  navigator(data) {
    if (data.route === "Logout") {
      this.props.logout();
      this.props.navigation.navigate("Login");
    } else {
      this.props.navigation.navigate(data.route);
    }
  }

  render() {
    return (
      <Sidebar
        data={this.data}
        account={this.props.auth.data.account}
        onPress={(data) => this.navigator(data)}/>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(userRequestLogout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarContainer);
