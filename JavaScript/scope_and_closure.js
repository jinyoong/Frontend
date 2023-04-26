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