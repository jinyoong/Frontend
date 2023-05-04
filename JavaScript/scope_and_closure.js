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

클로저를 의미 있게 사용한다는 의미는 내부 함수에서 외부 함수의 변수를 사용할 수 있어야 한다.
그리고 그 때의 외부 함수 스코프는 메모리에서 삭제되었을 때 의미가 있다!

무슨 의미냐면, 함수가 실행 중일 때, 함수 내부에서 선언된 변수에 메모리를 할당한다.
그리고 그 함수의 내부 함수에서 해당 변수를 사용한다면 단순히 스코프 체인에 의해 외부 변수를 사용한다.
그렇다면 만약 내부 함수를 외부로 끌어내서 내부 함수만을 실행하면 외부 변수를 사용할 수 있을까?
외부 함수는 실행되지 않았기 때문에 메모리는 할당하지 않고, 자연스럽게 외부 함수에 선언된 변수를 사용할 수 없다고 생각한다.
하지만 여기서 렉시컬 스코프에 의해서 내부 함수는 선언되었을 때를 기준으로 외부 변수를 참조한다.
즉, 이렇게 된 상태일 때 클로저를 활용했다고 할 수 있게 된다.

위 코드의 경우에도 outer2() 함수가 호출된 이후에는 함수 스코프가 죽으니까, count 변수에 접근할 수 없어야 한다
하지만, myIncrement() 를 실행하면 1씩 늘어나가는 것을 확인할 수 있는데
이게 바로 렉시컬 스코프와 클로저가 적용되었다는 것을 의미한다.
*/