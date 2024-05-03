import { Component, ReactNode } from "react";
import { MainContext, ValueContext, defaultValue } from "../context";
import { RouterProvider } from "react-router-dom";
import router from "../router";

export default class App extends Component {
  state: ValueContext = defaultValue;
  render(): ReactNode {
    return (
      <MainContext.Provider value={this.state}>
        <RouterProvider router={router} />
      </MainContext.Provider>
    )
  }
}
