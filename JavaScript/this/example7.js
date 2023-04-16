// 7. call, apply와 this
const callObj1 = {
  name: "최",
  greeting(age, height) {
    console.log(`이름: ${this.name}--, 나이: ${age}, 키: ${height}`);
    console.log(this);
  }
}

const callObj2 = {
  name: "박"
}
const data = [25, 165];
callObj1.greeting(...data);
callObj1.greeting.call(callObj2, ...data); // 안녕하세요 제 이름은 김--이고, 나이는 28살입니다.
callObj1.greeting.apply(callObj2, data);
callObj1.greeting.call(null, ...data);

function sum() {
  const args = Array.prototype.slice.apply(arguments);
  // console.log(arguments.reduce((acc, cur) => acc + cur, 0));
  console.log(Array.from(arguments).reduce((acc, cur) => acc + cur, 0));
  return args.reduce((acc, cur) => acc + cur, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(4, 5, 6, 7)); // 22

// 8. bind와 this
function addNumber(a, b) {
  console.log(this);
  return a + b;
};

addNumber.call({name: "박"}, 10, 20);

const newAddNumber = addNumber.bind({name: "박"}, 10, 20);
newAddNumber();