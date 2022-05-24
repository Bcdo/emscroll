let observedElement;
let backgroundImages;
let showBoolean = true;

window.addEventListener(
  "load",
  (e) => {
    observedElement = document.querySelector(".section-two");
    backgroundImages = document.querySelectorAll(".image");
    createObserver();
  },
  false
);

function createObserver() {
  let observer;
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };
  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(observedElement);
}

function handleIntersect() {
  showBoolean = !showBoolean;
  if (showBoolean) {
    backgroundImages.forEach((image) => {
      image.classList.add("fade-in");
    });
  }
  if (!showBoolean) {
    backgroundImages.forEach((image) => {
      image.classList.remove("fade-in");
    });
  }
}
