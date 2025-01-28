const navButton = document.querySelector(".btn-mobile-icon-container");
const mainNav = document.querySelector(".header");
navButton.addEventListener("click", () => {
  mainNav.classList.toggle("open-nav");
  const html = document.documentElement;
  if (html.style.overflow === "hidden") {
    html.style.overflow = "";
  } else {
    html.style.overflow = "hidden";
  }
});

// Select the target element
const sectionHeroEl = document.querySelector(".section-hero");
// Use interactionObserver API provides a way to asynchronously observe changes in the interaction of the target element with an ancestor element
const orb = new IntersectionObserver(
  (entries) => {
    console.log(entries[0]);
    console.log(entries[0].isIntersecting);
    // if isIntersecting is false, meaning the target element is not within the viewport, apply sticky class
    if (!entries[0].isIntersecting) {
      document.body.classList.add("sticky");
    }
    // if is Intersection is true, meaning the target element is within the viewport, remove sticky class
    if (entries[0].isIntersecting) {
      console.log("hello");
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null, // viewport
    threshold: 0, // the percentage of visibility at which observer's callback should be executed.

    rootMargin: "-62px 0px 0px 0px",
  }
);

orb.observe(sectionHeroEl);
