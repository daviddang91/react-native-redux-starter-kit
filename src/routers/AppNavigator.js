import React from "react";

import { Platform } from "react-native";
import { Root, StyleProvider } from "native-base";
import { StackNavigator } from "react-navigation";

import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';

import Drawer from "./Drawer";

const AppNavigator = StackNavigator(
    {
        Drawer: { screen: Drawer },
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
