// 1. this의 사용 예시
function lastName() {
  return this.name[0];
};

function greet() {
  var greeting = "제 성은 " + lastName.call(this) + "입니다";
  console.log(greeting);
};

var name1 = {
  name : "김--"
};

var name2 = {
  name : "박--"
};

greet.call(name1);
greet.call(name2);