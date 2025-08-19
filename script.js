function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

function navigate(section) {
  console.log("Navigating to:", section);
}

function openQuote() {
  alert("Quote request form will open.");
}

document.getElementById("year").textContent = new Date().getFullYear();
