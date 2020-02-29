import React from "react";
// import logo from './logo.svg';
import "./App.css";
// import HocComponent from "./pages/HocComponent";
// import { Button } from "antd";
// import Login from "./pages/Login";
// import ReduxPage from "./pages/ReduxPage";
import ReactReduxPage from "./pages/ReactReduxPage";
// import ContextPage from "./pages/ContextPage";


function App() {
  return (
    <div>
      {/* hoc高阶组件 */}
      {/* <HocComponent /> */}

      {/* 手写 Form装饰器 */}
      {/* <Login /> */}

      {/* context */}
      {/* <ContextPage/> */}
      
      {/* redux */}
      {/* <ReduxPage /> */}

      {/* react-redux */}
      <ReactReduxPage/>
    </div>
  );
}

export default App;
