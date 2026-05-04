(() => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".site-toggle");
  const nav = document.querySelector(".site-nav");
  const closeTargets = document.querySelectorAll(".site-nav__link, .site-nav__cta");

  if (!header || !toggle || !nav) {
    return;
  }

  const setMenuState = (isOpen) => {
    header.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  };

  toggle.addEventListener("click", () => {
    const isOpen = header.classList.contains("is-open");
    setMenuState(!isOpen);
  });

  closeTargets.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 900px)").matches) {
        setMenuState(false);
      }
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      setMenuState(false);
    }
  });

  const updateHeaderOnScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  updateHeaderOnScroll();
  window.addEventListener("scroll", updateHeaderOnScroll, { passive: true });
})();

(() => {
  const faqItems = document.querySelectorAll(".faq-item");

  if (!faqItems.length) {
    return;
  }

  faqItems.forEach((item) => {
    const button = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".faq-question__icon");

    if (!button || !answer || !icon) {
      return;
    }

    button.addEventListener("click", () => {
      const isOpen = button.getAttribute("aria-expanded") === "true";

      if (isOpen) {
        button.setAttribute("aria-expanded", "false");
        item.classList.remove("is-open");
        icon.classList.remove("is-open");

        window.setTimeout(() => {
          if (button.getAttribute("aria-expanded") === "false") {
            answer.hidden = true;
          }
        }, 260);

        return;
      }

      answer.hidden = false;
      button.setAttribute("aria-expanded", "true");
      item.classList.add("is-open");
      icon.classList.add("is-open");
    });
  });
})();
