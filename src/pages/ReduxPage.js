import React, { Component } from "react";
import store from "../store/index";
import { Button, InputNumber } from "antd";

// function test(fn, age) {
//   console.log('age11=========:')
//   return function (...args) {
//     console.log('age:', age)
//     return fn(...args);
//   }
// }

class ReduxPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  componentDidMount() {
    // subscribe方法(指定监听函数，当state变化时调用)，
    store.subscribe(() => {
      /* 
        默认情况下，当组件的state或props改变时，组件将重新渲染。如果你的render()方法依赖于一些其他的数据，你可以告诉React组件需要通过调用forceUpdate()重新渲染。
        调用forceUpdate()会导致组件跳过shouldComponentUpdate(),直接调用render()。这将触发组件的正常生命周期方法,包括每个子组件的shouldComponentUpdate()方法。
        forceUpdate就是重新render。有些变量不在state上，当时你又想达到这个变量更新的时候，刷新render；或者state里的某个变量层次太深，更新的时候没有自动触发render。这些时候都可以手动调用forceUpdate自动触发render
      */
      this.forceUpdate();
    })
  }

  handleAdd = () => {
    // dispatch方法(分发action)。
    store.dispatch({type: 'ADD'})
  }

  handleSubstract = () => {
    store.dispatch({type: 'SUBSTRACT'})
  }

  handleGetName = () => {
    store.dispatch({type: 'MYNAME'})
  }

  handleAsyncAdd = () => {
    // const a = 'wang';

    // const addObj = {add: () => ({type: 'ADD'})}

    // const aa = test((a, b) => {
    //   console.log('test================',a, b)
    //   return 'wangxiang';
    // }, 100);
    // console.log(aa);

    // aa(1,2)
    store.dispatch((dispatch) => {
      setTimeout(() => {
        store.dispatch({type: 'ADD'})
      },1000)
    })
  }

  handleInputChange = (value) => {
    console.log(typeof value);
    this.setState({value})
  }
  
  handleClick = () => {
    const {value} = this.state;
    
    store.dispatch({type: 'ADDINPUT', payload: {value}})
  }

  render() {
    const { value } = this.state;
    // store对象中包括getState方法(获取目前的state)，
    // subscribe方法(指定监听函数，当state变化时调用)，
    // dispatch方法(分发action)。
    // console.log('store:', store, store.getState());
    // console.log({}.toString());
    // console.log([].toString());
    
    const state = store.getState();

    return (
      <div>
        <h3>Redux Page</h3>
        <p>{state.countReducer}</p>
        <p>{state.userReducer}</p>
        <Button type="primary" onClick={this.handleAdd}>ADD</Button>
        &nbsp;&nbsp;
        <Button type="primary" onClick={this.handleAsyncAdd}>异步add</Button>
        &nbsp;&nbsp;
        <Button type="primary" onClick={this.handleSubstract}>SUBSTRACT</Button>
        &nbsp;&nbsp;
        <Button type="primary" onClick={this.handleGetName}>MyName</Button>
        <hr/>
        <InputNumber style={{width: 200}} value={value} onChange={this.handleInputChange} />
        <Button onClick={this.handleClick}>确定</Button>
      </div>
    );
  }
}

export default ReduxPage;
