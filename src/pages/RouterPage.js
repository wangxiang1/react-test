/*
 * @Author: wangxiang 
 * @Desc:  react-router page
 * @Date: 2020-02-29 23:16:50 
 * @Last Modified by: wangxiang
 * @Last Modified time: 2020-03-06 17:55:46
 */
import React, { Component } from 'react';
// import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {BrowserRouter, Route, Link} from '../WReactRouterDom/index.js';
import { connect } from '../WReactRedux/index';
// import PrivateRoute from '../PrivateRoute/index';
// import HomePage from './HomePage';
// import UserManagePage from './UserManagePage';
import Login from './Login';
import HocComponent from './HocComponent';

export default connect(
  state => state,
)(
  class RouterPage extends Component {
    render() {
      console.log(this.props);
      // const { loginReducer: isLogin } = this.props;
  
      return (
        <div>
          <BrowserRouter>
            {/* <Link to="/">首页</Link>
            &nbsp;&nbsp;
            <Link to="/user">用户管理</Link>
            &nbsp;&nbsp; */}
            <Link to="/login">login</Link>
            &nbsp;&nbsp;
            <Link to="/hoc">hoc</Link>
            {/* 添加Switch表示仅匹配⼀一个*/}
            {/* Route渲染优先级：children > component > render */}
            {/* <Switch>
              <PrivateRoute isLogin={isLogin} exact path="/" component={HomePage} />
              <PrivateRoute isLogin={isLogin} path="/user" component={UserManagePage} />
              <Route path="/login" component={Login} />
              <Route render={() => <h1>404</h1>} />
              <PrivateRoute isLogin={isLogin} render={() => <h1>404</h1>} />
            </Switch> */}

            <Route path="/login" component={Login} />
            <Route path="/hoc" component={HocComponent} />
            <Route path="/render" render={() => <h1>render div</h1>} />
            <Route path="/child" children={() => <h2>children div</h2>} />
          </BrowserRouter>
        </div>
      )
    }
  }
)
