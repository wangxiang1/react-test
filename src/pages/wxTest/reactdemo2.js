import React, { Component } from 'react'
import { Button } from 'antd'
import Child1 from './child1';

export default class ReactDemo2 extends Component {
  // 在 React 组件挂载之前，会调用它的构造函数。
  constructor(props){
    super(props)
    console.log('constructor');
    this.state={
      name: 'testname'
    }
  }

  // 会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。
  // 它应返回一个对象来更新 state，如果返回 null 则不更新任何内容。
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps')
  }

  // 在挂载之后被调用
  componentDidMount(){
    console.log('componentDidMount');
  }


  shouldComponentUpdate(){
    console.log('shouldComponentUpdate');
    return true;
  }

  // 在最近一次渲染输出（提交到 DOM 节点）之前调用。
  // 它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。
  // 此生命周期的任何返回值将作为参数传递给 componentDidUpdate()。
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('getSnapshotBeforeUpdate');
    return null;
  }

  // 会在更新后会被立即调用
  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('componentDidUpdate snapshot:', snapshot);
  }

  handleUpdateName = () => {
    this.setState({name: 'name' + Math.random().toFixed(1) * 10})
  }

  render() {
    console.log('render');
    return (
      <div>
        react test {this.state.name}
        <Button onClick={this.handleUpdateName}>update</Button>
        <Child1 name={this.state.name} />
      </div>
    )
  }
}
