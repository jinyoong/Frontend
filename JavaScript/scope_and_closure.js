// for (var i = 1; i <= 5; i++) {
//   setTimeout(function timer() {
//     console.log(i);
//   }, i * 1000);
// };

// for (var i = 1; i <= 5; i++) {
//   (function () {
//     setTimeout(function time() {
//       console.log(i);
//     }, i * 1000);
//   })();
// };

// for (var i = 1; i <= 5; i++) {
//   (function () {
//     var j = i;
//     setTimeout(function time() {
//       console.log(j);
//     }, j * 1000);
//   })();
// };

// for (let i = 1; i <= 5; i++) {
//   setTimeout(function timer() {
//     console.log(i);
//   }, i * 1000);
// };

function outer() {
  let count = 0;
  function increment() {
    count++;
    console.log(count);
  }
  increment();
}

outer();
outer();
outer();

function outer2() {
  let count = 0;
  console.log(this);
  return function increment2() {
    count++;
    console.log(this);
    console.log(count);
  }
}

var myIncrement = outer2();
myIncrement();
myIncrement();
myIncrement();

/*
미리 정리하는 렉시컬 스코프와 클로저
- 렉시컬 스코프
렉시컬 스코프는 자바스크립트가 선택한 스코프 규칙이다.
스코프 규칙은 동적 스코프와 렉시컬 스코프가 있는데,
동적 스코프는 실행 중인 코드를 기준으로 스코프를 설정하는 것이다.
렉시컬 스코프는 함수가 선언됐을 때의 환경을 기준으로 스코프를 설정하는 것이다.

- 클로저
클로저는 렉시컬 스코프 환경에서의 함수를 총칭하는 단어다!
특별한 무언가가 아니라, 자바스크립트 환경에서 함수를 작성하면 클로저를 활용하게 되는 순간이 온다.
그렇다면 클로저라고 굳이 이름지을 필요가 있을까?
클로저는 단순히 렉시컬 스코프 환경에서 작성한 함수에서 끝나는 것이 아니다.
*/