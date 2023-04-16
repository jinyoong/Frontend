const line = "====================================";

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

// 4. 조금 더 복잡한 객체와 this
const outer = {
  outerMethod() {
    const that = this;
    function inner() {
      console.log(this);
      console.log(that);
    };

    inner();
  }
};

outer.outerMethod();

console.log(line)

// 5. 클로저 함수와 this
function outer2() {
  const that = this;
  return function inner2() {
    console.log(that);
    console.log(this);
  };
};

const temp = outer2();
temp();

console.log(line)

// 7. 화살표함수와 this
const obj = {
  a: 1,
  method1() {
    setTimeout(function () {
      console.log(this)
    }, 1000);
  },
  method2() {
    setTimeout(() => {
      console.log(this)
    }, 1000)
  }
};

obj.method1();
obj.method2();

console.log(line);

// 8. 객체 체인과 this
function methodFunc() {
  console.log(this.a);
};

const obj2 = {
  a: 100,
  obj2Method: methodFunc
};

const obj1 = {
  a: 10,
  obj2: obj2,
};

obj1.obj2.obj2Method();