import React from "react";

import { Platform } from "react-native";
import { Root, StyleProvider } from "native-base";
import { StackNavigator } from "react-navigation";

import getTheme from '../../native-base-theme/components';
import material from '../themes/base-theme';

import Drawer from "./Drawer";

import SideBar from "../components/sidebar";
import BasicFooter from "../components/home/basicFooter";
import IconFooter from "../components/home/iconFooter";
import IconText from "../components/home/iconText";
import BadgeFooter from "../components/home/badgeFooter";

const AppNavigator = StackNavigator(
    {
        Drawer: { screen: Drawer },

        BasicFooter: {screen: BasicFooter},
        IconFooter: {screen: IconFooter},
        IconText: {screen: IconText},
        BadgeFooter: {screen: BadgeFooter},
    },
    {
        initialRouteName: "Drawer",
        headerMode: "none",
    }
);

export default () =>
    <Root>
      <StyleProvider style={getTheme(material)}>
        <AppNavigator />
      </StyleProvider>
    </Root>;
