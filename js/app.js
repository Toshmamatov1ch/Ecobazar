const cartBtns = document.querySelectorAll(".cart-button");

cartBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    this.classList.toggle("added");
  });
});

// >======================================================================================

// Counter uchun funksiya

const numberDisplay = document.getElementById("number");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");

let count = 0;

plusBtn.onclick = function () {
  count++;
  numberDisplay.textContent = count;
};

minusBtn.onclick = function () {
  if (count > 0) count--;
  numberDisplay.textContent = count;
};

// >======================================================================================

// Modal uchun bosilganda hidden bo'ladigan tugmalar

const modal = document.getElementById("modalOverlay");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModal");

openBtn.onclick = function () {
  modal.classList.remove("hidden");
};

closeBtn.onclick = function () {
  modal.classList.add("hidden");
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.classList.add("hidden");
  }
};

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modal.classList.add("hidden");
  }
});

// >========================================================================

// Bunda Modaldagi chap tarfdagi kichkina rasmlar bosilganda katta rasm bilan almashadi

const mainImg = document.getElementById("mainImg");
const thumbnails = document.querySelectorAll(".thumb");

thumbnails.forEach((thumb) => {
  thumb.onclick = function () {
    const newSrc = this.src;

    mainImg.src = newSrc;
  };
});

// >=========================================================

// Korzinkaga saqlandi haqida xabar

const cartBtn = document.getElementById("addToCartBtn");
const toast = document.getElementById("toast");

cartBtn.onclick = function () {
  // 1. Xabarni ko'rsatish
  toast.style.display = "block";

  setTimeout(function () {
    toast.style.display = "none";
  }, 3000);
};
