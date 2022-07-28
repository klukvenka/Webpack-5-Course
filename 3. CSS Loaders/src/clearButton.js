// import style from './clearButton.css';

const el = document.createElement('button');
el.innerHTML = 'clear';
el.classList.add('button');
el.onclick = function () {
  alert('Clear funtion');
};
document.body.appendChild(el);
