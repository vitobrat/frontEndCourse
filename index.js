//дз из codewars
function zero(fun) {
  if(fun == undefined){
    return 0;
  }else{
    return print(0, fun);
  }
}
function one(fun) {
  if(fun == undefined){
    return 1;
  }else{
    return print(1, fun);
  }
}
function two(fun) {
  if(fun == undefined){
    return 2;
  }else{
    return print(2, fun);
  }
}
function three(fun) {
  if(fun == undefined){
    return 3;
  }else{
    return print(3, fun);
  }
}
function four(fun) {
  if(fun == undefined){
    return 4;
  }else{
    return print(4, fun);
  }
}
function five(fun) {
  if(fun == undefined){
    return 5;
  }else{
    return print(5, fun);
  }
}
function six(fun) {
  if(fun == undefined){
    return 6;
  }else{
    return print(6, fun);
  }
}
function seven(fun) {
  if(fun == undefined){
    return 7;
  }else{
    return print(7, fun);
  }
}
function eight(fun) {
  if(fun == undefined){
    return 8;
  }else{
    return print(8, fun);
  }
}
function nine(fun) {
  if(fun == undefined){
    return 9;
  }else{
    return print(9, fun);
  }
}
 
function plus(val) {
  return [1, val];
}
function minus(val) {
  return [2, val];
}
function times(val) {
  return [3, val];
}
function dividedBy(val) {
  return [4, val];
}

function print(value, fun){
  switch(fun[0]){
    case 1: 
      return value + fun[1];
      break;
    case 2:
      return value - fun[1];
      break;
    case 3:
      return value * fun[1];
      break;
    case 4:
      return Math.trunc(value / fun[1]);
      break;
  }
}

let result = nine(minus(three()));
console.log(result);