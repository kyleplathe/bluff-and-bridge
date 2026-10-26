/**
 * Working name — change this constant (and matching .site-name text in HTML)
 * when the brand name is finalized.
 */
const SITE_NAME = "Bluff & Bridge";

document.querySelectorAll(".site-name").forEach((el) => {
  el.textContent = SITE_NAME;
});

const yearEl = document.querySelector("#year");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

const form = document.querySelector("#book-form");
const status = document.querySelector("#book-status");

form?.addEventListener("submit", (event) => {
  const endpoint = form.getAttribute("data-endpoint");
  const hasRealEndpoint = endpoint && !endpoint.includes("[");

  if (hasRealEndpoint) {
    form.setAttribute("action", endpoint);
    return;
  }

  event.preventDefault();
  if (!form.reportValidity()) {
    return;
  }

  const name = form.elements.namedItem("name");
  const preferred = form.elements.namedItem("preferred");
  const contact = form.elements.namedItem("contact");
  const nameVal = name instanceof HTMLInputElement ? name.value.trim() : "";
  const preferredVal = preferred instanceof HTMLInputElement ? preferred.value.trim() : "";
  const contactVal = contact instanceof HTMLInputElement ? contact.value.trim() : "";

  const body = [
    `Name: ${nameVal}`,
    `Preferred day/time: ${preferredVal}`,
    `Phone or email: ${contactVal}`,
  ].join("\n");

  const mailto = `mailto:[EMAIL]?subject=${encodeURIComponent("Walk request")}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;

  if (status) {
    status.textContent = "Opening your email app with this request. If nothing opens, text or email Caitlin with the links above.";
  }
});
