/*
 * @Author: wangxiang 
 * @Desc:  react-router page
 * @Date: 2020-02-29 23:16:50 
 * @Last Modified by: wangxiang
 * @Last Modified time: 2020-03-01 00:35:41
 */
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import { connect } from '../WReactRedux/index';
import PrivateRoute from '../PrivateRoute/index';
import HomePage from './HomePage';
import UserManagePage from './UserManagePage';
import Login from './Login';

export default connect(
  state => state,
)(
  class RouterPage extends Component {
    render() {
      console.log(this.props);
      const { loginReducer: isLogin } = this.props;
  
      return (
        <div>
          <Router>
            <Link to="/">首页</Link>
            &nbsp;&nbsp;
            <Link to="/user">用户管理</Link>
            &nbsp;&nbsp;
            <Link to="/login">login</Link>
            {/* 添加Switch表示仅匹配⼀一个*/}
            <Switch>
              <PrivateRoute isLogin={isLogin} exact path="/" component={HomePage} />
              <PrivateRoute isLogin={isLogin} path="/user" component={UserManagePage} />
              <Route path="/login" component={Login} />
              <PrivateRoute isLogin={isLogin} render={() => <h1>404</h1>} />
            </Switch>
          </Router>
        </div>
      )
    }
  }
)
