class UserData {
  async login(id, password) {
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

  async getAge(user) {
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

async function init() {
  try {
    const userId = await userData.login(id, password);
    const result = await userData.getAge(userId)
    return result
  } catch (error) {
    return error
  }
}

init().then(console.log)