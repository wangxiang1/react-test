/*
 * @Author: wangxiang 
 * @Desc:  路由守卫： 创建高阶组件包装Route使其具有权限判断功能
 * @Date: 2020-02-29 23:37:49 
 * @Last Modified by: wangxiang
 * @Last Modified time: 2020-03-01 00:05:18
 */
import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom';

export default class PrivateRoute extends Component {
  render() {
    const {isLogin, path} = this.props;

    if (isLogin) {
      return <Route {...this.props} />
    }else {
      return <Redirect to={{pathname: "/login", state: {redirect: path}}} />
    }
  }
}
