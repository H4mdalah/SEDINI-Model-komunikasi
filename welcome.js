"use strict";

const nama = localStorage.getItem("nama");
const gender = localStorage.getItem("gender");
const birthdate = localStorage.getItem("birthdate");

if (nama && gender && birthdate) {
  document.getElementById("nama").textContent = nama;
}
