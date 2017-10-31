
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './stores/configureStore';

function Setup():React.Component {
  class Root extends Component {
    constructor() {
        super();
        this.state = {
          isLoading: true,
          store: configureStore(() => this.setState({ isLoading: false })),
        };
    }

    render() {
      return (
        <Provider store={this.state.store}>
          <App />
        </Provider>
      );
    }
  }
  return Root;
}

export default Setup;
