import { createSwitchNavigator } from "react-navigation";
import App from "./AppNavigator";
import Loading from "../containers/LoadingContainer";
import Login from "../containers/LoginContainer";
import SwitchEnv from "../containers/SwitchEnvContainer";
import Bundle from "../containers/BundleContainer";

export default createSwitchNavigator(
  {
    Loading: Loading,
    App: App,
    Login: Login,
    SwitchEnv: SwitchEnv,
    Bundle: Bundle
  },
  {
    initialRouteName: "Loading"
  }
);
