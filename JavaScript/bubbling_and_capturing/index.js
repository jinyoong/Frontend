const div1 = document.createElement('div');
div1.id = 'div1';
div1.textContent = 'div1';

const div2 = document.createElement('span');
div2.id = 'div2';
div2.textContent = 'div2';

const div3 = document.createElement('p');
div3.id = 'div3';
div3.textContent = 'div3';

div1.addEventListener('click', clickEvent)
div2.addEventListener('click', (e) => clickEvent(e))
div3.addEventListener('click', (e) => clickEvent(e))

function clickEvent(event) {
  event.target.style.backgroundColor = 'blue';
  const clickTag = event.target.tagName;
  const eventTag = event.currentTarget.tagName;

  setTimeout(() => {
    alert(`현재 클릭한 태그 : ${clickTag}, 이벤트가 실행되는 태그 : ${eventTag}`);
    
    event.target.style.backgroundColor = '';
  }, 0);
}

const root = document.getElementById('root');
div2.appendChild(div3);
div1.appendChild(div2);
root.appendChild(div1);