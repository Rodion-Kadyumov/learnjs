const code40 = document.getElementById('code40');
code40.onclick = Code40;
function Code40() {
  let a = +prompt("Введите первое число", "");
  let b = +prompt("Введите второе число", "");

  alert( a + b );
}

const code41 = document.getElementById('code41');
code41.onclick = Code41;
function Code41() {
  const readNumber = () => {
    let num;
  
    do {
      num = prompt("Введите число", 0);
    } while ( !isFinite(num) );
    if (num === null || num === '') return null;
  
    return +num;
  }
  
  alert(readNumber());
}

const count = (obj) => { return Object.keys(obj).length;}