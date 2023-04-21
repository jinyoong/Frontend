const line = `===================\n`

// 동기, 비동기 과정과 콜백 예제

console.log("동기적 과정")
console.log(1);
console.log(2);
console.log(3);

console.log(line);

console.log("비동기적 과정");
console.log(1);
setTimeout(function() {
  console.log(2);
}, 1000);
console.log(3);

console.log(line);

console.log("동기적으로 이루어지는 콜백");
function printImmediately(print) {
  print();
};

console.log(1);
printImmediately(() => console.log("안녕하세요"));
console.log(3);


console.log(line);

console.log("비동기적으로 이루어지는 콜백");
function printDelay(print, timeout) {
  setTimeout(print, timeout);
};

console.log(1);
printDelay(() => console.log("안녕하세요. 비동기 콜백입니다"), 2000);
console.log(3);

// 콜백 지옥 예제
class UserData {
  login(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "kim" && password === "kimkim") ||
        (id === "park" && password === "parkpark")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("사용자 정보를 찾을 수 없는데요?"));
      };
    }, 2000);
  };

  getAge(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "kim") {
        onSuccess({name: "kim", age: 25});
      } else {
        onError(new Error("해당 사용자의 나이는 등록되지 않았습니다."));
      };
    }, 1000);
  };
};

// 순서는 로그인 => 성공하면 아이디 반환 => 아이디 이용해서 나이 얻기!
const userData = new UserData();
const id = prompt("아이디를 입력하세요");
const password = prompt("비밀번호를 입력하세요");
userData.login(
  id,
  password,
  userId => {
    userData.getAge(
      userId,
      userIdAndAge => {
        alert(`이름 : ${userIdAndAge.name}, 나이 : ${userIdAndAge.age}`);
      },
      error => {
        console.log(error)
      },
    );
  },
  error => {
    console.log(error)
  },
);

// 두 단계만 파고 들어갔는데도 가독성이 떨어지고, 각 함수의 역할을 파악하기 힘들다