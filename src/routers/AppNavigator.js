import { createStackNavigator } from "react-navigation";
import Drawer from "./DrawerNavigator";

export default createStackNavigator(
  {
    Drawer: { screen: Drawer },
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);
