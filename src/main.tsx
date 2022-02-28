import React, { FC } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

const MOUNT_NODE = document.getElementById("root") as HTMLElement;

const ConnectedApp: FC = ({ children }) => {
  return (
    <Provider store={store}>
      <React.StrictMode>{children}</React.StrictMode>
    </Provider>
  );
};

ReactDOM.render(
  <ConnectedApp>
    <App />
  </ConnectedApp>,
  MOUNT_NODE
);
