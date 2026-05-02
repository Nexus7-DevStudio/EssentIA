const siteHeader = document.querySelector("[data-site-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const siteNav = document.querySelector("[data-site-nav]");
const navLinks = siteNav ? siteNav.querySelectorAll("a") : [];
const faqButtons = document.querySelectorAll(".faq__button");
const diagnosticForms = document.querySelectorAll("[data-diagnostic-form]");
const WHATSAPP_DIAGNOSTIC_URL =
  "https://wa.me/5519998477151?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20EssentIA%20Social%20e%20quero%20agendar%20um%20diagn%C3%B3stico.";

if (navToggle && siteHeader && siteNav) {
  const closeNavigation = () => {
    siteHeader.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = siteHeader.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", closeNavigation);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
      closeNavigation();
    }
  });
}

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const contentId = button.getAttribute("aria-controls");
    const content = contentId ? document.getElementById(contentId) : null;
    const isExpanded = button.getAttribute("aria-expanded") === "true";

    faqButtons.forEach((otherButton) => {
      const otherContentId = otherButton.getAttribute("aria-controls");
      const otherContent = otherContentId ? document.getElementById(otherContentId) : null;

      otherButton.setAttribute("aria-expanded", "false");

      if (otherContent) {
        otherContent.hidden = true;
      }
    });

    if (content && !isExpanded) {
      button.setAttribute("aria-expanded", "true");
      content.hidden = false;
    }
  });
});

diagnosticForms.forEach((diagnosticForm) => {
  diagnosticForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!diagnosticForm.checkValidity()) {
      diagnosticForm.reportValidity();
      return;
    }

    const feedback = diagnosticForm.querySelector(".diagnostic-form__feedback");

    if (feedback) {
      feedback.hidden = false;
      feedback.textContent =
        "Recebemos seus dados. Vamos abrir o WhatsApp para continuar o diagnóstico com a equipe EssentIA Social.";
    }

    diagnosticForm.reset();
    window.open(WHATSAPP_DIAGNOSTIC_URL, "_blank", "noopener");
  });
});
