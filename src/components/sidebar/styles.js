import { StyleSheet, Platform, Dimensions } from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  sidebar: {
    flex: 1,
    backgroundColor: "#fff"
  },
  backgroundCover: {
    position: 'absolute'
  },
  drawerCover: {
    height: deviceHeight / 3.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: "#fff"
  },
  drawerImage: {
    width: 210,
    height: 75,
  },
  icon: {
    color: "#777",
    fontSize: 26,
    width: 30
  },
  listItemContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  iconContainer: {
    width: 37,
    height: 37,
    borderRadius: 18,
    marginRight: 12,
    paddingTop: Platform.OS === "android" ? 7 : 5
  },
  sidebarIcon: {
    fontSize: 21,
    color: "#fff",
    lineHeight: Platform.OS === "android" ? 21 : 25,
    backgroundColor: "transparent",
    alignSelf: "center"
  },
  text: {
    fontWeight: Platform.OS === "ios" ? "500" : "400",
    fontSize: 16,
    marginLeft: 20
  },
  badgeText: {
    fontSize: Platform.OS === "ios" ? 13 : 11,
    fontWeight: "400",
    textAlign: "center",
    marginTop: Platform.OS === "android" ? -3 : undefined
  }
};
