// Select elements
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const nav = document.getElementById("nav");

// Show menu
menuIcon.addEventListener("click", () => {
  nav.classList.add("show");
  menuIcon.style.display = "none";
  closeIcon.style.display = "block";
});

// Hide menu
closeIcon.addEventListener("click", () => {
  nav.classList.remove("show");
  closeIcon.style.display = "none";
  menuIcon.style.display = "block";
});


//---------   faq
const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.querySelector(".faq-header").addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

// Scholarship Calculator Logic
document
  .getElementById("scholarshipForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const studentClass = document.getElementById("class").value;
    const board = document.getElementById("board").value;
    const resultBox = document.getElementById("scholarshipResult");
    let amount = 0;
    if (board === "CBSE" && studentClass === "10") {
      amount = 12000;
    } else if (board === "CBSE" && studentClass === "12") {
      amount = 20000;
    } else if (board === "Bihar") {
      amount = 10000;
    } else if (board === "UP") {
      amount = 8000;
    }
    if (amount > 0) {
      resultBox.style.display = "block";
      resultBox.innerHTML = `<strong>Eligible Scholarship Amount:</strong> ₹${amount} per year`;
    } else {
      resultBox.style.display = "block";
      resultBox.innerHTML = `<strong>No scholarship found for your criteria.</strong>`;
    }
  });
document.getElementById("loanForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const P = parseFloat(document.getElementById("amount").value);
  const R = parseFloat(document.getElementById("rate").value) / 12 / 100;
  const N = parseFloat(document.getElementById("tenure").value) * 12;
  const resultBox = document.getElementById("loanResult");
  const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
  resultBox.style.display = "block";
  resultBox.innerHTML = `<strong>Monthly EMI:</strong> ₹${emi.toFixed(2)}`;
});


