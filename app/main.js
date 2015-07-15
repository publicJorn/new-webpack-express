require('./main.less');

const body = document.getElementsByTagName('body')[0];
const values = ['yellow', 'cyan', 'limegreen'];
const select = document.createElement('select');

values.forEach( color => {
  let option = document.createElement('option');
  option.setAttribute('value', color);
  option.innerHTML = color;
  select.appendChild(option);
});

select.addEventListener('change', evt => {
  console.log(evt);
});

body.appendChild(select);
