import {createStore, combineReducers, applyMiddleware} from 'redux';
// import {createStore, combineReducers} from '../WRedux/index';
// import logger from "redux-logger";
import thunk from "redux-thunk";

/* 
  1. 需要⼀一个store来存储数据
  2. store⾥的reducer初始化state并定义state修改规则
  3. 通过dispatch⼀一个action来提交对数据的修改
  4. action提交到reducer函数⾥，根据传⼊的action的type，返回新的state
*/
function countReducer (state = 0, action) {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    case 'SUBSTRACT':
      return state - 1;
    case 'ADDINPUT': {
      return state + action.payload.value;
    }
    default:
      return state;
  }
}

function userReducer (state = 'init value', action) {
  switch (action.type) {
    case 'MYNAME':
      return 'wangxiang';
    default:
      return state;
  }
}

const store = createStore(
  combineReducers({countReducer, userReducer}),
  applyMiddleware(thunk)
);

// const store = createStore(
//   countReducer
// );

export default store;