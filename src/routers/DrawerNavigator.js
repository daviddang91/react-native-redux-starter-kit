import React from "react";
import { createDrawerNavigator } from "react-navigation";
import SideBar from "../containers/SlidebarContainer";
import Scan from "../containers/ScanContainer";
import History from "../containers/HistoryContainer";
import Result from "../containers/ResultContainer";

export default createDrawerNavigator(
  {
    Scan: { screen: Scan },
    History: { screen: History },
    Result: { screen: Result }
  },
  {
    initialRouteName: "Scan",
    contentComponent: props => <SideBar {...props} />
  }
);
