import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// import { StateProvider } from "./Context/StateProvider";
// import { initialState } from "./Context/initalState";
// import reducer from "./Context/reducer";

import App from "./App";
import store from "./Redux/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
