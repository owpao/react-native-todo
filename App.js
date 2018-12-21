import React from "react";
import { Provider } from "react-redux";

import store from "./src/store";
import Navigation from "./src/navigation";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
