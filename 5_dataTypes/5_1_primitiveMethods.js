const code39 = document.getElementById('code39');
code39.onclick = Code39;
function Code39() {
  let str = "Привет";
  str.test = 5;
  alert(str.test);
}