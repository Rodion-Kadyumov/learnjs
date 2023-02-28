const code42 = document.getElementById('code42');
code42.onclick = Code42;
function Code42() {
  let fruits = ["Яблоки", "Груша", "Апельсин"];
  let shoppingCart = fruits;
  shoppingCart.push("Банан");

  alert( fruits.length );
}

const code43 = document.getElementById('code43');
code43.onclick = Code43;
function Code43() {
  function sumInput() {
    let numbers = [];
    while (true) {
      let value = prompt("Введите число", 0);
      if (value === "" || value === null || !isFinite(value)) break;
      numbers.push(+value);
    }
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  
  alert( sumInput() );
}