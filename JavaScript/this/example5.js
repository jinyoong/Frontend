// 1. 일반 함수
function one() {
  console.log(this.a);
};

var a = 2;
one();

// 2. 객체의 메서드
function result1() {
  console.log(this);
}

const two = {
  a: 2,
  result1: result1,
  result2() {
    console.log(this.a);
  },
};

two.result1();
two.result2();

// 3. 클래스와 인스턴스
class Three {
  constructor() {
    console.log(this);
  };
};

const threeInstance = new Three();