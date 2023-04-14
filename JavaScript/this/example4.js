// 4. 호출부와 호출 스택
function one() {
  // 호출 스택 : one
  // 호출부는 one 바로 직전인 "전역 스코프"의 내부
  console.log("one");
  two();
};

function two() {
  // 호출 스택 : one => two
  // 호출부는 two 바로 직전인 "one" 내부
  console.log("two");
};

one(); // one의 호출부