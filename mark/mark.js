const background = document.querySelectorAll(".background")

window.addEventListener(
    "load",
    (e) => {
        const paragraph = document.querySelectorAll(".txt_observer")

        observer.observe(paragraph[0]);
        observer2.observe(paragraph[1]);
    },
    false
  );
  

const observer = new IntersectionObserver(Elentries =>{
    background[0].classList.toggle("show-background", Elentries[0].isIntersecting)
})

const observer2 = new IntersectionObserver(Elentries =>{
    background[1].classList.toggle("show-background", Elentries[0].isIntersecting)
})