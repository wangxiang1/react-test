/*
 * @Author: wangxiang 
 * @Desc:  HOC高阶组件
 * @Date: 2020-02-21 20:55:05 
 * @Last Modified by: wangxiang
 * @Last Modified time: 2020-02-22 17:07:15
 */
import React, { Component } from 'react';

// 高阶组件 HOC：是一个函数，接收一个组件返回一个新的组件
const foo = (Cmp) =>{
  return (props) => {
    return (
      <div style={{border: '1px solid red', padding: '5px'}}>
        <Cmp {...props} />
      </div>
    )
  }
}

const foo2 = (Cmp) =>{
  return (props) => {
    return (
      <div style={{border: '1px solid green', padding: '5px'}}>
        <Cmp {...props} />
      </div>
    )
  }
}

// const Child = (props) => <div>Child {props.name}：{props.desc}</div>

// !装饰器只能用在class上， 所以把Child的方法改成了组件
// 执行顺序 自下而上
@foo2
@foo
@foo
class Child extends Component {
  render() {
    return (
      <div>Child {this.props.name}：{this.props.desc}</div>
    )
  }
}

// const Foo = foo2(foo(foo(Child)))

class HocComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h3>HOC Component</h3>
        <Child name="我是hoc的name" desc="描述===================" />
        {/* <Foo name="我是hoc的name" desc="描述===================" /> */}
      </div>
    );
  }
}

export default HocComponent;
