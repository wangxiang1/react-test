/*
 * @Author: wangxiang
 * @Desc: contex测试
 * @Date: 2020-02-23 17:19:09
 * @Last Modified by: wangxiang
 * @Last Modified time: 2020-02-23 18:51:49
 */
import React, { Component } from 'react';
import { ThemeProvider, ThemeContext } from '../themeContext'; 
import ConsumerPage from './ConsumerPage';
import { Button } from 'antd';
import { testCompose } from '../utils/test';

class ContextPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: {
        themeColor: 'red'
      }
    };
  }

  changeColor = () => {
    this.setState({
      theme: this.state.theme.themeColor === 'red'? {themeColor: 'blue'} : {themeColor: 'red'}
    })
  }

  static contextType = ThemeContext;

  /* reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。 */
  reduceText = () => {
    const arr = [1,2,3,4,5];
    // const reducer = (accumulator, currentValue) => {
    //   console.log(currentValue);
    //   return accumulator + currentValue;
    // }
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    console.log(arr.reduce(reducer));
    
    console.log(arr.reduce(reducer, 10));

    testCompose();
  }

  render() {
    console.log('context page: ', this.context.themeColor);  
    return (
      <ThemeProvider value={this.state.theme}>
        {/* 直接从context里取值，取到的都是默认值 */}
        <h3 style={{color: this.context.themeColor}}>
          ContextPage, color: {JSON.stringify(this.state.theme)}
        </h3>
        <Button type="primary" onClick={this.reduceText}>reduce test</Button>
        <Button onClick={this.changeColor}>change color</Button>
        <ConsumerPage/>
      </ThemeProvider>
    );
  }
}

export default ContextPage;
