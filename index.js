import { KeepAwake, registerRootComponent } from "expo";
import { AppRegistry } from "react-native";
import App from "./src/boot";
import { name as appName } from "./app.json";

if (__DEV__) {
  KeepAwake.activate();
}

// AppRegistry.registerComponent(appName, () => App);
registerRootComponent(App);
