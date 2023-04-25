class UserData {
  login(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "kim" && password === "kimkim") ||
          (id === "park" && password === "parkpark")
        ) {
          resolve(id);
        } else {
          reject(new Error("사용자 정보를 찾을 수 없는데요?"));
        };
      }, 1000);
    });
  };

  getAge(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "kim") {
          resolve({name: "kim", age: 25});
        } else {
          reject(new Error(("해당 사용자의 나이는 등록되지 않았습니다.")));
        };
      }, 1000);
    });
  };
};

const userData = new UserData();
const id = prompt("아이디를 입력하세요");
const password = prompt("비밀번호를 입력하세요");

userData.login(id, password)
  .then(userData.getAge)
  .catch(error => {
    console.log(1, error);
    throw error
  })
  .then(userId => console.log(userId.age))
  .catch(error => console.log(2, error));

// 특정 catch에서 에러를 처리하고 Promise 체인을 중단하고 싶다면,
// 해당 catch에서 throw를 이용해 error를 전달해주면 된다.
// 그러면 then을 거치지 않고 다음 catch로 이동한다.