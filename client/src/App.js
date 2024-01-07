import React from "react";
// import Layout from "./layouts";
import MainRoutes from "./Routes/MainRoutes";
// import store from "./store";
import { Provider } from "react-redux";
import "./App.css";
import "antd/dist/reset.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "react-perfect-scrollbar/dist/css/styles.css";
// import ToastWrapper from "./components/modals/toaster";

const App = () => {
  return (
    <>
      {/* <Provider store={store}> */}
      {/* <ToastWrapper /> */}
      <MainRoutes />
      {/* </Provider> */}
    </>
  );
};

export default App;
