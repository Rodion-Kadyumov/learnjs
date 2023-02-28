let a = 1, b = 1;
let c = ++a;
let d = b++;

const aa = document.getElementById('a');
aa.onclick = A;
function A() {
  alert( ++a );
}
const bb = document.getElementById('b');
bb.onclick = B;
function B() {
  alert( b++ );
}
const cc = document.getElementById('c');
cc.onclick = C;
function C() {
  alert( a );
}
const dd = document.getElementById('d');
dd.onclick = D;
function D() {
  alert( b );
}

let aaa = 2;
let x = 1 + (aaa *= 2);

const aaaa = document.getElementById('x');
aaaa.onclick = X;
function X() {
  alert("Переменна а равна: " + aaa);
  alert("Переменна x равна: " + x)
}

const answ = document.getElementById('answ');
answ.onclick = Answ;
function Answ() {
  alert("" + 1 + 0);
  alert("" - 1 + 0)
  alert(true + false)
  alert(6 / "3")
  alert("2" * "3")
  alert(4 + 5 + "px")
  alert("$" + 4 + 5)
  alert("4" - 2)
  alert("4px" - 2)
  alert("  -9  " + 5)
  alert("  -9  " - 5)
  alert(null + 1)
  alert(undefined + 1)
  alert(" \t \n" - 2)
}

const aab = document.getElementById('three');
aab.onclick = Ab;
function Ab() {
  let ab = +prompt("Первое число?", 1);
  let bbb = +prompt("Второе число?", 2);
  alert("Теперь все верно: " + (ab + bbb));
}
