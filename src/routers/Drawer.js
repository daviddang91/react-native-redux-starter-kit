import React from "react";
import { DrawerNavigator } from "react-navigation";

import SideBar from "../components/sidebar";
import Home from "../components/home";
import ModalBox from "../components/modalbox";

const MainDrawerRouter = DrawerNavigator(
  {
    Home: {screen: Home},
    ModalBox: {screen: ModalBox},
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

export default MainDrawerRouter;
