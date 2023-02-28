const code25 = document.getElementById('code25');
code25.onclick = Code25;
function Code25() {
  let i = 3;
  while (i) {
    alert( i-- + " Дойдя до 1 следущим значинем будет - 0, следовательно цикл завершён");
  }
}

const code26 = document.getElementById('code26');
code26.onclick = Code26;
function Code26() {
  let i = 0;
  while (++i < 5) alert( i );
  }

  const code27 = document.getElementById('code27');
  code27.onclick = Code27;
  function Code27() {
    let i = 0;
    while (i++ < 5) alert( i );
  }

  const code28 = document.getElementById('code28');
  code28.onclick = Code28;
  function Code28() {
    for (let i = 2; i <= 10; i++) {
      if (i % 2 == 0) {
        alert( i );
      }
    }
  }

const code29 = document.getElementById('code29');
code29.onclick = Code29;
function Code29() {
  let num;
  do {
    num = prompt("Введите число больше 100?", 0);
  } while (num <= 100 && num);
}

const code30 = document.getElementById('code30');
code30.onclick = Code30;
function Code30() {
  let n = +prompt("Введите число");

  nextPrime:
  for (let i = 2; i <= n; i++) {
  
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }
  
    alert( i );
  }
}