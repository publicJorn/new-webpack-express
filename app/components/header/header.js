require('./header.less');

function Header () {
  this.header = document.createElement('section');
  this.header.setAttribute('class', 'header');
  this.header.innerHTML = '<h1>Webpack showcase</h1>';
}

Header.prototype.append = function () {
  const body = document.getElementsByTagName('body')[0];
  body.insertBefore(this.header, body.firstChild);
};

var header = new Header();
header.append();
