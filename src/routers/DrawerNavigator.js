import React from "react";
import { createDrawerNavigator } from "react-navigation";
import SideBar from "../containers/SlidebarContainer";
import Home from "../containers/HomeContainer";
import Modal from "../containers/ModalContainer";

export default createDrawerNavigator(
  {
    Home: { screen: Home },
    Modal: { screen: Modal },
  },
  {
    initialRouteName: "Home",
    contentComponent: props => <SideBar {...props} />
  }
);
