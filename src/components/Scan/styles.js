import { Dimensions } from "react-native";

export default{
  camera: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  containerCamera: {
    position: "absolute",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    zIndex: -1
  },
};
