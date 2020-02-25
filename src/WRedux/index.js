export function createStore(reducer) {

  let currentState = undefined;
  let currentListeners = [];

  // 获取状态getState
  function getState() {
    return currentState;
  }

  // 更新状态dispatch
  function dispatch(action) {
    currentState = reducer(currentState, action);
    console.log('currentState:', currentState)
    currentListeners.forEach(item => item())
    return action;
  }

  // 变更订阅subscribe
  function subscribe(listener) {
    currentListeners.push(listener);
  }

  // 默认调用一次
  dispatch({type:'@@OOO/KKB-REDUX'})

  return {
    getState,
    dispatch,
    subscribe
  }
}

// combineReducers 的处理之后得到一个新的reducer: function(state, action){...}
export function combineReducers(reducers){
  return function(state, action) {
    //Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
    //Object.assign(target, ...sources)    【target：目标对象】，【souce：源对象（可多个）】
    switch (action.type) {
      case 'INIT':
        return 'init reducer'
      default:
        return Object.keys(reducers)
        .map(k => ({[k]: reducers[k](state && state[k] ? state[k] : undefined, action)}))
        .reduce((prev, next) => Object.assign({}, prev, next))
    }
  }
}