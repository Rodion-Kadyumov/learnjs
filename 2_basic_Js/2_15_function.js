const code31 = document.getElementById('code31');
code31.onclick = Code31;
function Code31() {
  
  function pow(xx, n) {
    xx = prompt("Введите число", '');
    n = prompt("Введите степень", '');
    if (n < 1) {
      alert(`Ошибка степень должна быть положительной, а у вас ${n}`);
    } else {
      return xx**n
    }
  }
  alert( pow() );
}




