// ================================
// SISTEM HALAMAN
// ================================

const pages = document.querySelectorAll(".story-page");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const currentPageText = document.getElementById("currentPage");
const totalPagesText = document.getElementById("totalPages");

let currentPage = 1;

const totalPages = pages.length;

totalPagesText.textContent = totalPages;


// ================================
// MENAMPILKAN HALAMAN
// ================================

function tampilkanHalaman() {

    pages.forEach((page) => {
        page.classList.remove("active");
    });

    const halaman = document.querySelector(
        `.story-page[data-page="${currentPage}"]`
    );

    if (halaman) {
        halaman.classList.add("active");
    }

    currentPageText.textContent = currentPage;

    // Tombol sebelumnya
    if (currentPage === 1) {
        prevBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
    }

    // Tombol selanjutnya
    if (currentPage === totalPages) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    }

    // Kembali ke atas halaman
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ================================
// TOMBOL SEBELUMNYA
// ================================

prevBtn.addEventListener("click", function () {

    if (currentPage > 1) {
        currentPage--;
        tampilkanHalaman();
    }

});


// ================================
// TOMBOL SELANJUTNYA
// ================================

nextBtn.addEventListener("click", function () {

    if (currentPage < totalPages) {
        currentPage++;
        tampilkanHalaman();
    }

});


// ================================
// DARK MODE
// ================================

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        darkModeBtn.textContent = "☀️";
    } else {
        darkModeBtn.textContent = "🌙";
    }

});


// ================================
// UKURAN FONT
// ================================

const fontMinus = document.getElementById("fontMinus");
const fontReset = document.getElementById("fontReset");
const fontPlus = document.getElementById("fontPlus");

let fontSize = 19;


// Perkecil tulisan
fontMinus.addEventListener("click", function () {

    if (fontSize > 14) {
        fontSize -= 1;
        ubahUkuranFont();
    }

});


// Ukuran normal
fontReset.addEventListener("click", function () {

    fontSize = 19;
    ubahUkuranFont();

});


// Perbesar tulisan
fontPlus.addEventListener("click", function () {

    if (fontSize < 28) {
        fontSize += 1;
        ubahUkuranFont();
    }

});


// Fungsi mengubah ukuran font
function ubahUkuranFont() {

    document.querySelectorAll(".story-content").forEach((content) => {

        content.style.fontSize = fontSize + "px";

    });

}


// ================================
// JALANKAN SAAT WEBSITE DIBUKA
// ================================

tampilkanHalaman();
```
