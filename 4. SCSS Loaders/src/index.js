import style from './index.scss';
import _ from 'lodash';
import './clearButton';

console.log(style);

const btn1 = document.getElementById('button1');

btn1.addEventListener('click', function buttonClicked() {
  const el = document.getElementById('header');
  el.innerHTML = 'Hey I have updated the code!';

  const listItems = ['Apple', 'Orange', 'Banana'];
  const ul = document.getElementById('shoppinglist');
  _.forEach(listItems, function (item) {
    const tempEl = document.createElement('li');
    tempEl.innerHTML = item;
    ul.appendChild(tempEl);
  });
});

btn1.classList.add(style.button);
