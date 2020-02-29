import React, { Component } from "react";
import store from "../store/index";
import { Button } from "antd";
import { connect } from "../MReactRedux";
import { bindActionCreators } from "redux";

// connect 帮助子组件和store连接，高阶组件，返回一个新组件
export default connect(
  // mapStateToProps 将state映射到props上
  state => ({value: state}),
  // mapDispatchToProps Object/Function 如果不定义 默认把props注⼊入组件
  // 如果是对象的话，原版的dispatch就没有被注入了
  dispatch => {
    let res = { add: () => ({ type: "ADD" }) };
    res = bindActionCreators(res, dispatch);
    return { dispatch, ...res };
  }
)(
  class ReactReduxPage extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    componentDidMount() {}

    handleAdd = () => {
      const {add} = this.props;
      add();
    };

    handleSubstract = () => {
      store.dispatch({ type: "SUBSTRACT" });
    };

    render() {
      const {value} = this.props;
      console.log('props', this.props);

      return (
        <div>
          <h3>React Redux Page</h3>
          <p>{value && value.countReducer}</p>
          <Button type="primary" onClick={this.handleAdd}>
            ADD
          </Button>
          &nbsp;&nbsp;
          <Button type="primary" onClick={this.handleSubstract}>
            SUBSTRACT
          </Button>
        </div>
      );
    }
  }
);
