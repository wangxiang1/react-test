/* 聚合函数 */
function compose(...funcs) {
  console.log('compose:', funcs);
  if(funcs.length === 0){
    return arg => arg;
  }else if(funcs.length === 1){
    return funcs[0];
  }else{
    return funcs.reduce((a ,b) => (...args) => {
      a(b(...args));
    })
  }
}

function f1(arg) {
  console.log("f1", arg);
  return arg;
}

function f2(arg) {
  console.log("f2", arg);
  return arg;
}

function f3(arg) {
  console.log("f3", arg);
  return arg;
}

export function testCompose(){
  f1(f2(f3("no compose")))
  compose()('zero params');
  compose(f1)('one params');
  compose(f1, f2, f3)('three params');
}