### 배열 동등 비교
`Python`과 다르게 두 배열 A, B를 `A === B`식으로 비교할 수 없었다.

```javascript
const answer = ["a", "b", "c"];
const target = ["a", "b", "c"];

console.log(answer === target);
```

와 같이 코드가 구성되어 있었을 때, `false`가 출력되었다.

이유를 살펴보니 자바스크립트의 배열이나 객체를 `==` 혹은 `===`을 이용해 비교할 때에는 구성 요소가 아닌 **주소값을 이용**해 비교하기 때문이었다.

따라서 두 배열이 일치하는지 확인하기 위해선 약간의 코딩이 필요했다.

-- 내 방법 --

```javascript
const answer = ["a", "b", "c"];
const target = ["a", "b", "c"];

const stringToAnswer = answer.join("");
const stringToTarget = target.join("");

console.log(stringToAnswer === stringToTarget);
```

이렇게 문자열로 바꿔주어 `===` 연산자를 사용했다.

-- 다른 방법 --

```javascript
const answer = ["a", "b", "c"];
const target = ["a", "b", "c"];

const equals = (answer, target) => answer.length === target.length && answer.every((element, idx) => element === b[idx]);
```

이렇게 `every()` 메서드를 사용해서 모든 원소가 동일하게 존재하는지 파악하는 방식도 사용할 수 있다.