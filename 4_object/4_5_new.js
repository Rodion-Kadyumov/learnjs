const code36 = document.getElementById('code36');
code36.onclick = Code36;
function Code36() {
  const possible = {};

function A() { return possible; }
function B() { return possible; }

alert( new A() == new B() );
alert("Вполне возможно")
}

const code37 = document.getElementById('code37');
code37.onclick = Code37;
function Code37() {
  function Calculator() {

    this.read = function() {
      this.a = +prompt('Каково число а?', 0);
      this.b = +prompt('Каково число b?', 0);
    };
  
    this.sum = function() {
      return this.a + this.b;
    };
  
    this.mul = function() {
      return this.a * this.b;
    };
  }
  
  let calculator = new Calculator();
  calculator.read();
  
  alert( "Sum=" + calculator.sum() );
  alert( "Mul=" + calculator.mul() );
}

const code38 = document.getElementById('code38');
code38.onclick = Code38;
function Code38() {
  function Accumulator(startingValue) {
    this.value = startingValue;
  
    this.read = function() {
      this.value += +prompt('Снова необходимо ввести число', 0);
    };
  
  }
  
  let accumulator = new Accumulator(1);
  accumulator.read();
  accumulator.read();
  alert(accumulator.value);
}