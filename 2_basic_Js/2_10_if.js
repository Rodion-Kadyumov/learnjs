
const iff = document.getElementById('if');
iff.onclick = If;
function If() {
  if ("0") {
    alert( 'Привет' );
  }
}

const ecma = document.getElementById('ecma');
ecma.onclick = Ecma;
function Ecma() {
  let value1 = prompt('Какое "официальное" название JavaScript?', '');

  if (value1 == 'ECMAScript') {
    alert('Верно!');
  } else {
    alert('Не знаете? ECMAScript!');
  }
}

const num = document.getElementById('num');
num.onclick = Num;
function Num() {
  let value2 = prompt('Введите число', 0);

  if (value2 > 0) {
    alert( 1 );
  } else if (value2 < 0) {
    alert( -1 );
  } else {
    alert( 0 );
  }
}

const ter = document.getElementById('ter');
ter.onclick = Ter;
function Ter() {
  alert("result = (a + b < 4) ? 'Мало' : 'Много';")
}

const ter2 = document.getElementById('ter2');
ter2.onclick = Ter2;
function Ter2() {
  alert("let message = (login == 'Сотрудник') ? 'Привет' : (login == 'Директор') ? 'Здравствуйте' : (login == '') ? 'Нет логина' : '';")
}

