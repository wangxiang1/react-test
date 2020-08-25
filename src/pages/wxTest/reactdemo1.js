import React, { Component } from 'react'
import { Button } from 'antd'

export default class ReactDemo1 extends Component {
  // 在 React 组件挂载之前，会调用它的构造函数。
  constructor(props){
    super(props)
    console.log('constructor');
    this.state={
      name: 'testname'
    }
  }

  // 在挂载之前被调用。它在 render() 之前调用，因此在此方法中同步调用 setState() 不会触发额外渲染
  componentWillMount(){
    console.log('componentWillMount');
  }

  // 在挂载之后被调用
  componentDidMount(){
    console.log('componentDidMount');
  }

  // 已挂载的组件接收新的 props 之前被调用
  componentWillReceiveProps(nextProps){
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate(){
    console.log('shouldComponentUpdate');
    return true;
  }

  // 当组件收到新的 props 或 state 时，会在渲染之前调用
  componentWillUpdate(nextProps, nextState){
    console.log('componentWillUpdate');
  }

  // 会在更新后会被立即调用
  componentDidUpdate(prevProps, prevState){
    console.log('componentDidUpdate');
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
      </div>
    )
  }
}
