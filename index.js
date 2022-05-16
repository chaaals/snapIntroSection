"use strict";

// Variables
const burgerMenu = document.querySelector(".burger-menu");
const mobileMenu = document.querySelector(".backdrop");
const closeMenu = document.querySelector(".close-menu");

const features = document.querySelector(".feature");
const featuresActive = document.querySelector(".features-expanded");
const featureIcon = [...features.children].find((child) =>
  child.classList.contains("features-dropdown-icon")
);

const company = document.querySelector(".company");
const companyActive = document.querySelector(".company-expanded");
const companyIcon = [...company.children].find((child) =>
  child.classList.contains("company-icon")
);

// functions

let featureState = true;
let companyState = true;
const activeState = function (parent, icon, isDown) {
  const path = "./images/icon-arrow-";
  const current = parent.getAttribute("class");
  console.log(current);

  if (isDown) {
    icon.dataset.state = "up";
    isDown = false;

    icon.setAttribute("src", `${path}${icon.dataset.state}.svg`);
  } else {
    icon.dataset.state = "down";
    isDown = true;

    icon.setAttribute("src", `${path}${icon.dataset.state}.svg`);
  }

  current === "feature" ? (featureState = isDown) : (companyState = isDown);

  current === "feature"
    ? featuresActive.classList.toggle("hidden")
    : companyActive.classList.toggle("hidden");
};

burgerMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
closeMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

mobileMenu.addEventListener("click", (e) => {
  if (e.target.closest(".modal-menu-mobile")) return;

  mobileMenu.classList.toggle("hidden");
});

features.addEventListener("click", () =>
  activeState(features, featureIcon, featureState)
);

company.addEventListener("click", () =>
  activeState(company, companyIcon, companyState)
);
