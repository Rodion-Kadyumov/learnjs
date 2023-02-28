const code = document.getElementById('code');
code.onclick = Code;
function Code() {
  alert( null || 2 || undefined );
  alert( alert(1) || 2 || alert(3) );
  alert( 1 && null && 2 );
  alert( alert(1) && alert(2) );
  alert( null || 2 && 3 || 4 );
}

const code2 = document.getElementById('code2');
code2.onclick = Code2;
function Code2() {
  alert( "if (age >= 14 && age <= 90){}" );
  alert("if (age < 14 || age > 90){}")
}

const code3 = document.getElementById('code3');
code3.onclick = Code3;
function Code3() {
  if (-1 || 0) alert( 'first' );
  if (-1 && 0) alert( 'second' );
  if (null || -1 && 1) alert( 'third' );
}

const code4 = document.getElementById('code4');
code4.onclick = Code4;
function Code4() {
  let userName = prompt("Кто там?", '');

if (userName === 'Админ') {

  let pass = prompt('Пароль?', '');

  if (pass === 'Я главный') {
    alert( 'Здравствуйте!' );
  } else if (pass === '' || pass === null) {
    alert( 'Отменено' );
  } else {
    alert( 'Неверный пароль' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Отменено' );
} else {
  alert( "Я вас не знаю" );
}
}
