import React, { Component } from "react";
import { Provider } from "react-redux";
import { Provider as UIProvider } from "react-native-paper";

// import store from "./store";
import theme from "./theme";
import AppNavigator from "./AppNavigator";
// import Layout from "./component/Layout";

export default class App extends Component {
  render() {
    return (
      // <Provider store={store}>
        <UIProvider theme={theme}>
          {/* <Layout> */}
            <AppNavigator />
          {/* </Layout> */}
        </UIProvider>
      // </Provider>
    );
  }
}
