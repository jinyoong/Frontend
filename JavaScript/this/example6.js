// 6. 이벤트 함수와 this
const myButton = document.getElementById("myButton");

function clickButton() {
  console.log(this);
  
  const buttonObj = {
    buttonMethod() {
      console.log(this);
    }
  };
  
  buttonObj.buttonMethod();
};

myButton.addEventListener("click", clickButton);

const bubbleEvent = document.getElementById("outer");
const inner1Event = document.getElementById("inner1");

function bubbleFunction() {
  console.log(this);
};

bubbleEvent.addEventListener("click", bubbleFunction);
inner1Event.addEventListener("click", bubbleFunction);