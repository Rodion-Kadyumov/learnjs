"use strict"

let admin;
let name = "Джон";
admin = name;

const nameAdmin = document.getElementById('name');
nameAdmin.onclick = NameAdmin;
function NameAdmin() {
  alert(admin);
}

let planet;
let userName;