const promt = document.getElementById('26');
promt.onclick = Promt;
function Promt() {
  let name26 = prompt('Как вас зовут?', '');
  alert(`Вас зовут ${name26}!`);
}


