
const code32 = document.getElementById('code32');
code32.onclick = Code32;
function Code32() {
  let schedule = prompt('Сколько тебе лет?');

  function isEmpty(schedule) {
    for (let key in schedule) {
      return false;
    }
    return true;
  }

  alert( isEmpty(schedule) );
}

const code33 = document.getElementById('code33');
code33.onclick = Code33;
function Code33() {
  let salaries = {
    John: +prompt('Какая зарплата у Джона?'),
    Ann: +prompt('Какая зарплата у Анны?'),
    Pete: +prompt('Какая зарплата у Пита?')
  };
  
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  
  alert("Общая зарплата Джона, Анны и Пита составляет: " + sum + " р.");
}
