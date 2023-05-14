// 자바스크립트의 타입은 총 8가지가 있다.
// 여기서도 크게 2가지로 나뉘는데 원시 타입(Primary Type)과 참조 타입(Reference Type)이다.
// 원시 타입에는 숫자, 문자열, 불리언, undefined, null, Symbol(ES6), bigInt(ES11) 의 7가지가 있다

// 1. 숫자 타입
// JS는 정수, 실수를 구분하지 않고 숫자 타입 하나로 관리한다.
// 숫자타입은 64비트 부동소수점 형식을 따르며, 정수라 할지라도 실수로 처리된다.
let integer = 10;
let double = 12.345;
let negative = -100;

// 실수이기 때문에 아래와 같은 등식이 성립한다.
console.log(1 === 1.0);

let binary = 0b01000001;
let octal = 0o101;
let hex = 0x41;

console.log(binary);
console.log(octal);
console.log(hex);

// 그리고 특별한 값을 사용할 수도 있는데, 무한대와 연산 불가이다
console.log(10 / 0); // 양의 무한대
console.log(10 / -0); //  음의 무한대
console.log(1 * 'a'); //  연산 불가

// NaN 은 대소문자를 꼭 지켜줘야만 숫자 타입으로 동작한다.
// nan, NAN 등과 같은 경우에는 값이 아닌, 식별자(변수명, 함수명 등)으로 취급해서 오류가 발생한다.