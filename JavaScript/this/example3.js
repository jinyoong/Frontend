// 3. this는 함수의 렉시컬 스코프를 참조하지 않는다.
function one() {
  var result = 2;
  this.two();
};

function two() {
  console.log(this.result);
};

one();