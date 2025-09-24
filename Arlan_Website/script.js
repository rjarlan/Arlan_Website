// Dropdown toggle functionality for "Pages" menu

document.addEventListener("DOMContentLoaded", function () {
  const pagesBtn = document.getElementById("pagesBtn");
  const pagesMenu = document.getElementById("pagesMenu");

  if (pagesBtn && pagesMenu) {
    pagesBtn.addEventListener("click", function (e) {
      const expanded = pagesBtn.getAttribute("aria-expanded") === "true";
      pagesBtn.setAttribute("aria-expanded", !expanded);
      if (expanded) {
        pagesMenu.setAttribute("hidden", "");
      } else {
        pagesMenu.removeAttribute("hidden");
      }
    });

    // Close dropdown if clicking outside
    document.addEventListener("click", function (e) {
      if (!pagesBtn.contains(e.target) && !pagesMenu.contains(e.target)) {
        pagesBtn.setAttribute("aria-expanded", "false");
        pagesMenu.setAttribute("hidden", "");
      }
    });
  }
});