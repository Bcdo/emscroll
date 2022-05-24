let observedElements = document.querySelectorAll(".inview-element");

const options = {
  threshold: 0.5,
  rootMargin: "0px",
};

const inviewCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("inview");
    } else {
      entry.target.classList.remove("inview");
    }
  });
};

let observer = new IntersectionObserver(inviewCallback, options);

observedElements.forEach((element) => {
  observer.observe(element);
});
