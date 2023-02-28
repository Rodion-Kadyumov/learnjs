let name25 = "Ilya";

const hello1 = document.getElementById('hello1');
hello1.onclick = Hello1;
function Hello1() {
  alert( `hello ${1}` );
}
const helloname = document.getElementById('helloname');
helloname.onclick = Helloname;
function Helloname() {
  alert( `hello ${"name"}` );
}
const helloname2 = document.getElementById('helloname2');
helloname2.onclick = Helloname2;
function Helloname2() {
  alert( `hello ${name25}` );
}