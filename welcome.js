"use strict";

const nama = localStorage.getItem("nama");
const gender = localStorage.getItem("gender");
const birthdate = localStorage.getItem("birthdate");

if (nama && gender && birthdate) {
  document.getElementById("nama").textContent = nama;
}

// Saat form dikirim
document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const jsonData = {};

  // Tambahkan data dari halaman ini (jawaban q1 - q8 dan keluhan)
  formData.forEach((value, key) => {
    jsonData[key] = value;
  });

  // Gabungkan data dari localStorage
  jsonData["nama"] = nama;
  jsonData["gender"] = gender;
  jsonData["birthDate"] = birthdate;

  // Kirim data ke Apps Script
  fetch("https://script.google.com/macros/s/AKfycbzFl2KSfEGEOsVrDDcGqDdAbyl7pxVDU5VpI3h4daWxDUguMdCY8rK1sjYMIa3kX83EkQ/exec", {
    method: "POST",
    body: JSON.stringify(jsonData),
    mode: "no-cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then(() => {
    alert("Data berhasil dikirim!");
    localStorage.clear();
    window.location.href = "index.html";
  })
  .catch((err) => {
    console.error("Error:", err);
    alert("Terjadi kesalahan saat mengirim data.");
  });
});

