const code34 = document.getElementById('code34');
code34.onclick = Code34;
function Code34() {
  function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
  let user = makeUser();
  
  alert( user.ref.name );
  alert( "this берёт значение из функции makeUser()" );
}

const code35 = document.getElementById('code35');
code35.onclick = Code35;
function Code35() {
  let calculator = {
    read() {
      this.a = +prompt('Каково число а?', 0);
      this.b = +prompt('Каково число b?', 0);
    },
    sum() {
      return this.a + this.b;
    },
  
    mul() {
      return this.a * this.b;
    }
  };
  
  calculator.read();
  alert( "Сумма а и b равна: " + calculator.sum() );
  alert( "Произведение а и b равно: " +calculator.mul() );
}

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep() {
//     alert( this.step );
//     return this;
//   }
// };