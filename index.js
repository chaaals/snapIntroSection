"use strict";

// Variables
const burgerMenu = document.querySelector(".burger-menu");
const mobileMenu = document.querySelector(".backdrop");
const closeMenu = document.querySelector(".close-menu");

const features = document.querySelectorAll(".feature");
const featuresActive = document.querySelectorAll(".features-expanded");
let featureIcon;
const [featureDesktop, featureMobile] = features;

const [_featureDesktop, _featureMobile] = featuresActive;

const company = document.querySelectorAll(".company");
const companyActive = document.querySelectorAll(".company-expanded");
let companyIcon;

const [companyDesktop, companyMobile] = company;

const [_companyDesktop, _companyMobile] = companyActive;

// Functions

// for mobile viewport
let featureStateMobile = true;
let companyStateMobile = true;

// for desktop viewport
let featureStateDesktop = true;
let companyStateDesktop = true;

const activeState = function (parent, icon, isDown, viewport) {
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

  if (viewport === "mobile") {
    current === "feature"
      ? (featureStateMobile = isDown)
      : (companyStateMobile = isDown);

    current === "feature"
      ? _featureMobile.classList.toggle("hidden")
      : _companyMobile.classList.toggle("hidden");
  }

  if (viewport === "desktop") {
    current === "feature"
      ? (featureStateDesktop = isDown)
      : (companyStateDesktop = isDown);

    current === "feature"
      ? _featureDesktop.classList.toggle("hidden")
      : _companyDesktop.classList.toggle("hidden");
  }
};

// Event listeners
// for mobile nav
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

// for mobile viewport
featureMobile.addEventListener("click", (e) => {
  featureIcon = [...featureMobile.children].find((child) =>
    child.classList.contains("features-dropdown-icon")
  );

  if (e.target.classList.contains("feature-item")) return;

  activeState(featureMobile, featureIcon, featureStateMobile, "mobile");
});

companyMobile.addEventListener("click", (e) => {
  companyIcon = [...companyMobile.children].find((child) =>
    child.classList.contains("company-icon")
  );

  if (e.target.classList.contains("company-item")) return;
  activeState(companyMobile, companyIcon, companyStateMobile, "mobile");
});

// for desktop viewport
featureDesktop.addEventListener("click", (e) => {
  featureIcon = [...featureDesktop.children].find((child) =>
    child.classList.contains("features-dropdown-icon")
  );

  if (e.target.classList.contains("feature-item")) return;

  activeState(featureMobile, featureIcon, featureStateMobile, "desktop");
});

companyDesktop.addEventListener("click", (e) => {
  companyIcon = [...companyDesktop.children].find((child) =>
    child.classList.contains("company-icon")
  );

  if (e.target.classList.contains("company-item")) return;
  activeState(companyMobile, companyIcon, companyStateMobile, "desktop");
});
