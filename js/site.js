const navToggle = document.querySelector("#nav-toggle");
document.querySelectorAll(".nav-panel a").forEach((link) => {
  link.addEventListener("click", () => {
    if (navToggle) navToggle.checked = false;
  });
});

const form = document.querySelector("#book-form");
const status = document.querySelector("#book-status");

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) {
    return;
  }
  const hike = form.elements.namedItem("hike");
  const hikeName = hike instanceof HTMLSelectElement ? hike.selectedOptions[0]?.textContent : "that day";
  if (status) {
    status.textContent = `Request noted for ${hikeName}. This prototype does not send it anywhere. A real shop would write back with a meeting place and a weather call.`;
  }
  form.reset();
});
