// promise는 비동기 작업을 간편하게 만들기 위해 제공하는 오브젝트
// 1. promise는 3가지 상태 pending(대기 중), fulfilled(이행 됨), rejected(거부 됨)를 가진다.
// 2. Productor, Consumer의 입장이 다르다는 것을 기억하고 사용하면 된다.
// 정보 제공과 정보 이용의 차이를 이해하면 된다.
// 서버와의 통신이나 파일 읽기 같이 시간이 걸리는 것을 비동기적으로 활용하는게 좋다

// 1. Producer
// resolve, reject를 위한 콜백 함수 두 개를 제공해야 하고 반환값은 promise 객체이다.
const promise = new Promise((resolve, reject) => {
  console.log("프로미스 실행중");
  // 콘솔이 바로 찍힌다! 즉, promise 객체는 생성과 동시에 내부 코드가 실행된다.
  // 만약 특정 버튼을 눌렀을 때 네트워크 통신이 필요한 경우에는
  // 프로미스를 조건에 따라 만들 수 있도록 하는 게 좋다.
  // 그냥 생성하면 네크워크 통신이 빈번하게 발생할 수 있기 때문이다.

  setTimeout(() => {
    // resolve('kim');
    reject(new Error("서버 통신에 문제가 있습니다."));
  }, 2000);
});

// 2. Consumer: then, catch, finally
// 사용되는 인자는 resolve/reject에서 전달되는 값이 된다.
// 세 가지 모두 반환값이 promise이기 때문에 체이닝이 가능해진다.
promise
  .then((value) => {
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log("무조건 실행되는 것!")
  });

// 3. Promise 체이닝
// then은 값, 프로미스 객체 모두 전달이 가능하다.
const getNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 1000);
});

getNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000)
    });
  })
  .then(num => console.log(num));

// 4. Promise 체이닝 과정에서의 에러 처리
function getChicken() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐔'), 1000);
  });
};
function getEgg(chicken) {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`${chicken} => 🥚`)), 1000);
  });
};
function getCook(egg) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000)
  });
};

// getChicken()
// .then(chicken => {
//   getEgg(chicken)
//   .then(egg => {
//     getCook(egg)
//     .then(result => console.log(result));
//   });
// });

// 콜백함수에서 전달 받은 인자를 그대로 사용할 때는 생략해도 된다.
// catch를 이용할 때는 가독성을 위해서 동작 시점에 에러 처리를 해주는 것이 좋다.

getChicken()
  .then(getEgg)
  .catch(error => {
    return '🥩'
  })
  .then(getCook)
  .then(console.log)