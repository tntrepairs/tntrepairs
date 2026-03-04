// Mobile nav
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Year
document.getElementById("year").textContent = new Date().getFullYear();

// WhatsApp quote form
const form = document.getElementById("quoteForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const device = document.getElementById("device").value.trim();
    const issue = document.getElementById("issue").value.trim();

    const msg =
      `Hi TNT Repairs, my name is ${name}.%0A` +
      `Device: ${device}%0A` +
      `Issue: ${issue}%0A` +
      `Please send me a quote.`;

    window.open(`https://wa.me/26777341528?text=${msg}`, "_blank");
  });
}