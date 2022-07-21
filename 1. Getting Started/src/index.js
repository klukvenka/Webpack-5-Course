function buttonClicked() {
  const el = document.getElementById('header');
  el.innerHTML = 'Hey I have updated the code!';

  const listItems = ['Apple', 'Orange', 'Banana'];
  const ul = document.getElementById('shoppinglist');
  _.forEach(listItems, function (item) {
    const tempEl = document.createElement('li');
    tempEl.innerHTML = item;
    ul.appendChild(tempEl);
  });
}
