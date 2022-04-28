// about section tab

(() => {
  const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");

  tabsContainer.addEventListener("click", (event) => {
    /*if event.target contains 'tab-item' class and not contains 'active' class */
    if (
      event.target.classList.contains("tab-item") &&
      !event.target.classList.contains("active")
    ) {
      const target = event.target.getAttribute("data-target");
      // deactivate existing active 'tab-item' class
      tabsContainer
        .querySelector(".active")
        .classList.remove("outer-shadow", "active");
      //   active new outer-shadow
      event.target.classList.add("active", "outer-shadow");
      // deactivate existing active 'tab-content' class
      aboutSection
        .querySelector(".tab-content.active")
        .classList.remove("active");
      //  active new'tab-content' class
      aboutSection.querySelector(target).classList.add("active");
    }
  });
})();
