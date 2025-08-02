"use strict";
// function validateForm() {
//   const nama = document.getElementById("nama").value.trim();
//   const gender = document.getElementById("gender").value.trim().toLowerCase();
//   const date = document.getElementById("date").value.trim();

//   if (nama.length < 3) {
//     alert("Nama lengkap wajib diisi");
//     return false;
//   }

//   if (gender !== "l" && gender !== "p") {
//     alert("Jenis kelamin wajib diisi");
//     return false;
//   }

//   if (date.length < 5) {
//     alert("Tanggal Lahir tidak boleh kosong.");
//     return false;
//   }

//   return true; // lanjut submit
// }

const form = document.getElementById("loginForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  // Nama
  const nama = document.getElementById("nama").value;
  const errorNama = document.getElementById("error-nama");
  if (nama.trim().length < 3) {
    errorNama.textContent = "Nama lengkap minimal 3 huruf.";
    isValid = false;
  } else {
    errorNama.textContent = "";
  }

  // Gender
  const gender = document.getElementById("gender").value;
  const errorGender = document.getElementById("error-gender");
  if (gender.trim().length < 3) {
    errorGender.textContent = "Jenis Kelamin Wajib Diisi.";
    isValid = false;
  } else {
    errorGender.textContent = "";
  }

  // TTL
  const birthdate = document.getElementById("birth-date").value;
  const errorbirthdate = document.getElementById("error-birth-date");
  if (birthdate.trim().length < 5) {
    errorbirthdate.textContent = "Tanggal Lahir tidak boleh kosong.";
    isValid = false;
  } else {
    errorbirthdate.textContent = "";
  }

  if (isValid) {
    // Simpan data ke localStorage
    localStorage.setItem("nama", nama);
    localStorage.setItem("gender", gender);
    localStorage.setItem("birthdate", birthdate);
    // Pindah ke halaman baru
    window.location.href = "welcome.html";
  }
});
