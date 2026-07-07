/* ============================================================
   Sammy-Tech Plumbing — main.js
   Business config lives at the top: edit BUSINESS to update
   phone/email/hours everywhere the scripts use them.
   ============================================================ */

const BUSINESS = {
  name: "Sammy-Tech Plumbing",
  whatsappNumber: "2347012518327", // international format, no "+"
  email: "Innocentsamuel970@gmail.com",
  // Opening hours in 24h WAT. 0 = Sunday … 6 = Saturday. null = closed.
  hours: {
    0: null,
    1: { open: 8, close: 18 },
    2: { open: 8, close: 18 },
    3: { open: 8, close: 18 },
    4: { open: 8, close: 18 },
    5: { open: 8, close: 18 },
    6: { open: 8, close: 18 },
  },
};

/* ---------- Mobile navigation ---------- */
const navToggle = document.getElementById("nav-toggle");
const mainNav = document.getElementById("main-nav");

navToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  navToggle.classList.toggle("active", open);
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});

// Close the mobile menu after tapping a link
mainNav.addEventListener("click", (e) => {
  if (e.target.tagName === "A" && mainNav.classList.contains("open")) {
    mainNav.classList.remove("open");
    navToggle.classList.remove("active");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

/* ---------- Open / closed status (WAT, UTC+1) ---------- */
function updateOpenStatus() {
  const dot = document.querySelector("#open-status .status-dot");
  const text = document.getElementById("open-status-text");
  if (!dot || !text) return;

  const now = new Date();
  // Compute West Africa Time regardless of the visitor's timezone
  const wat = new Date(now.getTime() + (60 + now.getTimezoneOffset()) * 60000);
  const today = BUSINESS.hours[wat.getDay()];
  const hour = wat.getHours() + wat.getMinutes() / 60;

  if (today && hour >= today.open && hour < today.close) {
    dot.className = "status-dot open";
    text.textContent = "Open now — call us!";
  } else {
    dot.className = "status-dot closed";
    text.textContent = "Closed now — emergencies: call anytime";
  }
}
updateOpenStatus();
setInterval(updateOpenStatus, 60000);

/* ---------- Service cards pre-select the form's service ---------- */
document.querySelectorAll(".card-link[data-service]").forEach((link) => {
  link.addEventListener("click", () => {
    const select = document.getElementById("q-service");
    const wanted = link.dataset.service.replace(/&amp;/g, "&");
    [...select.options].forEach((opt) => {
      if (opt.text.trim() === wanted) select.value = opt.value || opt.text;
    });
  });
});

/* ---------- Quote form → WhatsApp / email ---------- */
const form = document.getElementById("quote-form");
const formError = document.getElementById("form-error");

function readForm() {
  return {
    name: document.getElementById("q-name").value.trim(),
    phone: document.getElementById("q-phone").value.trim(),
    area: document.getElementById("q-area").value.trim(),
    service: document.getElementById("q-service").value,
    date: document.getElementById("q-date").value,
    details: document.getElementById("q-details").value.trim(),
  };
}

function validate(data) {
  const ok = data.name && data.phone && data.service && data.details;
  formError.hidden = ok;
  return ok;
}

function buildMessage(data) {
  const lines = [
    `Hello ${BUSINESS.name}, I'd like to request a quote.`,
    ``,
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
  ];
  if (data.area) lines.push(`Area: ${data.area}`);
  lines.push(`Service: ${data.service}`);
  if (data.date) lines.push(`Preferred date: ${data.date}`);
  lines.push(``, `Job description:`, data.details);
  return lines.join("\n");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = readForm();
  if (!validate(data)) return;
  const url =
    "https://wa.me/" +
    BUSINESS.whatsappNumber +
    "?text=" +
    encodeURIComponent(buildMessage(data));
  window.open(url, "_blank", "noopener");
});

document.getElementById("email-fallback").addEventListener("click", () => {
  const data = readForm();
  if (!validate(data)) return;
  const subject = `Quote request: ${data.service} — ${data.name}`;
  window.location.href =
    "mailto:" +
    BUSINESS.email +
    "?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(buildMessage(data));
});

/* ---------- Scroll reveal ---------- */
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("visible"));
}

/* ---------- Footer year ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
