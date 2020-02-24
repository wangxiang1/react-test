import React from 'react'

// react中通过context实现祖组件向后台组件跨层级传值
// 创建一个context对象，创建一个上下文的容器(组件), defaultValue可以设置共享的默认数据
// const {Provider, Consumer} = React.createContext(defaultValue);
export const ThemeContext = React.createContext({themeColor: 'green'});

// Provider(生产者): 和他的名字一样。
// 用于生产共享数据的地方。生产什么呢？ 那就看value定义的是什么了。value:放置共享的数据。
// <Provider value={/*共享的数据*/}>
    /*里面可以渲染对应的内容*/
// </Provider>
export const ThemeProvider = ThemeContext.Provider;

// Consumer(消费者)：他是专门消费供应商(Provider 上面提到的)产生数据。
// <Consumer>
//  {value => /*根据上下文  进行渲染相应内容*/}
// </Consumer>
export const ThemeConsumer = ThemeContext.Consumer;