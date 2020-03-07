/*
 * @Author: wangxiang 
 * @Desc:  历史记录管理对象history初始化及向下传递，location变更更监听
 * @Date: 2020-03-02 17:36:42 
 * @Last Modified by: wangxiang
 * @Last Modified time: 2020-03-04 18:15:07
 */
import React, { Component } from 'react';
import {createBrowserHistory} from "history";
import { RouterProvider } from "./RouterContext";

export default class BrowserRouter extends Component {
  constructor(props) {
    super(props);
    this.history = createBrowserHistory();
    this.state={
      location: this.history.location
    }

    this.unlisten = this.history.listen((location) => {
      this.setState({location})
    })
  }

  componentWillUnmount(){
    this.unlisten = null;
  }
  
  render() {
    return (
      <RouterProvider value={{history: this.history, location: this.state.location}}>
        {this.props.children}
      </RouterProvider>
    )
  }
}
