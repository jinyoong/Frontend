const div = document.createElement('div');
div.className = 'div';
div.textContent = 'div';

const span = document.createElement('span');
span.className = 'span';
span.textContent = 'span';

const p = document.createElement('p');
p.className = 'p';
p.textContent = 'p';

div.addEventListener('click', clickEvent)
span.addEventListener('click', clickEvent)
p.addEventListener('click', clickEvent)

function clickEvent(event) {
  event.target.style.backgroundColor = 'blue';
  const clickTag = event.target.tagName;
  const eventTag = event.currentTarget.tagName;

  setTimeout(() => {
    alert(`현재 클릭한 태그 : ${clickTag}, 이벤트가 실행되는 태그 : ${eventTag}`);
    
    event.target.style.backgroundColor = '';
  }, 0);
}

const bubblingText = document.createElement('h3');
bubblingText.textContent = '아래는 버블링 예제입니다.';

const capturingText = document.createElement('h3');
capturingText.textContent = '아래는 캡처링 예제입니다.';

const capturingDiv = document.createElement('div');
capturingDiv.className = 'div';
capturingDiv.textContent = 'div';

const capturingSpan = document.createElement('span');
capturingSpan.className = 'span';
capturingSpan.textContent = 'span';

const capturingP = document.createElement('p');
capturingP.className = 'p';
capturingP.textContent = 'p';

for (let element of [capturingDiv, capturingSpan, capturingP]) {
  element.addEventListener('click', (event) => alert(`캡처링 : ${element.tagName}`), true);
  element.addEventListener('click', (event) => alert(`버블링 : ${element.tagName}`));
}

const root = document.getElementById('root');

root.appendChild(bubblingText);

span.appendChild(p);
div.appendChild(span);
root.appendChild(div);

root.appendChild(capturingText);

capturingSpan.appendChild(capturingP);
capturingDiv.appendChild(capturingSpan);
root.appendChild(capturingDiv);