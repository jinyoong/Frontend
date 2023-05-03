// async/await 는 새로운 기술이 아니라, Promise 객체를 이용하나 것
// 즉, syntactic sugar 중에 하나라고 할 수 있다.
// 깔끔하게 프로미스를 사용할 수 있는 방법!
// 하지만, 프로미스 객체를 활용했을 때 더 깔끔한 경우도 있으니 상황에 맞게 사용해야 한다.

// 자바스크립트가 동기적으로 처리하면, 네트워크 통신이 발생했을 때 기다리므로 이후 작업을 못 할 수도 있다.
// resolve, reject를 넣어주지 않고 console을 찍어보면 상태가 pending으로 나온다

// 1. async
async function getUser() {
  return "kim";
};

const user = getUser();
user.then(console.log);
console.log(user);

// 2. await
// await 키워드는 async 키워드가 붙은 함수 내부에서만 사용할 수 있다.

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};

async function getTomato() {
  await delay(1000);
  return '🍅'
};

async function getBanana() {
  await delay(2000);
  return '🍌';
};

// function pickFruits() {
//   return getTomato()
//     .then(tomato => {
//       return getBanana()
//         .then(banana => `${tomato}, ${banana}`);
//     });
// };

async function pickFruits() {
  const tomato = await getTomato();
  const banana = await getBanana();
  return `${tomato}, ${banana}`;
};

pickFruits().then(console.log)

// 토마토와 바나나를 받아오는 과정은 독립적이기 때문에 1초만 있어도 된다.
// 근데 현재 상태에서는 2초가 걸린다.
// 이걸 해결하기 위해서는 프로미스 객체가 생성과 동시에 실행된다는 것을 이용해주면 된다.

async function pickFruitsByOne() {
  const tomatoPromise = getTomato();
  const bananaPromise = getBanana();
  const tomato = await tomatoPromise;
  const banana = await bananaPromise;
  return `${tomato}, ${banana}`;
};

pickFruitsByOne().then(console.log)

// 그런데 위처럼 작성한다고 하면, 병렬처리 해야 하는 개수가 많을 수록 코드가 지저분해질 것을 알 수 있다.
// 그래서 있는게 Promise의 api 들이다.

// Promise.all
// 프로미스 배열을 넘겨주면 모든 프로미스들이 병렬적으로 실행되고, 다 받을때까지 기다린다

function pickAllFruits() {
  return Promise.all([getTomato(), getBanana()])
    .then(fruits => fruits.join(", "));
};

pickAllFruits().then(console.log)

// Promise.race
// 누가 먼저 동작이 완료되는지가 궁금할 경우
function pickOnlyOne() {
  return Promise.race([getTomato(), getBanana()]);
};

pickOnlyOne().then(console.log);

// Promise.any
// 누가 먼저 동작이 이행(fulfilled)되는지가 궁금할 경우
const promise1 = Promise.reject("first");
const promise2 = new Promise((resolve) => setTimeout(() =>{
  resolve("second")
}, 100));
const promise3 = new Promise((resolve) => setTimeout(() =>{
  resolve("third")
}, 200));

const promises = [promise1, promise2, promise3];
Promise.any(promises).then(console.log);

// 위 예시를 보면 가장 먼저 동작이 완료되는 것은 promise1 이지만, 성공한 것 중에 가장 빠른 promise2 를 보여주는 것을 확인할 수 있다.
