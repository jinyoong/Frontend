// 2. this는 자기자신을 가르키는게 아니다
function plusCount(number) {
  console.log("plusCount 호출 횟수 : ", number);
  this.count++;
};

plusCount.count = 0;
for (let i = 0; i < 5; i++) {
  if (i > 2) {
    plusCount(i);
  };
};

console.log(plusCount.count);