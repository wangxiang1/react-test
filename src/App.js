import React from "react";
// import logo from './logo.svg';
import "./App.css";
import HocComponent from "./pages/HocComponent";
// import { Button } from "antd";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <HocComponent />
      {/* <Button type="primary">test</Button> */}
      <Login />
    </div>
  );
}

export default App;
