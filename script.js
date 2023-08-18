const display = document.getElementById("display");

// // ALL CLEAR
// function allClear() {
//   display.value = "0";
// }

// // MEMASUKAN ANGKA
// function appendToDisplay(value) {
//   // Mengganti tanda titik (.) dengan koma (,) sebelum nilai ditambahkan ke display
//   const numericString = value.replace(/\./g, ",");
//   display.value += numericString;
// }

// // HAPUS ANGKA AKHIR
// function removeLastDisplay() {
//   display.value = display.value.slice(0, -1);
// }

// // FORMAT NUMBER INDONESIA UNTUK HASILNYA
// function formatNumber(number) {
//   // Fungsi untuk memformat angka dengan tanda koma
//   return new Intl.NumberFormat("id-ID").format(number);
// }

// //PENJUMLAHANNYA
// function calculate() {
//   try {
//     const result = new Function("return " + display.value.replace(/,/g, "."))();
//     //  eval(display.value.replace(/,/g, "."))
//     display.value = formatNumber(result);
//   } catch (error) {
//     display.value = "ERROR !";
//   }
// }

function allClear() {
  display.value = "0";
}

function removeLastDisplay() {
  display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
  const numericString = value.replace(/\./g, ",");
  display.value += numericString;
}

function formatNumber(number) {
  return new Intl.NumberFormat("id-ID").format(number);
}

function calculate() {
  try {
    const result = new Function("return " + display.value.replace(/,/g, "."))();
    display.value = formatNumber(result);
  } catch (error) {
    display.value = "ERROR !";
  }
}
