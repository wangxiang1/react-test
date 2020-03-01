import React, { Component } from 'react'
const valueContext = React.createContext();

// 把Provider放在根组件外层，使⼦子组件能获得store
// 1、将store存入context
class Provider extends Component {
  render() {
    return (
      <valueContext.Provider value={this.props.store}>
        {this.props.children}
      </valueContext.Provider>
    )
  }
}

// 连接子组件和store
// 1、高阶组件，接收一个组件，返回一个新组件
// 2、子组件通过context接收store
const connect = (
  mapStateToProps = state => state,
  mapDispatchToProps
) => WrappedComponent => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        props: {}
      }
    }
    // 子组件需要通过一个静态属性contextType声明后，
    // 才能通过this.context访问父组件Context对象的属性
    static contextType = valueContext;

    componentDidMount() {
      this.update();
      
      const { subscribe } = this.context;
      subscribe(() => {
        this.update()
      })
    }

    update(){
      console.log('this.context', this.context);
      // 此时的this.context就是store，因为Provider传递了value是this.props.store
      const { getState, dispatch } = this.context;
      const stateProps = mapStateToProps(getState());
      let dispatchProps = {};

      // 如果是对象的话，原版的dispatch就没有被注入了
      // {
      // add: () => ({type: "ADD"})
      // }
      if (typeof mapDispatchToProps === 'object') {
        dispatchProps = bindActionCreators(mapDispatchToProps, dispatch)
      }else if(typeof mapDispatchToProps === 'function'){
        dispatchProps = mapDispatchToProps(dispatch)
        // console.log('dispatchProps',dispatchProps);
      }else{
        dispatchProps = { dispatch };
      }
      
      this.setState({props: {...stateProps, ...dispatchProps}})
    }

    render() { 
      return ( 
        <WrappedComponent { ...this.props } {...this.state.props} /> 
      );
    }
  }
}

// function bindActionCreator(creater, dispatch) {
  
// }

function bindActionCreators(creaters, dispatch) {
  const obj = {};
  for (const key in creaters) {
    obj[key] = (...args) => dispatch(creaters[key](...args))
  }
  return obj;
}

export {
  Provider,
  connect
}
