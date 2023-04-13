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

// 2. this는 자기자신을 가르키는게 아니다
function plusCount(number) {
  console.log("plusCount 호출 횟수 : ", number);
  this.count++;
};

plusCount.count = 0;
for (let i = 0; i < 5; i++) {
  if (i > 2) {
    plusCount(i);
  };
};

console.log(plusCount.count);