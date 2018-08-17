import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "./stores/configureStore";
import { PersistGate } from "redux-persist/integration/react";
import App from "./routers/App";
import getTheme from "../native-base-theme/components";
import material from "../native-base-theme/variables/material";
import { StyleProvider } from "native-base";

export default class Root extends Component {
  constructor(props) {
    super(props);
    const { persistor, store } = configureStore();
    this.persistor = persistor;
    this.store = store;
  }
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Provider store={this.store}>
          <PersistGate persistor={this.persistor}>
            <App/>
          </PersistGate>
        </Provider>
      </StyleProvider>
    );
  }
}

global.XMLHttpRequest = global.originalXMLHttpRequest ?
  global.originalXMLHttpRequest :
  global.XMLHttpRequest;
global.FormData = global.originalFormData ?
  global.originalFormData :
  global.FormData;

fetch; // Ensure to get the lazy property

if (window.__FETCH_SUPPORT__) { // it's RNDebugger only to have
  window.__FETCH_SUPPORT__.blob = false;
} else {
  global.Blob = global.originalBlob ?
    global.originalBlob :
    global.Blob;
  global.FileReader = global.originalFileReader ?
    global.originalFileReader :
    global.FileReader;
}

