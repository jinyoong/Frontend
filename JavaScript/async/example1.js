let current = new Date();
console.log("시작", current);

const promise1 = new Promise(resolve => {
  setTimeout(() => {
    resolve("Promise 1 완료");
  }, 2000);
});

promise1.then(result => {
  let current = new Date();
  console.log(result, current);
})

// 5초가 걸리는 동기적인 코드
for (let i = 0; i < 5000000000; i++) {
  // 시간 지연
}

const promise2 = new Promise(resolve => {
  setTimeout(() => {
    resolve("Promise 2 완료");
  }, 1000);
});

promise2.then(result => {
  let current = new Date();
  console.log(result, current);
})

current = new Date();
console.log("끝", current);